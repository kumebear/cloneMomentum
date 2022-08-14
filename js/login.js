const loginForm=document.querySelector("#login-form");
const loginInput = loginForm.querySelector("h2 input");
const logined = document.querySelector("#logined");
function handlerLogin(event){
    const user = loginInput.value;
    localStorage.setItem("user",user);
    

}
function handlerLogout (){
   localStorage.removeItem("user");
    location.reload();
}

const user = localStorage.getItem("user");
if(user!== null){
    const btn=document.createElement("button");
    btn.innerText="❌";
    logined.innerText=`hello ${user}`;
    logined.appendChild(btn);
    loginForm.classList.add("hidden")
    logined.classList.remove("hidden");
    logined.classList.add("style-login");
    btn.addEventListener("click",handlerLogout);

}

loginForm.addEventListener("submit",handlerLogin);