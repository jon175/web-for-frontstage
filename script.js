// navigation 觸碰顏色控制

//Home
$(function(){

  $('.text1').mouseenter(function(){
    $('.text1').addClass('switch')
  });

});

$(function(){

  $('.text1').mouseleave(function(){
    $('.text1').removeClass('switch')
  });

});

// Name
$(function(){

  $('.text2').mouseenter(function(){
    $('.text2').addClass('switch')
  });

});

$(function(){

  $('.text2').mouseleave(function(){
    $('.text2').removeClass('switch')
  });

});

// Collection
$(function(){

  $('.text3').mouseenter(function(){
    $('.text3').addClass('switch')
  });

});

$(function(){

  $('.text3').mouseleave(function(){
    $('.text3').removeClass('switch')
  });

});

// Work
$(function(){

  $('.text4').mouseenter(function(){
     $('.text4').addClass('switch')
  });

});

$(function(){

  $('.text4').mouseleave(function(){
     $('.text4').removeClass('switch')
  });

});
$(function(){
  $('.fancybox-buttons').fancybox({
    openEffect  : 'none',
    closeEffect : 'none',

    prevEffect : 'none',
    nextEffect : 'none',

    closeBtn  : false,

    helpers : {
      title : {
        type : 'inside'
      },
      //buttons	: {}
    },

    // afterLoad : function() {
    //   this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
    // }
  });

});
