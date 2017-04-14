$(document).ready(function(){

  $(".img_gallery2").hover(function(){
    $("#btn_prev2,#btn_next2").fadeIn()
  },function(){
    $("#btn_prev2,#btn_next2").fadeOut()
  });
  
  $dragBln = false;
  
  $(".main_img2").touchSlider({
    flexible : true,
    speed : 200,
    btn_prev : $("#btn_prev2"),
    btn_next : $("#btn_next2"),
    paging : $(".point2 a"),
    counter : function (e){
      $(".point2 a").removeClass("on").eq(e.current-1).addClass("on");//图片顺序点切换
      $(".img_font2 span").hide().eq(e.current-1).show();//图片文字切换
    }
  });

  $(".main_img2").bind("mousedown", function() {
    $dragBln = false;
  });
  
  $(".main_img2").bind("dragstart", function() {
    $dragBln = true;
  });
  
  $(".main_img2 a").click(function(){
    if($dragBln) {
      return false;
    }
  });
  
  timer = setInterval(function(){
    $("#btn_next2").click();
  }, 5000);
  
  $(".img_gallery2").hover(function(){
    clearInterval(timer);
  },function(){
    timer = setInterval(function(){
      $("#btn_next2").click();
    },5000);
  });
  
  $(".main_img2").bind("touchstart",function(){
    clearInterval(timer);
  }).bind("touchend", function(){
    timer = setInterval(function(){
      $("#btn_next2").click();
    }, 5000);
  });
  
});