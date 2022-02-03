

let date = new Date();

console.log(date);
let hours = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let year = date.getFullYear();
let mouth = date.getMonth();
let day = date.getDay();
let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];

function time1(){
if(hours < 10){hours = '0'+ hours};
if(min < 10){min = '0'+ min};
if(sec < 10){sec = '0'+ sec};
}
time1();
let time =  date.getHours() + ":" +  date.getMinutes() + ":" +  date.getSeconds();
document.getElementById("Time").innerHTML = 'Year: ' + year + ' <br> Today is: ' + daylist[day] + ' <br> Date: ' + day + ' <br> Month: ' + mouth + ' <br> Current time is: ' + time;
setInterval(time1 , 1000);

let start = new Date("02/03/2022");
let end = new Date("08/06/2024");
var Diff = start.getTime() - end.getTime();
var TimeRemaining = Diff / (1000 * 3600 * 24);
document.getElementById("add").innerHTML= TimeRemaining > 1 ? TimeRemaining + " days left until the Holidays" : TimeRemaining + " day left until the Holidays";

function multiply() {
    document.querySelector(
        "#result").innerHTML = document.querySelector("#num1").Value * document.querySelector("#secondNumber").value;
}
function divide() {
    document.querySelector(
        "#result").innerHTML = document.querySelector("#num2").Value / document.querySelector("#secondNumber").value;
}