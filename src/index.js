import task from './todologic'
import displayTasks from './dom'

let task1 = [
    task('study programming', 'study a lot please', 'tomorrow', 'high priority'),
    task('study japanese', 'study a lot please', 'tomorrow', 'high priority'),
];

task1.forEach(element => {
    displayTasks(element)
})


console.log(task1)