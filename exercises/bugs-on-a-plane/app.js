var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
var query = document.querySelector;

function formAlert() {
    var firstName = form["first-name"].value;
    var lastName = form["last-name"].value;
    var age = form["age"].value;
    var gender = form["gender"].value;
    var location = form["travel-location"].value;
    var diet = [];
    if (form['vegan'].checked) {
        diet.vegan = document.getElementById("vegan").value;
        diet.push('vegan')
    }
    if (form['gluten'].checked) {
        diet.gluten = document.getElementById('gluten').value;
        diet.push('gluten')
    }
    if (form['paleo'].checked) {
        diet.paleo = document.getElementById('paleo').value;
        diet.push('paleo')
    }

    alert("First Name: " + firstName + "Last Name: " + lastName + "Age: " + age + "Gender: " + gender + "Travel Location: " + location + "Diet: " + diet + "Awesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert )