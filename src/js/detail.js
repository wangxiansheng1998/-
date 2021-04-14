$(function () {
    $(".ulnav li").on({
        mouseover: function () {
            $(".ulnav").css({ "color": "#ccc" });
            $(".navmean h3").css({ "color": "#000" });
            let index = $(this).index();
            $(".box li").eq(index).fadeIn().siblings().hide();

        },
        mouseout: function () {
            $(".box").hide();
            $(".ulnav").css({ "color": "#000" });

        }
    })
    $(".ulnav li").hover(function () {
        $(".box").show().hover(function () {
            $(this).show();
            $(".box").css({ "color": "#000" });
        }, function () {
            $(this).hide();

        })
    }, function () {
        $(".navmean").css({ "color": "#fff" });
        $(".navmean h3").css({ "color": "#000" });
        $(".box").hide();
    })
})
$(".mean").click(function () {
    $(".meannav").toggle();

})