let txt1 = $(".txt1");
let txt2 = $(".txt2");
txt1.click(function () {
    $(this).css({ "color": "#000" })
    $(".txt2").css({ "color": "#ccc" })
    $(".boxphone").show();
    $(".boxpc").hide();
});
txt2.click(function () {
    $(this).css({ "color": "#000" })
    $(".txt1").css({ "color": "#ccc" })
    $(".boxphone").hide();
    $(".boxpc").show();
})

$(".btn2").click(function () {
    if ($(".text1").val() && $(".text2").val()) {
        $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
            username: $(".text1").val(),
            password: $(".text2").val(),
        }, res => {
            if (res.code == 1) {
                alert("登陆成功");
                location.href = "http://localhost:8080/";
                localStorage.setItem("user",JSON.stringify(res.data));
            } else {
                alert("用户名或密码不正确")
            }
        });

        // axios.get("http://jx.xuzhixiang.top/ap/api/login.php", {
        //     params: {
        //         username: $(".text1").val(),
        //         password: $(".text2").val()
        //     }

        // }).then(res => {
        //     if (res.code == 1) {
        //         alert("登陆成功");
        //         location.href = "http://localhost:8080/";
        //         localStorage.setItem("user",JSON.stringify(res.data));
        //     } else {
        //         alert("用户名或密码不正确")
        //     }
        // })
    } else {
        alert("用户名或密码不能为空")
    }
})

