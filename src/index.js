import * as todologic from './todologic'
import displayTasks from './dom'

export let task1 = [
    todologic.task('study programming', 'study a lot please', 'tomorrow', 'high priority'),
    todologic.task('study japanese', 'study a lot please', 'tomorrow', 'high priority'),
    todologic.task('watch anime', 'study a lot please', 'tomorrow', 'high priority'),

];

function addEventListeners(){
    let delbtn = document.querySelectorAll('.delete-btn')
    delbtn.forEach(element => {
        element.addEventListener('click', () => todologic.removeTask(element))
    })
}


export function initialize(){
    task1.forEach(element => {
    displayTasks(element)
})
addEventListeners()
}

initialize()



console.log(task1)