const task = (name, description, duedate, priority) => {
    return {name, description, duedate, priority}
}

function removeTask(obj){
    let index = obj.getAttribute('data')
    let indexa = task1.indexOf(index)
    task1.splice(indexa,1)
    console.log(task1)
}

export default task;


