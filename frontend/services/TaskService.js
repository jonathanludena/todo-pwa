class TaskService {

  constructor() {
    this.URI = 'http://localhost:3000/api/tasks'
  }

  async getTasks() {
    const response = await fetch(this.URI)
    const tasks = await response.json()
    return tasks
  }

  async postTask(task) {
    const response = await fetch(this.URI, {
      method: 'POST',
      body: task
    })
    const data = await response.json()
    console.log(data)
  }

  async deleteTask(taskId) {
    const response = await fetch(`${this.URI}/${taskId}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
    const data = await response.json()
    console.log(data)
  }

}

export default TaskService