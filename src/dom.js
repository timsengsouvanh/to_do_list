import * as index1 from "./index"
import * as todologic from "./todologic"

export function createTaskMain(){
    let taskMain = document.createElement('div')
    taskMain.classList.add('task-container')
    taskMain.classList.add('flex-area')
    return taskMain
}

export function createCheckTaskArea(){
    let checkTaskArea = document.createElement('div')
    checkTaskArea.classList.add('flex-area')
    checkTaskArea.classList.add('check-task-area')
    return checkTaskArea
}

export function createTask(obj){
    let task = document.createElement('div')
    task.classList.add('task')
    task.innerText = obj.name
    return task
}

export function createDescription(obj){
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
    deletebtn.classList.add('margin')
    deletebtn.setAttribute('data', (index1.currentProject.task.indexOf(obj)))

    return deletebtn
}
export function createEditbtn(obj){
    let editbtn = document.createElement('button')
    editbtn.innerHTML = '&#xf044;'
    editbtn.classList.add('edit-btn')
    editbtn.setAttribute('data', (index1.currentProject.task.indexOf(obj)))

    return editbtn
}

export function createDeleteEditArea(){
    let deleteEditArea = document.createElement('div')
    deleteEditArea.classList.add('delete-edit-area')
    return deleteEditArea
}

export function createCheckbox(){
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.classList.add('checkbox')
    return checkbox
}

export function createTitleArea(){
    let title = document.createElement('div')
    title.classList.add('title-area')
    return title
}

export function createDate(obj){
    let date = document.createElement('div')
    date.classList.add('date')
    date.innerText = obj.duedate
    return date
}

export function createDescriptionArea(){
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
    
    let deleteEditArea = createDeleteEditArea()
    desc.appendChild(deleteEditArea)

    let editbtn = createEditbtn(obj)
    deleteEditArea.appendChild(editbtn)

    let deletebtn = createDelete(obj)
    deleteEditArea.appendChild(deletebtn)

}

export function createTaskTitleInput(){
    let titleInput = document.createElement('input')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('id', 'textinput')
    titleInput.setAttribute('placeholder', 'Task')
    return titleInput
}

export function createDescriptionInput(){
    let titleInput = document.createElement('input')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('id', 'description-input')
    titleInput.setAttribute('placeholder', 'Description')
    return titleInput
}

export function createProjectTitleInput(){
    let titleInput = document.createElement('input')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('id', 'textinput')
    titleInput.setAttribute('placeholder', 'Project Name')
    return titleInput
}

export function createConfirmNewTask(){
    let confirmnewtask = document.createElement('button')
    confirmnewtask.innerHTML = '&#10004;'
    confirmnewtask.classList.add('confirm')
    return confirmnewtask
}

export function createPotentialBtnDiv(){
    let btnarea = document.createElement('div')
    btnarea.classList.add('potential-btn-area')
    return btnarea
}

export function createPotentialFirstLine(){
    let firstLine = document.createElement('div')
    firstLine.classList.add('potential-first-line')
    return firstLine
}

export function createPotentialSecondLine(){
    let secondLine = document.createElement('div')
    secondLine.classList.add('potential-second-line')
    return secondLine
}

export function createPotentialDate(){
    let date = document.createElement('input')
    date.setAttribute('type', 'date')
    date.setAttribute('id', 'date-input')
    return date
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

    let dateinput = createPotentialDate()
    secondLine.appendChild(dateinput)
}

export function createEditTask(obj){
    let task = createTaskMain()
    task.classList.add('potential-task-container')

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
    checkmark.setAttribute('id', 'new-check')
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

    let dateinput = createPotentialDate()
    secondLine.appendChild(dateinput)

    return task
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

export function createProjectMain(project){
    let projectMain = document.createElement('div')
    projectMain.classList.add('project-container')
    projectMain.classList.add('flex-area')
    projectMain.setAttribute('data', index1.projects.indexOf(project))
    return projectMain
}

export function createProjectCheckArea(){
    let projectCheckArea = document.createElement('div')
    projectCheckArea.classList.add('project-check-area')
    return projectCheckArea
}

export function createProjectConfirmDeleteArea(){
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

