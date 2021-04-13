$(function () {
    $(".ulnav li").on({
        mouseover: function () {
            $(".navmean").css({ "color": "#000" });
            $(".navmean h3").css({ "color": "#000" });
            let index = $(this).index();
            $(".box li").eq(index).show().siblings().hide();

        },
        mouseout: function () {
            $(".box").hide();
            $(".navmean").css({ "color": "#fff" });
            $(".navmean h3").css({ "color": "#fff" });
        }
    })
    $(".ulnav li").hover(function () {
        $(".box").show().hover(function () {
            $(this).show();
        }, function () {
            $(this).hide();
        })
    }, function () {
        $(".box").hide();
    })
})
  let st=$(".figure1").offset().bottom
  if (st >= 20){
      $(".figure1 img").one().fadeIn
  }
$(".concent .text1").mouseover(function () {
    $(this).css({"color":"#f56868" ,"background":"#fff"})
    $(".concent .text2").css({"color":"#fff","background":"#a4a4a4"})
    $(".phone").show()
    $(".shop").hide()
})
$(".concent .text2").mouseover(function () {
    $(this).css({"color":"#f56868","background":"#fff"})
    $(".concent .text1").css({"color":"#fff","background":"#a4a4a4"})
    $(".phone").hide()
    $(".shop").show()
})
