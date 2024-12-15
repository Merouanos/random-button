let button = document.getElementsByTagName("button")[0];

let p=document.getElementById("text");

let i=0;
button.onclick =function()
{

  button.style.top= `${Math.random()*90}%`;
  button.style.left= `${Math.random()*90}%`;
  i++;
  i==1?p.innerHTML=`You've clicked ${i} time`:p.innerHTML=`You've clicked ${i} times`;





}