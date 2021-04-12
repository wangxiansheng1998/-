$(".ul_nav li").each(function (i) {
    var index = $(this).index();
    console.log(i);
    $(this).mouseenter(function () {
        $(".box").eq(index).fadeIn()
        console.log("ok");
    })

})



