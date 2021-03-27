import * as index from './index'
import * as dom from './dom'

export const task = (name, description, duedate, priority) => {
    return {name, description, duedate, priority}
}

export function removeTask(target){
    let taskarea = document.querySelector('#tasks')
    let data = target.getAttribute('data')
    index.task1.splice(data, 1)
    taskarea.innerHTML = ''
    index.initialize()
    console.log(index.task1)
}

function clear(){

}

// export default task


