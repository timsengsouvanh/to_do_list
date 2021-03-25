import task from "./todologic"

function createTaskMain(){
    let taskMain = document.createElement('div')
    taskMain.classList.add('task-item')
    taskMain.classList.add('flex-area')
    return taskMain
}

function createCheckTaskArea(){
    let checkTaskArea = document.createElement('div')
    checkTaskArea.classList.add('flex-area')
    checkTaskArea.classList.add('task-area')
    return checkTaskArea
}

function createTask(name){
    let task = document.createElement('div')
    task.setAttribute('id', name)
    task.innerText = name
    return task
}

function createDelete(obj){
    let deletebtn = document.createElement('button')
    deletebtn.innerHTML = '&times;'
    deletebtn.classList.add('delete-btn')
    deletebtn.setAttribute('data', obj.name)

    return deletebtn
}

function createCheckbox(){
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    return checkbox
}

function displayTasks(obj){
    let taskarea = document.querySelector('#tasks')
    let task = createTaskMain()
    taskarea.appendChild(task)

    let taskCheckArea = createCheckTaskArea()
    task.appendChild(taskCheckArea)

    let checkbox = createCheckbox()
    taskCheckArea.appendChild(checkbox)

    let taskName = createTask(obj.name)
    taskCheckArea.appendChild(taskName)

    let deletebtn = createDelete(obj)
    task.appendChild(deletebtn)
}



export default displayTasks;