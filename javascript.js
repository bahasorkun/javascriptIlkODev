let username=prompt("Adınız Nedir?")
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
let myName= document.querySelector("#myName")
myName.innerHTML=username


function showTime() {
    let time = new Date();
    let day = days[time.getDay()];
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let secs = time.getSeconds();
    document.getElementById("myClock").innerHTML= `${hours}: ${minutes}: ${secs} ${day} `;
}

setInterval(showTime, 1000);