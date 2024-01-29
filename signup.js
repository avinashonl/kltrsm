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
let cpassword = document.getElementById("cpassword");
let btn1 = document.getElementById("btn1");

btn1.addEventListener('click', ()=>{
    if (name.value.trim() == ''){
        alert("Please enter your name");
    } else if (email.value.trim() == ''){
        alert("Please enter your email");
    } else {
        alert("success");
    }
})
