//password showhide 2 functions//
function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
var password = document.getElementById('cpass');
      var toggler = document.getElementById('toggler');

      showHidePassword = () => {
        if (password.type == 'password') {
          password.setAttribute('type', 'text');
          toggler.classList.add('fa-eye-slash');
        } else {
          toggler.classList.remove('fa-eye-slash');
          password.setAttribute('type', 'password');
        }
      };
      toggler.addEventListener('click', showHidePassword);

 //check function//     
let name = document.getElementById("name");
let email = document.getElementById("email");
let passw = document.getElementById("pass");
let passc = document.getElementById("cpass");
let btn1 = document.getElementById("btn1");

const isName = /^[a-zA-Z\s]+$/
const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const isPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

btn1.addEventListener('click', ()=>{
    if (name.value.trim() == ''){
        alert("Please enter your Name!");
    } else if(!isName.test(name.value.trim())){
        alert("Please enter your Name correctly!");
    }

    else if (email.value.trim() == ''){
        alert("Please enter your Email!");
    } else if (!isEmail.test(email.value.trim())){
        alert("Email should be in proper format!");
    } 

    else if (pass.value.trim() == ''){
      alert("Please enter a Password!");
    } else if (!isPass.test(pass.value.trim())){
      alert("Password must contain minimum of 8 characters and also contain atleast one uppercase letter, one lowercase letter, one number and one special character!");
    }
    
    else if (cpass.value.trim() != pass.value.trim()){
      alert("Password mismatch!");
    }

    else {
        alert("Successfully signed up");
    }
})
