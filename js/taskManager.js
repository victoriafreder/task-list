const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
  console.log(name);
  const html = `
  <li class="list-group-item">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <h5 class="col card-title">${TaskManager.name}</h5>
                  <h6 class="col card-subtitle text-danger text-end">Due Date: ${dueDate}</h6>
                </div>
                <h6 class="card-subtitle mb-2 text-muted">Assigned to: ${assignedTo}</h6>
                <p class="card-text">${description}</p>
                <div class="dropdown d-flex justify-content-end">
                  <button class="btn btn-light dropdown-toggle" type="button" id="progress" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    ${status}
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="progress">
                    <li><a class="dropdown-item" href="#">To Do</a></li>
                    <li><a class="dropdown-item" href="#">In Progress</a></li>
                    <li><a class="dropdown-item" href="#">Review</a></li>
                    <li><a class="dropdown-item" href="#">Done</a></li>
                  </ul>
                </div>
              </div>
          </li>
  `;
  return html;
}



class TaskManager {
  constructor(currentId = 0) {
    this.currentId = currentId;
    this.tasks = [];
  }
  addTask = (name, description, assignedTo, dueDate, status = 'TODO') => {
    const taskObj = [
      this.currentId++,
      name,
      description,
      assignedTo,
      dueDate,
      status
    ];
    this.tasks.push(taskObj);
    console.log(taskObj);
    console.log(this.tasks);
  }

  render() {
    const tasksHtmlList = [];

/* Loop over the TaskManager's tasks, for each task:

Store the current task in a variable

Create a date variable, storing a new Date(), passing in the current task's dueDate to the Date constructor.

Create a formattedDate variable, storing a readable string representing the date, using methods of the date we just created.

Hint: Use MDN's Date reference to see what methods are available to format a date. Build a string using string concatenation or template literals. Check the example/taskManager.js to see how it can be done if you get stuck.

Create a taskHtml variable to store the HTML of the current task, by calling the createTaskHtml function and using the properties of the current task, as well as the new formattedDate variable for the parameters.

push the taskHtml into the tasksHtmlList array. */

    for (let i = 0; i < this.tasks.length; i++) {
      //store current task in a variable?
      const currentTask = this.tasks[i];
      console.log(currentTask);
      const date = new Date(this.dueDate);
      console.log(date);
      const formattedDate = `${date.getMonth()} ${date.getDate()}, ${date.getFullYear()}`;
      const taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status);
      console.log(taskHtml);
      tasksHtmlList.push(taskHtml)
    }

/* After looping through each task, create a tasksHtml variable, set the variable to a string of HTML of all the tasks by joining the tasksHtmlList array together, separating each task's html with a newline.

Hint: \n can be used to represent a newline.

Make sure the tasks list in index.html has an id so it can be selected.

Select the tasks list element and set its innerHTML to the tasksHtml. */

    const tasksHtml = tasksHtmlList.join('\n');
    const tasksList = document.getElementById('tasks-list');
    tasksList.innerHTML = tasksHtml;
  }
}