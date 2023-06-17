let addToDoButton = document.getElementById('addTodo')
let toDoContainer = document.getElementById('toDoContainer')
let inputField = document.getElementById('inputField')

function addToDo() {
    let paragraph = document.createElement('li')
    // paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value.trim(); // Adds the List item value to List
    // orderedList.appendChild(paragraph);
    toDoContainer.appendChild(paragraph);
    inputField.value=''; //Resets the Placeholder value
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration ='line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
}
addToDoButton.addEventListener('click', addToDo);
inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTodo();
    }
});