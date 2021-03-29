import * as todologic from './todologic'
import * as dom from './dom'

export let task1 = [
    todologic.task('study programming', 'study a lot please', 'tomorrow', 'high priority'),
    todologic.task('study japanese', 'study a lot please', 'tomorrow', 'high priority'),
    todologic.task('watch anime', 'study a lot please', 'tomorrow', 'high priority'),

];

function addEventListenersinitial(){
    let delbtn = document.querySelectorAll('.delete-btn')
    delbtn.forEach(element => {
        element.addEventListener('click', () => {
            todologic.removeTask(element)
            todologic.clear()
            initialize()
        }
            )
    })
   
}

function addEventListenerAddButton(){
    let addbtn = document.querySelector('#addbtn')
    addbtn.addEventListener('click', () => {
        dom.createPotentialTask()
        addEventListenerAddTask()
    })
}

function addEventListenerAddTask(){
    let confirmbtn = document.querySelector('.confirm')
    confirmbtn.addEventListener('click', () => {
        todologic.addTask()
    })
}

export function initialize(){
    task1.forEach(element => {
    dom.displayTasks(element)
})
addEventListenersinitial()
}

initialize()
addEventListenerAddButton()



console.log(task1)