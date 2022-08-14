const form = document.addItem

form.addEventListener("submit", function(event){
    event.preventDefault()

    const food = form.food.value
    form.food.value = ""

    const ul = document.createElement('li')
    let p = document.createElement('p')
    p.textContent = food
    ul.append(p)
    document.getElementsByTagName("ul")[0].append(ul)

    
    const edit = document.createElement('button')
    edit.textContent = "edit"
    ul.append(edit)
    edit.addEventListener("click", () => {
        console.log("console button was clicked")
       let input = document.createElement('input')
       input.value = p.textContent
       const saveBtn = document.createElement('button')
       saveBtn.textContent = "save"
       ul.append(input , saveBtn)
       saveBtn.addEventListener("click", () =>{
        p.textContent = input.value
        saveBtn.remove()
        input.remove()
       })
    })


    const remove = document.createElement('button')
    remove.textContent = "x"
    ul.append(remove)
    remove.addEventListener("click", () => {
     remove.parentElement.remove();
    })

})