function validation()
{var E=document.getElementById("MailId");
var P=document.getElementById("PassWord");
var regex=/@gmail/i;


if(E.value==""&&P.value==""){
alert ("please Enter Mail Id and Password");
E.style.border="1px solid red";
P.style.border="1px solid red"; return false;}

else if(E.value==""){
alert ("please Enter Mail Id");
 E.style.border="1px solid red"; return false;;
}
else if(P.value==""){
alert ("please Enter  Password");
 P.style.border="1px solid red"; return false;}
 else{true;}



}