import task from './todologic'
import displayTasks from './dom'

let task1 = [
    task('study programming', 'study a lot please', 'tomorrow', 'high priority'),
    task('study japanese', 'study a lot please', 'tomorrow', 'high priority'),
    task('watch anime', 'study a lot please', 'tomorrow', 'high priority'),

];

function addEventListeners(){
    let delbtn = document.querySelectorAll('.delete-btn')
    delbtn.forEach(element => {
        element.addEventListener('click', () => console.log('hello'))
    })
}


function initialize(){
    task1.forEach(element => {
    displayTasks(element)
})
addEventListeners()
}

initialize()



console.log(task1)
