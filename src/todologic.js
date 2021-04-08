import * as index from './index'
import * as dom from './dom'

export const project = (name, prioritytask, task) => {
    return {name, prioritytask, task}
}

export const task = (name, description, duedate, dateadded) => {
    return {name, description, duedate, dateadded}
}

export const prioritytask = (name, description, duedate) => {
    return {name, description, duedate}
}

export function removeTask(target){
    let data = target.getAttribute('data')
    index.currentProject.task.splice(data, 1)
    console.log(index.currentProject.task)
}

export function clear(){
    let prioritytaskarea = document.querySelector('#priority-tasks')
    prioritytaskarea.innerHTML = ''
    let taskarea = document.querySelector('#tasks')
    taskarea.innerHTML = ''
    let projectarea = document.querySelector('#projects')
    projectarea.innerHTML = ''
}

export function addTask(){
    let title = document.getElementById('textinput')
    let description = document.getElementById('description-input')
    let date = document.getElementById('date-input')
    let newtask = task(title.value, description.value, date.value)
    index.currentProject.task.push(newtask)
    clear()
    index.initialize()
    index.addEventListeners()
    console.log(index.currentProject.task)
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
    let newproject = project(title.value, [])
    index.projects.push(newproject)
    clear()
    index.initialize()
    index.addEventListeners()
    console.log(index.projects)

}

export function switchProject(target){
    let num = target.getAttribute('data')
    let arrind = parseInt(num)
    index.currentProject = index.projects[arrind]
    console.log(index.currentProject)
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


