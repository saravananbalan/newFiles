var k="subtracted";
function fun(a,b,s){
var c= a+b+30;
alert(c);
alert(s);
alert("welcome");
}

function sub(a,b){
var c=b-a;
alert(c);
alert(window.k);
}

function names(str){
var k=str.slice(0,2);
var i=str.indexOf("g");
alert(k);
alert(i);
document.write(10<20);
}

function promp(){
document.write(navigator.appVersion);
var s = prompt("what is your name?");
alert("i am "+s);
}

function url(){
open("http://www.google.com");
}

function username(){
var v = document.newForm.name.value;
alert(v);
}

function submit(){
var vr = document.getElementsById("number").value;
alert(vr*vr);
}

function radioVal(){
var value = document.getElementsByName("gender");
alert(value.length);
}

/*function innerht(){
var j="Name:<input type ="text" name ="name"><br> Comment:<br> <textarea  rows="5" cols="10"> </textarea> <br><input type="submit" value = "send">";
document.getElementsById("a").innerHTML = j;
}*/

function checkPass(){
var mess;
if(document.passName.pass.value.length>6){
mess="good";
}else{
mess= "bad";
}
document.getElementById('e').innerText=mess;
}

function validate(){
var name = document.validateForm.name.value;
var pass = document.validateForm.password.value;
var pass1= document.validateForm.password1.value;
if(name==null || name ==""){
alert("enter Name");
return false;
}
else if(pass.length<6){
alert("pass should 6 chars");
return false;
}
else if(pass==pass1){
alert("match");
return true;
}
else{
alert("password mismatch");
return false;
}
}

function validateEmail(){
var x = document.validate.email.value;
var atPos = x.indexOf("@");
var dotPos = x.lastIndexOf(".");
if(atPos<1 || dotPos<atPos+2 || x.length<=dotPos+2){
var v = new Array("austin","pradeep","raj");
var k = [5,9,7,8,2];
var rever = k.reverse();
document.write(rever+"<br>");
var r =k.find(x=>x<5);
document.write(r+"<br>");
var j = ["total","avg","percent"];
var result = j.join("-");
document.write(result+"<br>");
window.history;
for(i=0;i<v.length;i++)
{
document.write(v[i].concat(" kumar")+"<br>");
}
alert("Enter valid email id");
return false;
}
}

