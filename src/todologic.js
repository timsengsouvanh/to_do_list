import * as index from './index'
import * as dom from './dom'

export const task = (name, description, duedate, priority) => {
    return {name, description, duedate, priority}
}

export function removeTask(target){
    let data = target.getAttribute('data')
    index.currentTask.splice(data, 1)
    console.log(index.currentTask)
}

export function clear(){
    let taskarea = document.querySelector('#tasks')
    taskarea.innerHTML = ''
}

export function addTask(){
    let title = document.getElementById('textinput')
    let newtask = task(title.value)
    index.currentTask.push(newtask)
    clear()
    index.initialize()
    console.log(index.currentTask)

}



