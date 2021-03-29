import * as index1 from "./index"
import * as todologic from "./todologic"

function createTaskMain(){
    let taskMain = document.createElement('div')
    taskMain.classList.add('task-item')
    taskMain.classList.add('flex-area')
    return taskMain
}

function createCheckTaskArea(){
    let checkTaskArea = document.createElement('div')
    checkTaskArea.classList.add('flex-area')
    checkTaskArea.classList.add('check-task-area')
    return checkTaskArea
}

function createTask(name){
    let task = document.createElement('div')
    task.setAttribute('id', name)
    task.innerText = name
    return task
}

export function createDelete(obj){
    let deletebtn = document.createElement('button')
    deletebtn.innerHTML = '&times;'
    deletebtn.classList.add('delete-btn')
    deletebtn.setAttribute('data', (index1.task1.indexOf(obj)))

    return deletebtn
}

function createCheckbox(){
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    return checkbox
}

export function displayTasks(obj){
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

function createTitleInput(){
    let titleInput = document.createElement('input')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('id', 'textinput')
    return titleInput
}

function createConfirmNewTask(){
    let confirmnewtask = document.createElement('button')
    confirmnewtask.innerHTML = '&#10004;'
    confirmnewtask.classList.add('confirm')
    return confirmnewtask
}

function creatediv(){
    let btnarea = document.createElement('div')
    return btnarea
}

export function createPotentialTask(){
    let taskarea = document.querySelector('#tasks')
    let task = createTaskMain()
    taskarea.appendChild(task)

    let taskCheckArea = createCheckTaskArea()
    task.appendChild(taskCheckArea)

    let checkbox = createCheckbox()
    taskCheckArea.appendChild(checkbox)

    let titleInput = createTitleInput()
    taskCheckArea.appendChild(titleInput)

    let div = creatediv()
    task.appendChild(div)

    let checkmark = createConfirmNewTask()
    checkmark.classList.add('margin')
    div.appendChild(checkmark)

    let deletebtn = createDelete()
    deletebtn.classList.add('margin')
    deletebtn.addEventListener('click', () => {
        task.remove()
    })
    div.appendChild(deletebtn)
}

