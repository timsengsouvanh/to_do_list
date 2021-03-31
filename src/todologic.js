import * as index from './index'
import * as dom from './dom'

export const task = (name, description, duedate, priority, project) => {
    return {name, description, duedate, priority, project}
}

export function removeTask(target){
    let data = target.getAttribute('data')
    index.currentProject.splice(data, 1)
    console.log(index.currentProject)
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
    index.currentProject.push(newtask)
    clear()
    index.initialize()
    index.addEventListeners()
    console.log(index.currentProject)

}

export function switchProject(target){
    let num = target.getAttribute('data')
    let arrind = parseInt(num)
    index.currentProject = index.projects[arrind]
    console.log(index.currentProject)
}



