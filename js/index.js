//TASK 4 - 7
const submitButton = document.getElementById('submit-button');
const newTaskNameInput = document.querySelector('#task-name');
const newAssignedToInput = document.querySelector('#assigned-person');
const dateInput = document.querySelector('#due-date');
const newDescriptionInput = document.querySelector('#task-description');
const myTask = new TaskManager;
//myTask.load();
//myTask.render();

  let taskName = newTaskNameInput.value;
  let person = newAssignedToInput.value;
  let date = dateInput.value;
  let description = newDescriptionInput.value;

const validFormFieldInput = () => {
  
   taskName = newTaskNameInput.value;
   person = newAssignedToInput.value;
   date = dateInput.value;
   description = newDescriptionInput.value;

   var myAlert = document.querySelector('.liveAlertPlaceholder');
   myAlert.innerHTML = '';

   function warning (inputValue, inputName) {
     if (inputValue.length === 0) {
       myAlert.innerHTML = '<div class="alert alert-warning alert-dismissible" role="alert">' + 'Please input ' 
       + inputName + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';      
       } 
   }
  
   warning(taskName, 'task name');
   warning(person, "a person's name");
   warning(date, 'a date');
   warning(description, 'a task description');

}


submitButton.addEventListener('click', function () {
  validFormFieldInput();
  
  if (taskName && person && date && description) {
    myTask.addTask(taskName, date, person, description);
    myTask.render();
    const taskForm = document.getElementById('task-form');
    taskForm.reset();
    
  }
} );


const newTasksList = document.querySelector('#tasks-list');
newTasksList.addEventListener('click', (event) => { 
  
    if (event.target.classList.contains("done-button"))  {
      const parentTask = event.target.parentElement;

      const taskId = Number(parentTask.dataset.taskId);
      const task = myTask.getTaskById(taskId);
      task.status = 'DONE';
      myTask.render();
      //console.log('parentTask= ', parentTask);
      myTask.save();
    }
  
});

