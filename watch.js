let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let second = document.getElementById("seconds");

function clock(){
    let date = new Date();
    hour.innerText= date.getHours();
    minutes.innerText= date.getMinutes();
    second.innerText= date.getSeconds();
}
clock();
setInterval(clock,1000);