const form = document.addItem

form.addEventListener("submit", function(event){
    event.preventDefault()

    const food = form.food.value
    form.food.value = ""

    const ul = document.createElement('li')
    ul.textContent = food
    document.getElementsByTagName("ul")[0].append(ul)

    
    const edit = document.createElement('button')
    edit.textContent = "edit"
    ul.append(edit)
    edit.addEventListener("click", () => {
        edit.parentElement.edit();
       })

    const remove = document.createElement('button')
    remove.textContent = "x"
    ul.append(remove)
    remove.addEventListener("click", () => {
     remove.parentElement.remove();
    })

})