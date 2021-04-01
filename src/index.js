import * as todologic from './todologic'
import * as dom from './dom'


export let personal = [
    todologic.task('study programming', 'study a lot please', 'tomorrow', 'high priority', 'Personal',),
    todologic.task('study japanese', 'study a lot please', 'tomorrow', 'high priority'),
    todologic.task('watch anime', 'study a lot please', 'tomorrow', 'high priority'),

];

export let work = [
    todologic.task('teach','','','','Work',),
    todologic.task('PPP')
];

export let projects = [
    todologic.project('Personal', personal),
    todologic.project('Work', work),
    // personal,
    // work,
];


export let currentProject = projects[0]

function addEventListenersinitial(){
    let delbtn = document.querySelectorAll('.delete-btn')
    delbtn.forEach(element => {
        element.addEventListener('click', () => {
            todologic.removeTask(element)
            todologic.clear()
            initialize()
            addEventListeners()
        }
            )
    })
   let checkbox = document.querySelectorAll('.checkbox')
   checkbox.forEach(element => {
       element.addEventListener('change', () => {
        let checktask = element.closest('.check-task-area') 
        if (element.checked){
           checktask.classList.add('completed-item')    
           }
        else checktask.classList.remove('completed-item') 
       })
   })
}

function addEventListenerAddButton(){
    let addbtn = document.querySelector('#addbtn')
    addbtn.addEventListener('click', () => {
        //stops users from adding new tasks before commiting on current potential task
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

function addEventListenerSwitchProject(){
    let projectbtn = document.querySelectorAll('.project-item')
    projectbtn.forEach(element => {
        element.addEventListener('click', () => {
           todologic.clear() 
           todologic.switchProject(element)
            initialize()
            addEventListeners()
        })
            
        })
    }


export function initialize(){
    currentProject.task.forEach(task => {
    dom.displayTasks(task)
})
    projects.forEach(project => {
    dom.displayProjects(project)
    })

}
export function addEventListeners(){
addEventListenersinitial()
addEventListenerAddButton()
addEventListenerSwitchProject()
}

// dom.createProject('personal')
// dom.createProject('work')
initialize()
addEventListeners()


