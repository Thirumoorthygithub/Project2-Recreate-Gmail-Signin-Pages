function validation2()
{
          var N=document.getElementById("name");
          var D=document.getElementById("dob");
          var E2=document.getElementById("emailid");
          var P2=document.getElementById("password");
          var CP=document.getElementById("cpassword");

if(N.value==""&&D.value==""&&E2.value==""&&P2.value==""&&CP.value==""){
         alert ("Please Enter all Details");
        N.style.border="1px solid red";
         D.style.border="1px solid red";
         E2.style.border="1px solid red";
         P2.style.border="1px solid red";
         CP.style.border="1px solid red";
         return false;
        }
         else if(N.value==""){
         alert ("please Enter Your name");
          N.style.border="1px solid red";
        return false;}

        else if(D.value==""){
         alert ("please Enter  Your DOB");
          D.style.border="1px solid red";
          return false;}
        
          else if(E2.value==""){
         alert ("please Enter  Your Email Id");
          E2.style.border="1px solid red"; 
          return false;}
        
          else if(P2.value=="")
          {
         alert ("please Create Your password");
          P2.style.border="1px solid red";
          return false;}
        
          else if(CP.value=="")
          {
         alert ("please Enter Confirmation Number");
          CP.style.border="1px solid red";
          return false;}

        else{true;}
    
}