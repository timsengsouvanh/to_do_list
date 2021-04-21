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
    description.innerText = 'notes: '+ obj.description
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
export function createProjectDelete(){
    let deletebtn = document.createElement('button')
    deletebtn.innerHTML = '&times;'
    deletebtn.classList.add('delete-btn')
    deletebtn.classList.add('margin')

    return deletebtn
}
export function createPriorityDelete(obj){
    let deletebtn = document.createElement('button')
    deletebtn.innerHTML = '&times;'
    deletebtn.classList.add('priority-delete')
    deletebtn.classList.add('margin')
    deletebtn.setAttribute('data', (index1.currentProject.prioritytask.indexOf(obj)))

    return deletebtn
}
export function createEditbtn(obj){
    let editbtn = document.createElement('button')
    editbtn.innerText = 'EDIT'
    editbtn.classList.add('edit-btn')
    editbtn.setAttribute('data', (index1.currentProject.task.indexOf(obj)))

    return editbtn
}
export function createPriorityEditbtn(obj){
    let editbtn = document.createElement('button')
    editbtn.innerText = 'EDIT'
    editbtn.classList.add('priority-edit')
    editbtn.setAttribute('data', (index1.currentProject.prioritytask.indexOf(obj)))

    return editbtn
}

export function createDeleteEditArea(){
    let deleteEditArea = document.createElement('div')
    deleteEditArea.classList.add('delete-edit-area')
    return deleteEditArea
}

export function createCheckbox(obj){
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.classList.add('checkbox')
    function completed (obj){
        if (obj.completed === true){
            return checkbox.checked = true;
        }
        else return checkbox.checked = false;
    }
    completed(obj)
    checkbox.setAttribute('data', (index1.currentProject.task.indexOf(obj)))
    return checkbox
}
export function createPotentialCheckbox(){
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.classList.add('checkbox')
    return checkbox
}
export function createPriorityCheckbox(obj){
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.classList.add('priority-checkbox')
    function completed (obj){
        if (obj.completed === true){
            return checkbox.checked = true;
        }
        else return checkbox.checked = false;
    }
    completed(obj)
    checkbox.setAttribute('data', (index1.currentProject.prioritytask.indexOf(obj)))
    return checkbox
}
export function createPriorityBtn(obj){
    let prioritybtn = document.createElement('button')
    prioritybtn.innerHTML = '<i class="far fa-flag"></i>';
    // checkbox.setAttribute('type', 'checkbox')
    prioritybtn.setAttribute('data', (index1.currentProject.task.indexOf(obj)))
    prioritybtn.classList.add('priority-btn')
    return prioritybtn
}

export function createPriorityBtnHigh(obj){
    let prioritybtnhigh = document.createElement('button')
    prioritybtnhigh.innerHTML = '<i class="fas fa-flag"></i>';
    prioritybtnhigh.setAttribute('data', (index1.currentProject.prioritytask.indexOf(obj)))
    prioritybtnhigh.classList.add('priority-btn-high')
    return prioritybtnhigh
}

