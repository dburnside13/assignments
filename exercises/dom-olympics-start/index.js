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

const dropDown = document.getElementById("theme-drop-down")

dropDown.classList.toggle("theme-two");

dropDown.addEventListener("change", () => {
        for (let i = 0; i < messages.length; i++) {
            messages[i].classList.toggle("theme-two");
        }
    })

const send = document.getElementById("send");
const inputBox = document.getElementById("input")

function newFunction (e) {
    e.preventDefault()
    const newDiv = document.createElement("div")
    const mess = document.getElementsByClassName("message")
    console.log("list of message class divs", mess)
    console.log("2nd to last message div", mess[mess.length-1])
    const secondLastDiv = mess[mess.length-1]
    if (secondLastDiv.classList.contains("left")){
        newDiv.classList.add("right")
    }
    else {
        newDiv.classList.add("left")
    }
    document.getElementById("newmessage").appendChild(newDiv)
    newDiv.textContent = inputBox.value
    newDiv.classList.add("message")
    
}

send.addEventListener('click', newFunction)