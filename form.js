
document.addEventListener("DOMContentLoaded", function() {
    //form submit button
    document.getElementById('submit').addEventListener("click", formInfo);
    //popup close button
    document.getElementById('close_btn').addEventListener("click", closePopup);
});

//to close popup
function closePopup(){
    document.getElementById('popUp').style.display = "none";
}

function formInfo() {
    
    var info = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        tel: document.getElementById('telNo').value,
        email: document.getElementById('emailid').value,
        message: document.getElementById('Message').value
    }
    
    if(isFieldEmpty(info) && isNameValid(info) && isEmailValid(info) && isTelValid(info)) {
        document.getElementById('popUp').style.display = "flex";
        console.log(info);
        document.forms[0].reset();
    } else {
        console.log("validation failed")
    }
}

function isFieldEmpty(infoObj) {
    if(infoObj.fname != "" && infoObj.lname != "" && infoObj.email != "" && infoObj.message != "" ){
        return true;
    }
    else{
        alert("Fill all mandatory fields.")
        return false;
    }
}

function isNameValid(infoObj){
    var x = /^[A-Za-z]+$/;
    if (infoObj.fname.match(x) && infoObj.lname.match(x)) {
        return true;
   }
   else{
       alert("Only alphabets are allowed in name fields.");
       return false;
   }
}   
   
function isEmailValid(infoObj){
    //https://www.w3resource.com/javascript/form/email-validation.php (for email id validation)
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(infoObj.email) ){
        return true;
    }
    else{
        return false;
    }   
}

function isTelValid(infoObj){
    //https://www.w3resource.com/javascript/form/phone-no-validation.php
    if(infoObj.tel == "") {
        return true;
    } else  {
        if (/^\d{10}$/.test(infoObj.tel)){
            return true;
        }
        else{
            
            console.log("Phone validation failed")
            return false;
        }
    }
}

function messageLength(infoObj){
    if(50<infoObj.message.length>10){
        return true;
    }
    else{
        return false;
    }

}
