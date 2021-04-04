import * as index1 from "./index"
import * as todologic from "./todologic"

function createTaskMain(){
    let taskMain = document.createElement('div')
    taskMain.classList.add('task-container')
    taskMain.classList.add('flex-area')
    return taskMain
}

function createCheckTaskArea(){
    let checkTaskArea = document.createElement('div')
    checkTaskArea.classList.add('flex-area')
    checkTaskArea.classList.add('check-task-area')
    return checkTaskArea
}

function createTask(obj){
    let task = document.createElement('div')
    task.classList.add('task')
    task.innerText = obj.name
    return task
}

function createDescription(obj){
    let description = document.createElement('div')
    description.classList.add('description-item')
    description.classList.add('margin-desc')
    description.innerText = obj.description
    return description
}

export function createDelete(obj){
    let deletebtn = document.createElement('button')
    deletebtn.innerHTML = '&times;'
    deletebtn.classList.add('delete-btn')
    deletebtn.setAttribute('data', (index1.currentProject.task.indexOf(obj)))

    return deletebtn
}

function createCheckbox(){
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.classList.add('checkbox')
    return checkbox
}

function createTitleArea(){
    let title = document.createElement('div')
    title.classList.add('title-area')
    return title
}

function createDate(obj){
    let date = document.createElement('div')
    date.classList.add('date')
    date.innerText = obj.duedate
    return date
}

function createDescriptionArea(){
    let desc = document.createElement('div')
    desc.classList.add('description-container')
    return desc
}

export function displayTasks(obj){
    let taskarea = document.querySelector('#tasks')
    let task = createTaskMain()
    taskarea.appendChild(task)

    let titlearea = createTitleArea()
    task.appendChild(titlearea)

    let taskCheckArea = createCheckTaskArea()
    titlearea.appendChild(taskCheckArea)

    let date = createDate(obj)
    titlearea.appendChild(date)

    let checkbox = createCheckbox()
    taskCheckArea.appendChild(checkbox)

    let taskName = createTask(obj)
    taskCheckArea.appendChild(taskName)

    let desc = createDescriptionArea()
    task.appendChild(desc)

    let description = createDescription(obj)
    desc.appendChild(description)    
    
    let deletebtn = createDelete(obj)
    desc.appendChild(deletebtn)

}

function createTaskTitleInput(){
    let titleInput = document.createElement('input')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('id', 'textinput')
    titleInput.setAttribute('placeholder', 'Task')
    return titleInput
}

function createDescriptionInput(){
    let titleInput = document.createElement('input')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('id', 'description-input')
    titleInput.setAttribute('placeholder', 'Description')
    return titleInput
}

function createProjectTitleInput(){
    let titleInput = document.createElement('input')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('id', 'textinput')
    titleInput.setAttribute('placeholder', 'Project Name')
    return titleInput
}

function createConfirmNewTask(){
    let confirmnewtask = document.createElement('button')
    confirmnewtask.innerHTML = '&#10004;'
    confirmnewtask.classList.add('confirm')
    return confirmnewtask
}

function createPotentialBtnDiv(){
    let btnarea = document.createElement('div')
    btnarea.classList.add('potential-btn-area')
    return btnarea
}

function createPotentialFirstLine(){
    let firstLine = document.createElement('div')
    firstLine.classList.add('potential-first-line')
    return firstLine
}

function createPotentialSecondLine(){
    let secondLine = document.createElement('div')
    secondLine.classList.add('potential-second-line')
    return secondLine
}

export function createPotentialTask(){
    let taskarea = document.querySelector('#tasks')
    let task = createTaskMain()
    task.classList.add('potential-task-container')
    taskarea.appendChild(task)

    let firstLine = createPotentialFirstLine()
    task.appendChild(firstLine)

    let taskCheckArea = createCheckTaskArea()
    firstLine.appendChild(taskCheckArea)

    let checkbox = createCheckbox()
    taskCheckArea.appendChild(checkbox)

    let titleInput = createTaskTitleInput()
    taskCheckArea.appendChild(titleInput)

    let btndiv = createPotentialBtnDiv()
    firstLine.appendChild(btndiv)

    let checkmark = createConfirmNewTask()
    checkmark.classList.add('margin')
    btndiv.appendChild(checkmark)

    let deletebtn = createDelete()
    deletebtn.classList.add('margin')
    deletebtn.addEventListener('click', () => {
        task.remove()
    })
    btndiv.appendChild(deletebtn)

    let secondLine = createPotentialSecondLine()
    task.appendChild(secondLine)

    let descriptionInput = createDescriptionInput()
    secondLine.appendChild(descriptionInput)
}

// export function createDescription(obj){
//     let descriptiondiv = document.createElement('div')
//     descriptiondiv.innerText = obj.description
//     return descriptiondiv
// }

export function createDetails(obj){
    let taskcontainer = document.query
    let descriptiondiv = createDescription(obj)
    taskcontainer.appendChild(descriptiondiv)

}

export function createProject(project){
    let projects = document.createElement('div')
    projects.setAttribute('data', index1.projects.indexOf(project))
    projects.classList.add('project-item')
    projects.innerText = project.name
    return projects
}

export function displayProjects(element){
    let projectarea = document.querySelector('#projects')
    let projectmain = createProjectMain(element)
    projectarea.appendChild(projectmain)

    let project = createProject(element)
    projectmain.appendChild(project)
}

function createProjectMain(project){
    let projectMain = document.createElement('div')
    projectMain.classList.add('project-container')
    projectMain.classList.add('flex-area')
    projectMain.setAttribute('data', index1.projects.indexOf(project))
    return projectMain
}

function createProjectCheckArea(){
    let projectCheckArea = document.createElement('div')
    projectCheckArea.classList.add('project-check-area')
    return projectCheckArea
}

function createProjectConfirmDeleteArea(){
    let projectConfirmDeleteArea = document.createElement('div')
    projectConfirmDeleteArea.classList.add('project-confirm-delete-area')
    return projectConfirmDeleteArea
}

export function createPotentialProject(){
    let projectarea = document.querySelector('#projects')
    let project = createProjectMain()
    projectarea.appendChild(project)

    let projectCheckArea = createProjectCheckArea()
    project.appendChild(projectCheckArea)

    let titleInput = createProjectTitleInput()
    projectCheckArea.appendChild(titleInput)

    let projectConfirmDeleteArea = createProjectConfirmDeleteArea()
    projectCheckArea.appendChild(projectConfirmDeleteArea)

    let checkmark = createConfirmNewTask()
    projectConfirmDeleteArea.appendChild(checkmark)

    let deletebtn = createDelete()
    deletebtn.addEventListener('click', () => {
        project.remove()
    })
    projectConfirmDeleteArea.appendChild(deletebtn)
}

