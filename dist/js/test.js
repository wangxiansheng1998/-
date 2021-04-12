$(function () {
    $(".nav li").on({

        mouseover: function () {
            let index = $(this).index();
            $("hidebox li").eq(index).fadeIn().siblings().hide();
        },
        mouseout: function () {
            $("hidebox").hide();
        }
    })
    $(".nav li").hover(function () {
        $("hidebox").show().hover(function () {
            $(this).show();
        }, function () {
            $(this).hide();
        })
    }, function () {
        $("hidebox").hide();
    })
})