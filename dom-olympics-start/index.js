const header = document.getElementById("header");
header.innerHTML += "<p>JavaScript Made This !!</p>"
header.innerHTML += "<p><span id='my-name'>DiLeonté Burnside</span> made this</p>"

document.getElementById("my-name").style.color = "blue"

const leftMessages = document.getElementsByClassName("message left");
leftMessages[0].textContent = "I have some exciting news to tell you!";
leftMessages[1].textContent = "I got the job!";

const rightMessages = document.getElementsByClassName("message right");
rightMessages[0].textContent = "What's that ?!";
rightMessages[1].textContent = "That's great!";

const clear = document.getElementById('clear-button')
clear.innerHTML = "<input type='reset' value='Clear'></input>"