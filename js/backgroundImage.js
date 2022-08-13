const body= document.body;
images=[0,1,2,3];


const select = Math.floor(Math.random()*images.length);


body.style=`background-image:url('img/${select}.jpg')`

