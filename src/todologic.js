import * as index from './index'
import * as dom from './dom'

export const task = (name, description, duedate, priority) => {
    return {name, description, duedate, priority}
}

export function removeTask(target){
    let data = target.getAttribute('data')
    index.task1.splice(data, 1)
    console.log(index.task1)
}

export function clear(){
    let taskarea = document.querySelector('#tasks')
    taskarea.innerHTML = ''
}

export function addTask(){
    alert('nice')
}


