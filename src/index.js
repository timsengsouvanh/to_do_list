import * as todologic from './todologic'
import * as dom from './dom'


export let personal = [
    todologic.task('study programming', 'study everyday and continue doing this project', '10/04/2021', 'high priority', 'Personal',),
    todologic.task('study japanese', 'do anki and all the reviews, try to listen to all sentences', '20/04/2021', 'high priority'),
    todologic.task('watch anime', 'watch evangelion, and later watch cowboy bebop', '31/06/2021', 'high priority'),

];

export let work = [
    todologic.task('Teach','Teach all lessons and assign homework','30/12/2021','','Work',),
    todologic.task('PPP', 'Do not forget to use YNOK and do a lot of practice with students', '24/12/21')
];

export let projects = [
    todologic.project('Personal', personal),
    todologic.project('Work', work),
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
        let checktask = element.closest('.title-area') 
        if (element.checked){
           checktask.classList.add('completed-item')    
           }
        else checktask.classList.remove('completed-item') 
       })
   })

//    let tasklist = document.querySelectorAll('.task')
//    tasklist.forEach(task => {
//     task.addEventListener('click', () => {
//         alert(todologic.task)
//     })
//    })
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
    let addbtnproj = document.querySelector('#addbtnproj')
    addbtnproj.addEventListener('click', () => {
        //stops users from adding new tasks before commiting on current potential task
        if (document.getElementById('textinput') === null){
        dom.createPotentialProject()
        addEventListenerAddProj()
        
        }
    })
}

function addEventListenerAddTask(){
    let confirmbtn = document.querySelector('.confirm')
    confirmbtn.addEventListener('click', () => {
        todologic.addTask()
    })
}
function addEventListenerAddProj(){
    let confirmbtn = document.querySelector('.confirm')
    confirmbtn.addEventListener('click', () => {
        todologic.addProject()
    })
}

function addEventListenerSwitchProject(){
    let projectbtn = document.querySelectorAll('.project-container')
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



