class UI {

  newTask() {
    document.querySelector('.formNTask').style.display = 'block'
    document.getElementById('newTask').style.display='none'
  }

  btnCancelar() {
    document.querySelector('.formNTask').style.display = 'none'
    document.getElementById('newTask').style.display='block'
  }
  
}

export default UI