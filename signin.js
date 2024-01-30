function myFunction() {
    var x = document.getElementById("pss");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

let eml = document.getElementById("eml");
let pss = document.getElementById("pss");
let btn2 = document.getElementById("btn2");

const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const isPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

btn2.addEventListener('click', ()=>{

    if (eml.value.trim() == ''){
        alert("Please enter your Email!");
    } else if (!isEmail.test(eml.value.trim())){
        alert("Email should be in proper format!");
    } 

    else if (pss.value.trim() == ''){
        alert("Please enter a Password!");
    } else if (!isPass.test(pss.value.trim())){
        alert("Password must contain minimum of 8 characters and also contain atleast one uppercase letter, one lowercase letter, one number and one special character!");
    }
    
    else {
        alert("Successfully Signed in")
    }
})
