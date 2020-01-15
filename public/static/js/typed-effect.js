function typedEffect(){
      // .element html elementinin nasıl seçtiğimiz
      Typed.new('.text_element', {
        // yazı ne olacağı
        strings: [
          '<font style="font-size:30px;color:#b68cb9" ><</font><font style="font-size:30px;color:#741586" >Dizayn/</font><font style="font-size:30px;color:#b68cb9" >></font>',
          '<font style="font-size:30px;color:#4e95d2" >{</font>Kod<font style="font-size:30px;color:#4e95d2" >}</font>',
          '<font style="font-size:30px;color:#d42323" ><</font><font style="font-size:30px;color:#d42323" >?</font>Daha fazlası...'
        ],
       // typing speed
	      typeSpeed: 100,
	    // time before typing starts
	      startDelay: 100,
	      // backspacing speed
	      backSpeed: 100,
	      // shuffle the strings - yazılar karıştır
	      shuffle: false,
        // time before backspacing
        backDelay: 500,
        // Fade out instead of backspace (must use CSS class)
        fadeOut: false,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500, // milliseconds
        // loop
        loop: true,
        // null = infinite
        loopCount: null,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
            });
  };

$(function(){typedEffect();});
