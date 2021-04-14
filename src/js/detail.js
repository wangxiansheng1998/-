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
let getId = new URLSearchParams(location.search);
let id = getId.get("id")
axios.get("http://jx.xuzhixiang.top/ap/api/detail.php", {
    params: {
        id: id
    }
}).then(res => {
    let data = res.data.data;
    $(".img1").attr("src", data.pimg);
    $(".picbox li").attr("src", data.pimg);
    $(".productname").text(data.pname);
    $(".product-ordinary p").text(data.pprice);
    // console.log(data.pname);
})


let pnum = $(".num").val();
$(".plus").click(function () {
    let pnum = $(".num").val();
    pnum++;
    $(".num").val(pnum)
})
$(".minus").click(function () {
    let pnum = $(".num").val();
    if(pnum<=1){
        return;
    }
    pnum--;
    $(".num").val(pnum)
})
 let str =JSON.parse(localStorage.getItem("user"))
 let uid=str.id;
//  console.log(uid);
$(".btn1").click(function(){
    axios.get("http://jx.xuzhixiang.top/ap/api/add-product.php",{
        params:{
            uid:uid,
            pid:id,
            pnum:pnum
        }
    }).then(res=>{
        console.log(res);
        location.href = "cart.html";
    })
})
