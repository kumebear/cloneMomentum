const clock = document.querySelector("#clock h1");



function realTime (){
    const date = new Date();
    const hour=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const second=String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hour}:${minutes}:${second}`;
}

realTime();
setInterval(realTime,1000);





