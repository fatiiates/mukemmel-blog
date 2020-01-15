$(function(){
  $('#e-mail').click(function(){
    $('.builds-content-bottom[for="e-mail"]').show();
    $(this).addClass("active");
    $("#phone").removeClass("active");
    $("#social").removeClass("active");
  });
  $('#phone').click(function(){
      $('.builds-content-bottom[for="e-mail"]').hide();
      $('.builds-content-bottom[for="phone"]').show();
      $("#e-mail").removeClass("active");
      $(this).addClass("active");
      $("#social").removeClass("active");

  });
  $('#social').click(function(){
      $('.builds-content-bottom[for="e-mail"]').hide();
      $('.builds-content-bottom[for="phone"]').hide();
      $('.builds-content-bottom[for="social"]').show();
      $("#e-mail").removeClass("active");
      $("#phone").removeClass("active");
      $(this).addClass("active");

  });

});
