let text1 = $(".text1");
let text2 = $(".text2");
let btn1 = $(".btn1");
let text3 = $(".text3");
let btn2 = $(".btn2");
let checkbox = $("checkbox");

btn1.click(function () {
    alert("已获得验证码")
});

text1.change(function () {
    var reg = /^1\d{10}$/ || /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if (reg.test($(this).val()) == false) {
        alert("请输入正确手机号或邮箱")
    } else {
        text3.change(function () {
            var reg = /^[a-zA-z]\w{5,15}$/;
            if (reg.test($(this).val()) == false) {
                alert("请输入正确的密码格式")
            } else {
                btn2.click(function () {
                   
                    if (checkbox.prop("checked")) {
                        if (text1.val() && text2.val() && text3.val() != "") {
                            $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
                                username: text1.val(),
                                password: text3.val(),
                            },
                                res => {
                                    console.log(res.code);
                                    if (res.code == 1) {
                                        alert("注册成功")
                                        location.href = "rejist.html";
                                    } else {
                                        alert("注册失败")
                                    }
                                });
                        }
                    } else { alert("请阅读并同意《账号使用协议》《隐私政策》") }
                });
              
            }
        });
    }
});


