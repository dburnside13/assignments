const h1 = document.createElement("h1")
h1.textContent = "JavaScript Made This !!";
document.getElementById("header").appendChild(h1);
h1.className = "header";

const subTitle = document.createElement("subTitle")
subTitle.innerHTML += '<span class="name">DiLeonté Burnside</span> made this';
document.getElementById("header").appendChild(subTitle);
subTitle.className = "header";

const messages = document.getElementsByClassName("message");

messages[0].textContent = "I have some exciting news to tell you!";
messages[1].textContent = "What's that ?!";
messages[2].textContent = "I got the job!";
messages[3].textContent = "That's great!";

document.getElementById("clear-button").addEventListener("click", clear)

function clear (){
document.getElementById("clear-button")
for (var i = 0; i < messages.length; i++){
    messages[i].textContent = ""
   }
}







document.getElementsByClassName("message left").addEventListener("toggle", toggle)

function toggle() { document.getElementById("message left").style.backgroundColor = "red" }
