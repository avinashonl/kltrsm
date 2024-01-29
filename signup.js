//password showhide 2 functions//
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
var password = document.getElementById('cpassword');
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
let password = document.getElementById("password");
let btn1 = document.getElementById("btn1");

const isName = /^[a-zA-Z\s]+$/
const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const isPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

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
    else if (password.value.trim() == ''){
        alert("Please enter a Password");
    }
    else {
        alert("success");
    }
})
