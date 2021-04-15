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
            $(".ulnav").css({ "color": "#fff" });

        }
    })
    $(".ulnav li").hover(function () {
        $(".box").css({ "color": "#000" });
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
$(".meancard").click(function () {
    location.href = "html/cart.html";
})
$(".meanlog").click(function () {
    location.href = "html/rejist.html";
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
        uid:51192
    }
}).then(res => {
    console.log(res);
    let data = res.data.data
    console.log(data);
    let str = 
    `
    <div class="phone">
    <div class="figure1">
    <a href="../html/detail.html?id=${data[0].pid}">
        <img src="${data[0].pimg}"
            alt="">
        <div class="txt">
            <h3>${data[0].pname}</h3>
            <h4>${data[0].pprice}</h4>
        </div>
        </a>
    </div>
    `
    for(let i=1; i<data.length;i++) {
        console.log(data[i]);
        str +=
            `
                     <div class="figure">
                     <a href="../html/detail.html?id=${data[i].pid}">
                     <img src="${data[i].pimg}"alt="">
                     <figcaption>
                     <h3>${data[i].pname}</h3>
                     <h4>${data[i].pprice}</h4>
                     </figcaption>
                     </a>
                 </div>
            `
            console.log();
    };

    $(".phone").html(str)
    
    // $(".phone").find("div").eq(0).attr('class', "figure1");
    //   $(".figure1 div:nth-child(1)").css({"margin-left":"100px"})

})
