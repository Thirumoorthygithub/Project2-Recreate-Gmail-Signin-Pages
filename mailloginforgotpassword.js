function validation3()
{
 var E3=document.getElementById("emailid2");
 var P3=document.getElementById("password3");
 var CP2=document.getElementById("cpassword2");

 if(E3.value==""&&P3.value==""&&CP2.value=="")
 {
 alert ("Please Fill all Details");
E3.style.border="1px solid red";
 P3.style.border="1px solid red";
 CP2.style.border="1px solid red";
  return false;}
 
else if(E3.value==""){
 alert ("Please Enter Your Mail Id");
  E3.style.border="1px solid red"; 
  return false;}

else if(P3.value==""){
 alert ("Please Enter New Password");
  P3.style.border="1px solid red"; 
  return false;}

  else if(CP2.value==""){
 alert ("Please Enter Confirm Password");
  CP2.style.border="1px solid red"; 
  return false;}

   else{true;}

}