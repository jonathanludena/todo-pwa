import './styles/app.css'
import UI from './UI'

const ui = new UI()

document.getElementById('newTask').addEventListener('click', (e) => {
  e.preventDefault()
  ui.newTask()
})

document.getElementById('btnCancelar').addEventListener('click', (e) => {
  e.preventDefault()  
  ui.btnCancelar()
})