"use strict";
function runClock(){
    const time = new Date();
    const clock = document.getElementById("clock");
   
    /* for later use
    const date = document.getElementById("date");
    const day = time.getDate().toString().padStart(2,0);
    const month = time.getMonth().toString().padStart(2,0);
    const year = time.getFullYear();
    const dateNow = `${day}/${month}/${year}`
    date.textContent = dateNow */
   
    let hour = time.getHours();
    const meridiem = hour >= 12 ? "PM" : "AM";
    hour = hour %12 || 12;
    hour = hour.toString().padStart(2,0);
    const minutes = time.getMinutes().toString().padStart(2,0);
    const seconds = time.getSeconds().toString().padStart(2,0);

    const timeNow = `${hour}:${minutes}:${seconds} ${meridiem}`;

    clock.textContent = timeNow;
    

}
runClock();
setInterval(runClock,1000);
