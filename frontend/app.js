import './styles/app.css'
import UI from './UI'

const ui = new UI()

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI()
  ui.renderTasks()
})

document.querySelector('.formNTask').addEventListener('submit', e => {
  e.preventDefault()
  const title = document.getElementById('title').value
  const description = document.getElementById('description').value
  const calendar = document.getElementById('calendar').value
  const marca = document.getElementById('marca').value
  const image = document.getElementById('image').files

  const i = (image[0]) ? true : false

  const formData = new FormData()
  formData.append('title', title)
  formData.append('description', description)
  if(calendar) {
    formData.append('calendar', calendar)
    if(marca === 'x') formData.append('marca', 's')
  }
  if(marca !== 'x') formData.append('marca', marca)
  if(i) formData.append('image', image[0])

  ui.addNewTask(formData)

})

document.getElementById('tasks-cards').addEventListener('click', e => {
  if(e.target.classList.contains('delete')) {
    ui.deleteTask(e.target.getAttribute('_id'))
  }
})

document.getElementById('newTask').addEventListener('click', e => {
  e.preventDefault()
  ui.newTask()
})

document.getElementById('btnCancelar').addEventListener('click', e => {
  e.preventDefault()  
  ui.btnCancelar()
})

document.getElementById('btnCalendar').addEventListener('click', e => {
  e.preventDefault()
  ui.btnCalendar()
})

document.getElementById('btnFileImage').addEventListener('click', e => {
  e.preventDefault()
  ui.btnImage()
})

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault()
  const formulario = document.getElementById('contactForm')
  const message = new FormData(formulario)
  const response = ui.sendMail(message)
  console.log(response.message)

})