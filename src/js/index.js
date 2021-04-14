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
let st = $(".figure1").offset().bottom
if (st >= 20) {
    $(".figure1 img").one().fadeIn()
}
$(".concent .text1").mouseover(function () {
    $(this).css({ "color": "#f56868", "background": "#fff" })
    $(".concent .text2").css({ "color": "#fff", "background": "#a4a4a4" })
    $(".phone").show()
    $(".shop").hide()
})
$(".concent .text2").mouseover(function () {
    $(this).css({ "color": "#f56868", "background": "#fff" })
    $(".concent .text1").css({ "color": "#fff", "background": "#a4a4a4" })
    $(".phone").hide()
    $(".shop").show()
})


// 接口地址：http://jx.xuzhixiang.top/ap/api/productlist.php
// 接口请求方式：get
// 接口参数：
// 无需参数（不登录也能看到商品列表）
//  uid 可选参数，可以看到当前用户上传到服务器的商品
// 使用方式
// http://jx.xuzhixiang.top/ap/api/productlist.php
// 服务器返回json数据

axios.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
    params: {
        uid: "51192"
    }
}).then(res => {
    console.log(res);
    let data = res.data.data
    console.log(data);
    let str = ""
    data.forEach(items => {
        str +=
            `
         
                     <div class="figure">
                     <a href="../html/detail.html?id=${items.pid}">
                     <img src="${items.pimg}"alt="">
                     <figcaption>
                     <h3>${items.pname}</h3>
                     <h4>${items.pprice}</h4>
                     </figcaption>
                     </a>
                 </div>
        
     `
    });

    $(".phone").html(str)
    $(".phone").find("div").eq(0).attr('class', "figure1");
    $(".figure1").children("img").css({ "margin-top": "105px"})
 
})
