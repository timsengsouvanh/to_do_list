import * as index from './index'
import * as dom from './dom'

export const project = (name, prioritytask, task) => {
    return {name, prioritytask, task}
}

export const task = (name, description, duedate, dateadded, completed) => {
    return {name, description, duedate, dateadded, completed}
}

export const prioritytask = (name, description, duedate, completed) => {
    return {name, description, duedate, completed}
}

export function removeTask(target){
    let data = target.getAttribute('data')
    index.currentProject.task.splice(data, 1)
    console.log(index.currentProject.task)
}
export function priorityRemoveTask(target){
    let data = target.getAttribute('data')
    index.currentProject.prioritytask.splice(data, 1)
    console.log(index.currentProject.prioritytask)
}
export function removeProject(element){
    let data = element.getAttribute('data')
    index.projects.splice(data, 1)
    console.log(index.projects)
}

export function removeCurrentProject(){
    
    let index1 = index.projects.indexOf(index.currentProject)
    index.projects.splice(index1,1)
    console.log(index1)
    return false
}

export function defaultProject(){
    return index.currentProject = projects[0]
}

export function completedTask(obj){
    obj.completed = true
    console.log(index.currentProject.task)
}
export function completedPriorityTask(obj){
    obj.completed = true
    console.log(index.currentProject.prioritytask)
}
export function uncompleteTask(obj){
    obj.completed = false
    console.log(index.currentProject.task)
}
export function uncompletePriorityTask(obj){
    obj.completed = false
    console.log(index.currentProject.prioritytask)
}

export function clear(){
    let crudbtn = document.querySelector('#delete-pro-btn')
    crudbtn.remove()
    let prioritytaskarea = document.querySelector('#priority-tasks')
    prioritytaskarea.innerHTML = ''
    let taskarea = document.querySelector('#tasks')
    taskarea.innerHTML = ''
    let projectarea = document.querySelector('#projects')
    projectarea.innerHTML = ''
}

export function addTask(){
    let title = function (){
       let title = document.getElementById('textinput')
       if (title.value === ''){
           return 'Unnamed Task'
       }
       else return title.value}
    let description = document.getElementById('description-input')
    let date = document.getElementById('date-input')
    let dateadded = Date.now()
    let completed = false;
    let newtask = task(title(), description.value, date.value, dateadded, completed)
    index.currentProject.task.push(newtask)

    console.log(index.currentProject.task)
}

export function checkTitleValue(){
    if (title.value = ""){
        return 'No Name'
    }
    else title.value
}

export function replaceTask(obj){
    let title = document.getElementById('textinput')
    let description = document.getElementById('description-input')
    let date = document.getElementById('date-input')
    obj.name = title.value
    obj.description = description.value
    obj.duedate = date.value
    clear()
    index.initialize()
    index.addEventListeners()
    console.log(index.currentProject.task)
}

export function addProject(){
    let title = document.getElementById('textinput')
    let newproject = project(title.value, [], [])
    index.projects.push(newproject)
    // clear()
    // index.initialize()
    index.addEventListeners()
    console.log(index.projects)

}

export function switchProject(element){
    let num = element.getAttribute('data')
    let arrind = parseInt(num)
    return index.currentProject = index.projects[arrind]
}

export function addHighPriority(element){
    let index1 = element.getAttribute('data')
    let obj = index.currentProject.task[index1]
    index.currentProject.prioritytask.push(obj)
    index.currentProject.task.splice(index1,1)
    clear()
    index.initialize()
    index.addEventListeners()
    console.log(index.currentProject.prioritytask)
    console.log(index.currentProject.task)
}

export function removeHighPriority(element){
    let originalIndex = element.getAttribute('data')
    let obj = index.currentProject.prioritytask[originalIndex]
    index.currentProject.task.push(obj)
    index.currentProject.prioritytask.splice(originalIndex,1)
    clear()
    index.initialize()
    index.addEventListeners()
    console.log(index.currentProject.prioritytask)
    console.log(index.currentProject.task)
}
