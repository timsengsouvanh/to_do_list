import task from "./todologic"

function createTaskMain(name){
    let taskMain = document.createElement('div')
    taskMain.setAttribute('id', name)
    taskMain.innerText = name
    taskMain.classList.add('task-item')
    return taskMain
}

function displayTasks(obj){
    let taskarea = document.querySelector('#tasks')
    let task = createTaskMain(obj.name)
    taskarea.appendChild(task)
}



export default displayTasks;