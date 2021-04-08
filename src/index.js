import * as todologic from './todologic'
import * as dom from './dom'


export let personal = [
    todologic.task('study programming', 'study everyday and continue doing this project', '2021-04-21', 1),
    todologic.task('study japanese', 'do anki and all the reviews, try to listen to all sentences', '2021-08-19', 3),
    todologic.task('watch anime', 'watch evangelion, and later watch cowboy bebop', '2021-10-11', 2),

];

export let prioritypersonal = [
    todologic.task('move out', 'need to organize moving out', '2021-04-29')
]

export let work = [
    todologic.task('Teach','Teach all lessons and assign homework','2021-06-09', '2'),
    todologic.task('PPP', 'Do not forget to use YNOK and do a lot of practice with students', '2021-08-22', '1')
];

export let projects = [
    todologic.project('Personal', prioritypersonal, personal),
    todologic.project('Work', [], work),
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
    let editbtn = document.querySelectorAll('.edit-btn')
    editbtn.forEach(element => {
        element.addEventListener('click', () => {
            let data = element.getAttribute('data')
            let obj = currentProject.task[data]
            

            let taskarea = document.querySelector('#tasks')
            let desc = element.closest('.task-container')
            let potential = dom.createEditTask(obj)
            desc.replaceWith(potential)
            addEventListenerConfirmReplace(obj)


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

   let prioritycheckbox = document.querySelectorAll('.priority-checkbox')
   prioritycheckbox.forEach(element => {
       element.addEventListener('change', () => { 
        if (element.checked){
           todologic.addHighPriority(element)   
           }
        else todologic.removeHighPriority(element)
        
       })
   })

   //collapsible description
   let tasklist = document.querySelectorAll('.task')
   tasklist.forEach(task => {
    task.addEventListener('click', () => {
        let parent1 = task.parentNode;
        let parent2 = parent1.parentNode;
        let desc = parent2.nextSibling;
        if (desc.style.maxHeight){
            desc.style.maxHeight = null;
        }
        else desc.style.maxHeight = desc.scrollHeight + 'px';
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

function addEventListenerConfirmReplace(obj){
    let confirmbtn = document.querySelector('#new-check')
    confirmbtn.addEventListener('click', () => {
        todologic.replaceTask(obj)
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
    currentProject.prioritytask.forEach(task => {
    dom.displayPriorityTasks(task)
})
    // let originalSort = currentProject.task.sort((a,b) => a.duedate>b.duedate ? 1:-1)
    let originalSort = currentProject.task.sort((a,b) => {
        if(a.duedate == ""){
            return undefined
        }
        else if(a.duedate>b.duedate){
            return 1
        }
        else return -1
    })
    originalSort.forEach(task => {
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



