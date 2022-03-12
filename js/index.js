//TASK 4
const submitButton = document.getElementById('submit-button');
const newTaskNameInput = document.querySelector('#task-name');
const newAssignedToInput = document.querySelector('#assigned-person');
const dateInput = document.querySelector('#due-date');
const newDescriptionInput = document.querySelector('#task-description');
const myTask = new TaskManager;

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
      //  alertPlaceholder.append(myAlert);
       } 
   }
  
   warning(taskName, 'task name');
   warning(person, "a person's name");
   warning(date, 'a date');
   warning(description, 'a task description');

  // myTask.addTask(taskName, description, person, date, 'TODO');

}

//const test = new TaskManager;
//test.addTask('aaa', 'fff', 'gggg', '01/01/2022');

submitButton.addEventListener('click', function () {
  validFormFieldInput();
  if (taskName && person && date && description) {
    myTask.addTask(taskName, person, date, description);
    const taskForm = document.getElementById('task-form');
    taskForm.reset();
  }
} );

