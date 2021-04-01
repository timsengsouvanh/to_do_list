import * as index from './index'
import * as dom from './dom'

export const project = (name, task) => {
    return {name, task}
}

export const task = (name, description, duedate, priority, project) => {
    return {name, description, duedate, priority, project}
}

export function removeTask(target){
    let data = target.getAttribute('data')
    index.currentProject.task.splice(data, 1)
    console.log(index.currentProject.task)
}

export function clear(){
    let taskarea = document.querySelector('#tasks')
    taskarea.innerHTML = ''
    let projectarea = document.querySelector('#projects')
    projectarea.innerHTML = ''
}

export function addTask(){
    let title = document.getElementById('textinput')
    let newtask = task(title.value)
    index.currentProject.task.push(newtask)
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



