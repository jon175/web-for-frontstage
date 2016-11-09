$(document).ready(function(){
  $("nav .menu").click(function(){
    var $ul = $("nav ul");
    if( $ul.hasClass("menu-click")){
      $ul.removeClass("menu-click");
      $ul.slideUp();
    } else{
      $ul.addClass("menu-click");
      $ul.slideDown();
      $ul.css("position","relative");
      return false;
    }
  });
});
