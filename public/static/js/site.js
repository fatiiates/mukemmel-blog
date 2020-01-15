$(function(){
  $('#e-mail').click(function(){
    $('.builds-content-bottom[for="e-mail"]').removeClass("passive");
    $('.builds-content-bottom[for="phone"]').addClass("passive");
    $('.builds-content-bottom[for="social"]').addClass("passive");

    $(this).addClass("active");
    $("#phone").removeClass("active");
    $("#social").removeClass("active");
  });
  $('#phone').click(function(){
      $('.builds-content-bottom[for="e-mail"]').addClass("passive");
      $('.builds-content-bottom[for="phone"]').removeClass("passive");
      $('.builds-content-bottom[for="social"]').addClass("passive");

      $("#e-mail").removeClass("active");
      $(this).addClass("active");
      $("#social").removeClass("active");

  });
  $('#social').click(function(){
      $('.builds-content-bottom[for="e-mail"]').addClass("passive");
      $('.builds-content-bottom[for="phone"]').addClass("passive");
      $('.builds-content-bottom[for="social"]').removeClass("passive");
      $("#e-mail").removeClass("active");
      $("#phone").removeClass("active");
      $(this).addClass("active");

  });
  $('#gradient').change(function(){
    var n = $( "input:checked" ).length;
    if(n == 0)
      $('.builds').children('.container').removeAttr("style");
    else
      $('.builds').children('.container').attr("style",'background:transparent');

  });

});
