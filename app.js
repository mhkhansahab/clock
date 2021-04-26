const secTick = document.getElementById("sec-tick");
const minTick = document.getElementById("min-tick");
const hourTick = document.getElementById("hour-tick");
const clockAudio = document.getElementById("audio");

const digitalSec = document.getElementById("sec");
const digitalMin = document.getElementById("min");
const digitalHour = document.getElementById("hour");
const day = document.getElementById("day");
const meridiem = document.getElementById("meridiem");


const date = new Date();
var sec = date.getSeconds();
var min = date.getMinutes();
var hours = date.getHours();

window.addEventListener('click', function() {
    clockAudio.play();
})

const getDay = (day)=>{
    if(day == 0){
        return "Sunday";
    }else if(day == 1){
        return "Monday";
    }else if(day == 2){
        return "Tuesday";
    }else if(day == 3){
        return "Wednesday";
    }else if(day == 4){
        return "Thurday";
    }else if(day == 5){
        return "Friday";
    }else{
        return "Saturday";
    }
}

const getHours = (hours)=>{
    if(hours > 12){
        return hours-12;
    }
    else{
        return hours
    }
}

const isAfternoon = (hours)=>{
    if(hours > 12){
        return "PM";
    }
    else{
        return "AM";
    }
}

const dayInAlpha = getDay(date.getDay());
day.innerHTML = dayInAlpha  +" - "+ date.getMonth() +" - "+ date.getFullYear();
meridiem.innerHTML = isAfternoon(hours);

setInterval(()=>{
    const secDegree = 360 / 60 * sec;
    const minDegree = 360 / 60 * min;
    const hourDegree = 360 / 12 * getHours(hours);

    sec = sec + 1;
    if(sec >= 60){
        sec = 0;
        min = min + 1;
        if(min >= 60){
            hour = hour + 1;
        }
    }

    secTick.style.transform = `rotate(${secDegree-90}deg)`;
    minTick.style.transform = `rotate(${minDegree-90}deg)`;
    hourTick.style.transform = `rotate(${hourDegree-90}deg)`;

    digitalHour.innerHTML = hours;
    digitalMin.innerHTML = min;
    digitalSec.innerHTML = sec;

}, 1000);



