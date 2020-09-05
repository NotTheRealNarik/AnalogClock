const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

const HOURHAND2 = document.querySelector("#hour2");
const MINUTEHAND2 = document.querySelector("#minute2");
const SECONDHAND2 = document.querySelector("#second2");

const HOURHAND3 = document.querySelector("#hour3");
const MINUTEHAND3 = document.querySelector("#minute3");
const SECONDHAND3 = document.querySelector("#second3");

var date = new Date();

let hr = date.getHours();
var hour = hr%12
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = (hour*30)+(min*(360/60)/12);
let minPosition = (min*6)+sec*(360/60)/60;
let secPosition = sec*6;


function runClock1() {

  secPosition = secPosition+ 6;
  minPosition = minPosition+ (6/60);
  hrPosition = hrPosition + (3/360)
  
  HOURHAND.style.transform = "rotate(" + hrPosition +"deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition +"deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition +"deg)";


}

function runClock2() {

  var date = new Date();
  let hr = date.getHours();
  var hour = hr%12
  let min = date.getMinutes();
  let sec = date.getSeconds();
  
  let hrPosition = (hour*30)+(min*(360/60)/12);
  let minPosition = (min*6)+sec*(360/60)/60;
  let secPosition = sec*6;
  HOURHAND2.style.transform = "rotate(" + hrPosition +"deg)";
  MINUTEHAND2.style.transform = "rotate(" + minPosition +"deg)";
  SECONDHAND2.style.transform = "rotate(" + secPosition +"deg)";
  
  
  HOURHAND3.style.transform = "rotate(" + hrPosition +"deg)";
  MINUTEHAND3.style.transform = "rotate(" + minPosition +"deg)";
  SECONDHAND3.style.transform = "rotate(" + secPosition +"deg)";


}

var interval1 = setInterval( runClock1, 1000);
var interval2 = setInterval( runClock2, 1000);



