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
   let checkbox = document.querySelectorAll('.checkbox')
   checkbox.forEach(element => {
       element.addEventListener('change', () => {
        let hello = element.closest('.check-task-area') 
        if (element.checked){
           hello.classList.add('completed-item')    
           }
        else hello.classList.remove('completed-item') 
       })
   })
}

function addEventListenerAddButton(){
    let addbtn = document.querySelector('#addbtn')
    addbtn.addEventListener('click', () => {
        if (document.getElementById('textinput') === null){
        dom.createPotentialTask()
        addEventListenerAddTask()
        }
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