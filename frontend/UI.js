import { format } from 'timeago.js'
import TaskService from "./services/TaskService";
import MailService from './services/MailService';
import { DocumentProvider } from 'mongoose';

const taskService = new TaskService()
const mailService = new MailService()

class UI {

  newTask() {
    document.querySelector('.formNTask').style.display = 'block'
    document.getElementById('newTask').style.display='none'
  }

  btnCancelar() {
    document.querySelector('.formNTask').style.display = 'none'
    document.getElementById('newTask').style.display='block'
    document.querySelector('.calendar').style.display = 'none'
    document.querySelector('.fileImage').style.display = 'none'
    this.clearTaskForm()
  }

  btnCalendar() {
    const c = document.querySelector('.calendar').style.display
    c === 'block' ? document.querySelector('.calendar').style.display = 'none' 
      : document.querySelector('.calendar').style.display = 'block'
  }

  btnImage() {
    const c = document.querySelector('.fileImage').style.display
    c === 'block' ? document.querySelector('.fileImage').style.display = 'none' :
      document.querySelector('.fileImage').style.display = 'block'
  }

  clearTaskForm() {
    document.getElementById('formNTask').reset()
  }

  async addNewTask(task) {
    await taskService.postTask(task)
    this.btnCancelar()
    this.renderTasks()
  }

  async renderTasks() {
    const tasks = await taskService.getTasks()
    const taskCardContainer = document.getElementById('tasks-cards')
    taskCardContainer.innerHTML = ''
    let div = ''
    tasks.forEach(task => {
      let marca = ''
      if(task.marca) {
        task.marca === 's' ? marca = 'Seguimiento' : task.marca === 'r' ? marca = 'Recordatorio' : marca = 'Informativo'
      }
      div = document.createElement('div')
      div.className = ''
      if(task.imagePath && !task.calendar && !task.marca) { 
        div.innerHTML = `
          <div class="col" >
            <div class='animated bounceIn card mr-1'>
              <img src="${task.imagePath}" alt="imageTask" class="card-img-top img-fluid" />
              <div class="card-body">
                <h5 class="card-title">${task.title}</h5>
                <p class="card-text">${task.description}</p><br/>
                <a class="btn btn-danger delete" _id="${task._id}">x</a>
              </div>
              <div class="card-footer">${format(task.created_at)}</div>
            </div>
          </div>
        ` 
        taskCardContainer.appendChild(div)
      } else if(!task.imagePath && task.calendar) { 
        div.innerHTML = `
          <div class="col">
            <div class='animated bounceIn card mr-1'>
              <div class="card-body">
                <h5 class="card-title">${task.title}</h5>
                <p class="card-text">${task.description}</p>
                <small class="text-muted">${task.calendar} - ${marca}</small><br/>
                <a class="btn btn-danger delete" _id="${task._id}">x</a>
              </div>
              <div class="card-footer">${format(task.created_at)}</div>
            </div>
          </div>
        ` 
        taskCardContainer.appendChild(div)
      } else if(!task.imagePath && !task.calendar && task.marca) {
        div.innerHTML = `
          <div class="col">
            <div class='animated bounceIn card mr-1'>
              <div class="card-body">
                <h5 class="card-title">${task.title}</h5>
                <p class="card-text">${task.description}</p>
                <small class="text-muted">${marca}</small><br/>
                <a class="btn btn-danger delete" _id="${task._id}">x</a>
              </div>
              <div class="card-footer">${format(task.created_at)}</div>
            </div>
          </div>
        ` 
        taskCardContainer.appendChild(div)
      } else if(task.imagePath && task.calendar) {
        div.innerHTML = `
          <div class="col">
            <div class='animated bounceIn card mr-1'>
              <img src="${task.imagePath}" alt="imageTask" class="card-img-top img-fluid" />
              <div class="card-body">
                <h5 class="card-title">${task.title}</h5>
                <p class="card-text">${task.description}</p>
                <small class="text-muted">${task.calendar} - ${marca}</small><br/>
                <a class="btn btn-danger delete" _id="${task._id}">x</a>
              </div>
              <div class="card-footer">${format(task.created_at)}</div>
            </div>
          </div>
        ` 
        taskCardContainer.appendChild(div)
      } else {
        div.innerHTML = `
          <div class="col">
            <div class='animated bounceIn card mr-1'>
              <div class="card-body">
                <h5 class="card-title">${task.title}</h5>
                <p class="card-text">${task.description}</p><br/>
                <a class="btn btn-danger delete" _id="${task._id}">x</a>
              </div>
              <div class="card-footer">${format(task.created_at)}</div>
            </div>
          </div>
        `
        taskCardContainer.appendChild(div)
      } 
    })
  }

  async deleteTask(taskId) {
    await taskService.deleteTask(taskId)
    this.btnCancelar()
    this.renderTasks()
  }

  async sendMail(message) {
    const data = await mailService.sendMail(message)
    data.success ? alert(data.message) : alert(data.error)
    $('#contacto').modal('hide')
    document.getElementById("contactForm").reset()
  }

}

export default UI