$(function(){
  $('#e-mail').click(function(){
    $('.builds-content-bottom[for="social"]').addClass("passive").removeClass("active");
    $('.builds-content-bottom[for="phone"]').addClass("passive").removeClass("active");
    $('.builds-content-bottom[for="e-mail"]').removeClass("passive").addClass("active");

    $(this).addClass("active");
    $("#phone").removeClass("active");
    $("#social").removeClass("active");
  });
  $('#phone').click(function(){

    $('.builds-content-bottom[for="social"]').addClass("passive").removeClass("active");
    $('.builds-content-bottom[for="phone"]').removeClass("passive").addClass("active");
    $('.builds-content-bottom[for="e-mail"]').addClass("passive").removeClass("active");

    $("#e-mail").removeClass("active");
    $(this).addClass("active");
    $("#social").removeClass("active");
  });
  $('#social').click(function(){
      $('.builds-content-bottom[for="e-mail"]').addClass("passive").removeClass("active");
      $('.builds-content-bottom[for="phone"]').addClass("passive").removeClass("active");
      $('.builds-content-bottom[for="social"]').removeClass("passive").addClass("active");
      $("#e-mail").removeClass("active");
      $("#phone").removeClass("active");
      $(this).addClass("active");

  });
  $('#gradient').change(function(){
    var n = $( "input:checked" ).length;
    if(n == 0){
      $('#__next').children('.container').removeAttr("style").attr("style","background:linear-gradient(135deg, rgba(164,67,230,1) 20%, rgba(252,69,94,1) 50%, rgba(215,184,19,1) 80%);");
      $('#__next').children('.container').children('.builds').removeAttr("style").attr("style","background:rgba(255,255,255,.2);");
    }
    else{
      $('#__next').children('.container').removeAttr("style").attr("style",'background:transparent');
      $('#__next').children('.container').children('.builds').removeAttr("style").attr("style",'background:transparent');
    }

  });

});

//

function closeMenu(el){
  $('#div_nav').children('center').children('nav').children('ul').css({
    'display':'none'
  });
  el.remove();
}
