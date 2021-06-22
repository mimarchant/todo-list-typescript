//crear clase tarea
class TodoItem{
    constructor(public task:string, public isCompleted:boolean){
        this.task = task;
    }
}

class TaskManager{
    tasks: TodoItem[] = [];

    addTask(task:string):void{
        const newItem = new TodoItem(task, false);
        this.tasks.push(newItem)
    }
}

class HTMLHelper{
    static createTaskItem(task:TodoItem):HTMLLIElement{
        const listItem = document.createElement('li');
        const checkBox = document.createElement('input');
        const label = document.createElement('label');
        checkBox.type = 'checkbox';
        checkBox.addEventListener('change', ()=>{
            if (checkBox.checked){
                task.isCompleted = true;
                displayTasks();
            }
        })
        

        label.innerText = task.task;

        listItem.appendChild(checkBox);
        listItem.appendChild(label);

        return listItem
    }
}

const taskInput = <HTMLInputElement>document.getElementById('new-task');

const btn = document.getElementById('add-task')!;

const completedTasks = document.getElementById('completed-tasks')!;

const incompleteTasks = document.getElementById('incomplete-tasks')!;

const taskManager = new TaskManager();

btn.addEventListener('click', ()=>{
    taskManager.addTask(taskInput.value);
    displayTasks();
    clearInput();
});

function displayTasks(){

    completedTasks.innerHTML = '';
    incompleteTasks.innerHTML = '';

    taskManager.tasks.forEach(task =>{
        
        var listItem = HTMLHelper.createTaskItem(task);
        
        if (task.isCompleted){
            completedTasks.appendChild(listItem);
        } else {
            incompleteTasks.appendChild(listItem);
        }

    })


}

function clearInput():void{
    taskInput.value = ""
}