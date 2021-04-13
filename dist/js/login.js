// let text1 = $(".text1");
// text1.change(function(){
//     var reg =/^([a-z0-9A-Z]+[-|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$/ || /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$/;
//     if (reg.test($(this).val()) == false){
//         alert("请输入正确格式")
//     }
// })

// let text2 = $(".text2");
// let btn1 = $(".btn1");

// btn1.click(function () {
//     console.log("ok");
//     function rand(min, max) {
//         return Math.floor(Math.random() * (max - min)) + min;
//     }
//     rand(1000, 9999) = text2.val()
// });

// let text3 = $(".text3");
// text3.change(function(){
//     var reg =/^(?!^(\\d+|[a-zA-Z]+|[~!@#$%^&*?/]+)$)^[\\w~!@#$%^&*?/]{6,16}$"/;
//     if (reg.test($(this).val()) == false){
//         alert("请输入正确格式")
//     }
// })

// let btn2 = $(".btn2");
// let checkbox = $("checkbox")
// btn2.click(function () {
//     if (checkbox = true) {
//         if (text1.val() && text2.val() && text3.val() != "") {
//             $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
//                 username: text1.val(),
//                 password: text3.val(),
//             },
//                 res => {
//                     console.log(res.code);
//                     if (res.code == 1) {
//                         alert("注册成功")
//                         location.href = "html/login.html";
//                     } else {
//                         alert("注册失败")
//                     }
//                 });
//         }
//     } else { alert("请阅读并同意《账号使用协议》《隐私政策》") }
// });

let btn1 = $(".btn1");
btn1.click(function () {
       console.log("ok");
})