export function createTitleArea(obj){
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

export function deleteprojectcurrent(){
    let crud = document.querySelector('#crudbtn')
    let clear = document.querySelector('#clearbtn')
    let add = document.querySelector('#addbtn')
    let deleteproject = document.createElement('button')
    deleteproject.innerText = 'DELETE PROJECT'
    deleteproject.setAttribute('id', 'delete-pro-btn')
    crud.appendChild(deleteproject)
   
    deleteproject.after(add)
     deleteproject.after(clear)
}

export function displayTasks(obj){

    let taskarea = document.querySelector('#tasks')
    let task = createTaskMain()
    taskarea.appendChild(task)

    let titlearea = createTitleArea(obj)
    task.appendChild(titlearea)

    let taskCheckArea = createCheckTaskArea()
    titlearea.appendChild(taskCheckArea)

    let date = createDate(obj)
    titlearea.appendChild(date)

    let prioritybtn = createPriorityBtn(obj)
    taskCheckArea.appendChild(prioritybtn)

    let checkbox = createCheckbox(obj)
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

    function completed (obj){
        if (obj.completed === true){
            return titlearea.classList.add('completed-item');
        }
    }
    completed(obj)

}

export function displayPriorityTasks(obj){
    let taskarea = document.querySelector('#priority-tasks')
    let task = createTaskMain()
    taskarea.appendChild(task)

    let titlearea = createTitleArea()
    task.appendChild(titlearea)

    let taskCheckArea = createCheckTaskArea()
    titlearea.appendChild(taskCheckArea)

    let date = createDate(obj)
    titlearea.appendChild(date)

    let prioritybtnhigh = createPriorityBtnHigh(obj)
    taskCheckArea.appendChild(prioritybtnhigh)

    let checkbox = createPriorityCheckbox(obj)
    taskCheckArea.appendChild(checkbox)

    let taskName = createTask(obj)
    taskCheckArea.appendChild(taskName)

    let desc = createDescriptionArea()
    task.appendChild(desc)

    let description = createDescription(obj)
    desc.appendChild(description)    
    
    let deleteEditArea = createDeleteEditArea()
    desc.appendChild(deleteEditArea)

    let editbtn = createPriorityEditbtn(obj)
    deleteEditArea.appendChild(editbtn)

    let deletebtn = createPriorityDelete(obj)
    deleteEditArea.appendChild(deletebtn)

    function completed (obj){
        if (obj.completed === true){
            return titlearea.classList.add('completed-item');
        }
    }
    completed(obj)

}

export function createTaskTitleInput(obj){
    let titleInput = document.createElement('input')
    titleInput.size = '30'
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('id', 'textinput')
    titleInput.setAttribute('placeholder', 'Task')
    
    return titleInput
}
export function createTaskEditTitleInput(obj){
    let titleInput = document.createElement('input')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('id', 'textinput')
    titleInput.setAttribute('value', obj.name)
    
    return titleInput
}

export function createDescriptionInput(){
    let titleInput = document.createElement('input')
    titleInput.size = '30'
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('id', 'description-input')
    titleInput.setAttribute('placeholder', 'Description')
    return titleInput
}
export function createDescriptionEditInput(obj){
    let titleInput = document.createElement('input')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('id', 'description-input')
    titleInput.setAttribute('value', obj.description)
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
export function createPotentialEditDate(obj){
    let date = document.createElement('input')
    date.setAttribute('type', 'date')
    date.setAttribute('id', 'date-input')
    date.setAttribute('value', obj.duedate)
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

    let checkbox = createPotentialCheckbox()
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

    let checkbox = createCheckbox(obj)
    taskCheckArea.appendChild(checkbox)

    let titleInput = createTaskEditTitleInput(obj)
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

    let descriptionInput = createDescriptionEditInput(obj)
    secondLine.appendChild(descriptionInput)

    let dateinput = createPotentialEditDate(obj)
    secondLine.appendChild(dateinput)

    return task
}

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

export function createDeleteProject(project){
    let deletebtn = document.createElement('button')
    deletebtn.innerHTML = '&times;'
    deletebtn.classList.add('delete-project-btn')
    deletebtn.classList.add('margin')
    deletebtn.setAttribute('data', (index1.projects.indexOf(project)))

    return deletebtn
}

export function displayProjects(element){
    let projectarea = document.querySelector('#projects')

    let projectmain = createProjectMain(element)
    projectarea.appendChild(projectmain)

    let project = createProject(element)
    projectmain.appendChild(project)

    // let deletebtn = createDeleteProject(element)
    // projectmain.appendChild(deletebtn)
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

    let deletebtn = createProjectDelete()
    deletebtn.addEventListener('click', () => {
        project.remove()
    })
    projectConfirmDeleteArea.appendChild(deletebtn)
}

