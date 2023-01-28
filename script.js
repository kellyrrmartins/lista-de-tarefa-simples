let btnAdd = document.querySelector('button')
let ul = document.querySelector('ul')
let input = document.querySelector('input')

function handleKeyboard(e) {
  if (input.value === '') {
    return
  } else if (e.code === 'Enter') {
    toDo()
  }
}
function handleMouse() {
  if (input.value === '') return

  toDo()
}
function toDo() {
  let newLi = document.createElement('li')
  newLi.innerText = input.value
  ul.appendChild(newLi)

  input.value = ''
}

btnAdd.addEventListener('click', handleMouse)
input.addEventListener('keydown', handleKeyboard)
