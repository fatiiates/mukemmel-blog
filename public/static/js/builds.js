var Building, Skyline, dt, sketch, skylines;

sketch = Sketch.create();

sketch.mouse.x = sketch.width / 10;

sketch.mouse.y = sketch.height;

skylines = [];

dt = 1;


// BUILDINGS

Building = function(config) {
  return this.reset(config);
};

Building.prototype.reset = function(config) {
  this.layer = config.layer;
  this.x = config.x;
  this.y = config.y;
  this.width = config.width;
  this.height = config.height;
  this.color = config.color;
  this.slantedTop = floor(random(0, 10)) === 0;
  this.slantedTopHeight = this.width / random(2, 4);
  this.slantedTopDirection = round(random(0, 1)) === 0;
  this.spireTop = floor(random(0, 15)) === 0;
  this.spireTopWidth = random(this.width * .01, this.width * .07);
  this.spireTopHeight = random(10, 20);
  this.antennaTop = !this.spireTop && floor(random(0, 10)) === 0;
  this.antennaTopWidth = this.layer / 2;
  return this.antennaTopHeight = random(5, 20);
};

Building.prototype.render = function() {
  sketch.fillStyle = sketch.strokeStyle = this.color;
  sketch.lineWidth = 2;
  sketch.beginPath();
  sketch.rect(this.x, this.y, this.width, this.height);
  sketch.fill();
  sketch.stroke();
  if (this.slantedTop) {
    sketch.beginPath();
    sketch.moveTo(this.x, this.y);
    sketch.lineTo(this.x + this.width, this.y);
    if (this.slantedTopDirection) {
      sketch.lineTo(this.x + this.width, this.y - this.slantedTopHeight);
    } else {
      sketch.lineTo(this.x, this.y - this.slantedTopHeight);
    }
    sketch.closePath();
    sketch.fill();
    sketch.stroke();
  }
  if (this.spireTop) {
    sketch.beginPath();
    sketch.moveTo(this.x + (this.width / 2), this.y - this.spireTopHeight);
    sketch.lineTo(this.x + (this.width / 2) + this.spireTopWidth, this.y);
    sketch.lineTo(this.x + (this.width / 2) - this.spireTopWidth, this.y);
    sketch.closePath();
    sketch.fill();
    sketch.stroke();
  }
  if (this.antennaTop) {
    sketch.beginPath();
    sketch.moveTo(this.x + (this.width / 2), this.y - this.antennaTopHeight);
    sketch.lineTo(this.x + (this.width / 2), this.y);
    sketch.lineWidth = this.antennaTopWidth;
    return sketch.stroke();
  }
};


// SKYLINES

Skyline = function(config) {
  this.x = 0;
  this.buildings = [];
  this.layer = config.layer;
  this.width = {
    min: config.width.min,
    max: config.width.max
  };
  this.height = {
    min: config.height.min,
    max: config.height.max
  };
  this.speed = config.speed;
  this.color = config.color;
  this.populate();
  return this;
};

Skyline.prototype.populate = function() {
  var newHeight, newWidth, results, totalWidth;
  totalWidth = 0;
  results = [];
  while (totalWidth <= sketch.width + (this.width.max * 2)) {
    newWidth = round(random(this.width.min, this.width.max));
    newHeight = round(random(this.height.min, this.height.max));
    this.buildings.push(new Building({
      layer: this.layer,
      x: this.buildings.length === 0 ? 0 : this.buildings[this.buildings.length - 1].x + this.buildings[this.buildings.length - 1].width,
      y: sketch.height - newHeight,
      width: newWidth,
      height: newHeight,
      color: this.color
    }));
    results.push(totalWidth += newWidth);
  }
  return results;
};

Skyline.prototype.update = function() {
  var firstBuilding, lastBuilding, newHeight, newWidth;
  this.x -= (sketch.mouse.x * this.speed) * dt;
  firstBuilding = this.buildings[0];
  if (firstBuilding.width + firstBuilding.x + this.x < 0) {
    newWidth = round(random(this.width.min, this.width.max));
    newHeight = round(random(this.height.min, this.height.max));
    lastBuilding = this.buildings[this.buildings.length - 1];
    firstBuilding.reset({
      layer: this.layer,
      x: lastBuilding.x + lastBuilding.width,
      y: sketch.height - newHeight,
      width: newWidth,
      height: newHeight,
      color: this.color
    });
    return this.buildings.push(this.buildings.shift());
  }
};

Skyline.prototype.render = function() {
  var i;
  i = this.buildings.length;
  sketch.save();
  sketch.translate(this.x, (sketch.height - sketch.mouse.y) / 20 * this.layer);
  while (i--) {
    this.buildings[i].render(i);
  }
  return sketch.restore();
};


// SETUP

sketch.setup = function() {
  var i, results;
  i = 5;
  results = [];
  while (i--) {
    results.push(skylines.push(new Skyline({
      layer: i + 1,
      width: {
        min: (i + 1) * 30,
        max: (i + 1) * 40
      },
      height: {
        min: 150 - (i * 35),
        max: 300 - (i * 35)
      },
      speed: (i + 1) * .003,
      color: 'hsl( 200, ' + (((i + 1) * 1) + 10) + '%, ' + (75 - (i * 13)) + '% )'
    })));
  }
  return results;
};


// CLEAR

sketch.clear = function() {
  return sketch.clearRect(0, 0, sketch.width, sketch.height);
};


// UPDATE

sketch.update = function() {
  var i, results;
  dt = sketch.dt < .1 ? .1 : sketch.dt / 16;
  dt = dt > 5 ? 5 : dt;
  i = skylines.length;
  results = [];
  while (i--) {
    results.push(skylines[i].update(i));
  }
  return results;
};


// DRAW

sketch.draw = function() {
  var i, results;
  i = skylines.length;
  results = [];
  while (i--) {
    results.push(skylines[i].render(i));
  }
  return results;
};


// Mousemove Fix

$(window).on('mousemove', function(e) {
  sketch.mouse.x = e.pageX;
  return sketch.mouse.y = e.pageY;
});
