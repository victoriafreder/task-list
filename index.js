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
 // console.log('name: ' + name + ' assigned to: ' + person + ' //date: ' + date ' description: ' + description);

  var alertPlaceholder = document.querySelector('.liveAlertPlaceholder');

  function warning (inputValue, inputName) {
    if (inputValue.length === 0) {
      var wrapper = document.createElement('div');
      wrapper.innerHTML = '<div class="alert alert-primary alert-dismissible" role="alert">' + 'Please input ' + inputName + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
      
      alertPlaceholder.append(wrapper);
      } 
  }
  
  warning(name, 'task name');
  warning(person, "a person's name");
  warning(date, 'a date');
  warning(description, 'a task description');
}

submitButton.onclick = validFormFieldInput;