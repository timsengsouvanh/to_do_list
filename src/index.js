import * as todologic from './todologic'
import * as dom from './dom'


export let personal = [
    todologic.task('study programming', 'study everyday and continue doing this project', '2021-04-21', '1', false),
    todologic.task('study japanese', 'do anki and all the reviews, try to listen to all sentences', '2021-08-19', '3', false),
    todologic.task('watch anime', 'watch evangelion, and later watch cowboy bebop', '2021-10-11', '2', false),

];

export let prioritypersonal = [
    todologic.prioritytask('move out', 'need to organize moving out', '2021-04-29', true)
]

export let work = [
    todologic.task('Teach','Teach all lessons and assign homework','2021-06-09', '2', false),
    todologic.task('PPP', 'Do not forget to use YNOK and do a lot of practice with students', '2021-08-22', '1', false)
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
    let prioritydelbtn = document.querySelectorAll('.priority-delete')
    prioritydelbtn.forEach(element => {
        element.addEventListener('click', () => {
            todologic.priorityRemoveTask(element)
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
    let priorityeditbtn = document.querySelectorAll('.priority-edit')
    priorityeditbtn.forEach(element => {
        element.addEventListener('click', () => {
            let data = element.getAttribute('data')
            let obj = currentProject.prioritytask[data]
            

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
        let data = element.getAttribute('data')
        let obj = currentProject.task[data] 
        if (element.checked){
           checktask.classList.add('completed-item')
           todologic.completedTask(obj)    
           }
        else {checktask.classList.remove('completed-item')
            todologic.uncompleteTask(obj)}
       })
   })
   let prioritycheckbox = document.querySelectorAll('.priority-checkbox')
   prioritycheckbox.forEach(element => {
       element.addEventListener('change', () => {
        let checktask = element.closest('.title-area')
        let data = element.getAttribute('data')
        let obj = currentProject.prioritytask[data]  
        if (element.checked){
           checktask.classList.add('completed-item')
           todologic.completedPriorityTask(obj)    
           }
        else {checktask.classList.remove('completed-item') 
            todologic.uncompletePriorityTask(obj)}
       })
   })

   let prioritybtn = document.querySelectorAll('.priority-btn')
   prioritybtn.forEach(element => {
       element.addEventListener('click', () => { 
           todologic.addHighPriority(element)   
              
       })
   })
   let prioritybtnhigh = document.querySelectorAll('.priority-btn-high')
   prioritybtnhigh.forEach(element => {
       element.addEventListener('click', () => { 
           todologic.removeHighPriority(element)   
              
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

function addEventListenerClearButton(){
    let clearbtn = document.querySelector('#clearbtn')
    clearbtn.addEventListener('click', () => {
        currentProject.task.forEach(obj => {
            let index = currentProject.task.indexOf(obj)
            if (obj.completed === true){
            currentProject.task.splice(index, 1)
            todologic.clear()
            initialize()
            addEventListeners()
            }
        })
        currentProject.prioritytask.forEach(obj => {
            let index = currentProject.prioritytask.indexOf(obj)
            if (obj.completed === true){
            currentProject.prioritytask.splice(index, 1)
            todologic.clear()
            initialize()
            addEventListeners()
            }
        })
        
    })
}

function addEventListenerAddTask(){
    let confirmbtn = document.querySelector('.confirm')
    confirmbtn.addEventListener('click', () => {
        todologic.addTask()
        todologic.clear()
        initialize()
        addEventListeners()
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
        currentProject = projects[projects.length-1]
        todologic.clear()
        initialize()
        addEventListeners()
    })
}

function addEventListenerSwitchProject(){
    let projectbtn = document.querySelectorAll('.project-container')
    projectbtn.forEach(element => {
        element.addEventListener('click', () => { 
           todologic.switchProject(element)
           todologic.clear()
           initialize()
           addEventListeners()
        
        })
            
        })
    }


export function initialize(){
let prioritySort = currentProject.prioritytask.sort((a,b) => {
    if(a.duedate === "") return 1;
    if(b.duedate === "") return -1;
    if(a.duedate === b.duedate) return 0;
    return a.duedate < b.duedate ? -1 : 1;
    })
    prioritySort.forEach(task => {
    dom.displayPriorityTasks(task)
})
let originalSort = currentProject.task.sort((a,b) => {
    if(a.duedate === "") return 1;
    if(b.duedate === "") return -1;
    if(a.duedate === b.duedate) return 0;
    return a.duedate < b.duedate ? -1 : 1;
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
addEventListenerClearButton()
addEventListenerSwitchProject()
}

initialize()
addEventListeners()



