// $(function () {
//     $(".ulnav li").on({
//         mouseover: function () {
//             $(".ulnav").css({ "color": "#ccc" });
//             $(".navmean h3").css({ "color": "#000" });
//             let index = $(this).index();
//             $(".box li").eq(index).fadeIn().siblings().hide();

//         },
//         mouseout: function () {
//             $(".box").hide();
//             $(".ulnav").css({ "color": "#000" });

//         }
//     })
//     $(".ulnav li").hover(function () {
//         $(".box").show().hover(function () {
//             $(this).show();
//             // $(".box").css({ "color": "#000" });
//         }, function () {
//             $(this).hide();

//         })
//     }, function () {
//         $(".navmean").css({ "color": "#fff" });
//         $(".navmean h3").css({ "color": "#000" });
//         $(".box").hide();
//     })
// })
$(".mean").click(function () {
    $(".meannav").toggle();

})
$(".meancard").click(function () {
    location.href = "cart.html";
})
$(".meanlog").click(function () {
    location.href = "rejist.html";
})
let str = JSON.parse(localStorage.getItem("user"))
let uid = str.id;

axios.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
    params: {
        id: uid
    }
}).then(res => {
    console.log(res);
    let data = res.data.data;
    console.log(data);

    let shop = data.map(res =>
        `
            <ul>
                    <li class="check"> <input id="check" type="checkbox" name="" id=""></li>
                    <li class="pic"><img src="${res.pimg}" alt=""></li>
                    <li class="pname">${res.pname}</li>
                    <li class="pprice">单价：${res.pprice}</li>
                    <li>
                        <div class="detailbox">
                            <span class="minus" onclick="subNumEvent(${res.pid} , window.event)">-</span><input type="text" value="${res.pnum}" class="num"><span
                                class="plus"  onclick="addNumEvent(${res.pid} , window.event)">+</span>
                        </div>
                    </li>
                    <li>
                        <button class="btn1" onclick="delEvent(${res.pid},window.event)">删除</button>
                    </li>
                </ul>
                
            `);

    $(".boxcard").html(shop.join(""))
 
    // console.log($(".pprice").text($("allMoney")))
})
function delEvent(pid, evt) {
    axios.get('http://jx.xuzhixiang.top/ap/api/cart-delete.php', {
        params: {
            uid: uid,
            pid: pid
        }
    }).then(res => {
        alert(res.data.msg)
        evt.target.parentNode.parentNode.remove()
    })

}

//减
function subNumEvent(pid, evt) {
    let n = evt.target.nextElementSibling.value;
    n--;
    if (n < 1) {
        return;
    }
    // console.log("ok");
    evt.target.nextElementSibling.value = n;
    axios.get('http://jx.xuzhixiang.top/ap/api/cart-update-num.php', {
        params: {
            pid: pid,
            uid: uid,
            pnum: n
        }
    }).then(res => {
        console.log(res);
        let Pprice = $(evt.target.parentNode.parentNode.parentNode).find('.pprice').text()
        let allPnum = n * Pprice
        console.log(allPnum);
        $(evt.target.parentNode.parentNode.parentNode).find(".allpprice").text(Number(allPnum))
    })
}
//加
function addNumEvent(pid, evt) {
    let n = evt.target.previousElementSibling.value;
    n++;
    evt.target.previousElementSibling.value = n;
    axios.get('http://jx.xuzhixiang.top/ap/api/cart-update-num.php', {
        params: {
            pid: pid,
            uid: uid,
            pnum: n
        }
    }).then(res => {
        console.log(res);
    })
    console.log($(evt.target.parentNode.parentNode.parentNode));
    let Pprice = $(evt.target.parentNode.parentNode.parentNode).find('.pprice').html()
    let allPnum = n * Pprice
    $(evt.target.parentNode.parentNode.parentNode).find('.allpprice').html(Number(allPnum))
    // console.log($(evt.target.parentNode.parentNode).siblings('.allpprice'));
}

