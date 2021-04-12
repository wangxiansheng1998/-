let text1=$(".text1");
if(text1.val() !="^([a-z0-9A-Z]+[-|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$"||"^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$"){
    alert("请输入正确格式")
}
let text2=$(".text2");
let btn1=$(".btn1");
function rand(min,max) {
    return Math.floor(Math.random()*(max-min))+min;
}

btn1.click(function(){
    var randnum=rand(1000,9999)=text2.val()
});
let text3=$(".text3");
if(text3.val() !="^(?!^(\\d+|[a-zA-Z]+|[~!@#$%^&*?/]+)$)^[\\w~!@#$%^&*?/]{6,16}$"){
    alert("请输入正确格式")
}
let btn2=$(".btn2");
let checkbox =$("checkbox")
btn2.click(function(){
   if(checkbox=true){

   }else("请阅读并同意《账号使用协议》《隐私政策》")
});