//TASK 4
const submitButton = document.getElementById('submit-button');

// const newTask = {
//   taskName: taskNameHTML,
//   assignedTo: assignedToHTML,
//   dueDate: dueDateHTML,
  //description: descriptionHTML,
  // AAA = () => {
    
  // }
// }

const validFormFieldInput = () => {
  const newTaskNameInput = document.querySelector('#task-name');
  const name = newTaskNameInput.value;

  const newAssignedToInput = document.querySelector('#assigned-person');
  const person = newAssignedToInput.value;

  const dateInput = document.querySelector('#due-date');
  const date = dateInput.value;

  const newDescriptionInput = document.querySelector('#task-description');
  const description = newDescriptionInput.value;
 
  var myAlert = document.querySelector('.liveAlertPlaceholder');
  myAlert.innerHTML = '';

  function warning (inputValue, inputName) {
    if (inputValue.length === 0) {
      myAlert.innerHTML = '<div class="alert alert-warning alert-dismissible" role="alert">' + 'Please input ' + inputName + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
      
      alertPlaceholder.append(myAlert);
      } 
  }
  
  warning(name, 'task name');
  warning(person, "a person's name");
  warning(date, 'a date');
  warning(description, 'a task description');
}

submitButton.onclick = validFormFieldInput;

const myTask = new TaskManager;
console.log(myTask.tasks)