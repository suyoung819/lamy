var i = 0;
var time = false;
var slideimg = $(".slide_img")

$(".prev_btn").click(function(e) {
        if (time == true) {
          return;
        }
        setTimeout(function() {
          time = false;
        }, 1000)
        time = true;
        i--;
        e.preventDefault();
        if (i < 0) {
          i = 3;
        }

        if (i == 3) {
          slideimg.eq(0).stop().animate({
            left: "100%"
          }, 1000);
          slideimg.eq(3).css("left", "-100%").stop().animate({
            left: "0%"
          }, 1000);
         
        } else if (i == 2) {
          slideimg.eq(3).stop().animate({
            left: "100%"
          }, 1000);
          slideimg.eq(2).css("left", "-100%").stop().animate({
            left: "0%"
          }, 1000);
         
        } else if (i == 1) {
          slideimg.eq(2).stop().animate({
            left: "100%"
          }, 1000);
          slideimg.eq(1).css("left", "-100%").stop().animate({
            left: "0%"
          }, 1000);
          
        } else {
          slideimg.eq(1).stop().animate({
            left: "100%"
          }, 1000);
          slideimg.eq(0).css("left", "-100%").stop().animate({
            left: "0%"
          }, 1000);
         
        }

      })
      $(".next_btn").click(function(e) {
        if (time == true) {
          return;
        }
        setTimeout(function() {
          time = false;
        }, 1000)
        time = true;
        e.preventDefault();
        i++;
        if (i > 3) {
          i = 0;
        }
        if (i == 1) {
          slideimg.eq(0).stop().animate({
            left: "-100%"
          }, 1000);
          slideimg.eq(1).css("left", "100%").stop().animate({
            left: "0%"
          }, 1000);
          
        } else if (i == 2) {
          slideimg.eq(1).stop().animate({
            left: "-100%"
          }, 1000);
          slideimg.eq(2).css("left", "100%").stop().animate({
            left: "0%"
          }, 1000);
          
        } else if (i == 3) {
          slideimg.eq(2).stop().animate({
            left: "-100%"}, 1000);
          slideimg.eq(3).css("left", "100%").stop().animate({
            left: "0%"}, 1000);
          
        } else {
          slideimg.eq(3).stop().animate({
            left: "-100%"}, 1000);
          slideimg.eq(0).css("left", "100%").stop().animate({
            left: "0%"}, 1000);
        }
      })