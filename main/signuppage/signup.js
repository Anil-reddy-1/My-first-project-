

const login=document.getElementById('login');

const signup = document.getElementById('signup');

const signuptoggler=document.getElementById('signup-director');

const logintoggler=document.getElementById('login-director');

signup.classList.add("display");


signuptoggler.addEventListener('click',()=>{
  signup.classList.remove("display");
  login.classList.add("display");
});


logintoggler.addEventListener('click',()=>{
  signup.classList.add("display");
  login.classList.remove("display");
});