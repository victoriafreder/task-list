const createTaskHtml = (name, dueDate, assignedTo, description, status = 'To Do', id) => {
  //console.log(name); data-task-id="${id}"put in 1 div
  const html = `
  <li class="list-group-item">
            <div data-task-id="${id}" class="card">
              <div class="card-body">
                <div class="row">
                  <h5 class="col card-title">${name}</h5>
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
              <button type="button" id="tasks-list" class="btn btn-success done-button">Mark As Done</button>
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
  addTask (name, dueDate, assignedTo, description, status = 'TO DO') {
      this.currentId++;
      // name,
      // dueDate,
      // assignedTo,
      // description,
      // status
    
    this.tasks.push( {currentId: this.currentId, name: name, dueDate: dueDate, assignedTo: assignedTo, description: description, status: status} );
    //console.log(taskObj);
    //console.log(this.tasks);
  }
  //UNCOMMENT LATER
  render() {
    const tasksHtmlList = [];
    
    for (let i = 0; i < this.tasks.length; i++) {
      //store current task in a variable?
      const currentTask = this.tasks[i];
      
      const date = new Date(currentTask.dueDate);
      const formattedDate = (date.getMonth() + 1) + '/' + (date.getDate() + 1) + '/' + date.getFullYear();
      //adding 1 to getMonth() because array of months begins with 0=January...
      const taskHtml = createTaskHtml(currentTask.name, formattedDate, currentTask.assignedTo, currentTask.description, currentTask.status, currentTask.currentId);
      // (currentTask[1], formattedDate, currentTask[2], currentTask[4], currentTask[5], currentTask[0]);
      
      tasksHtmlList.push(taskHtml)
    }

    console.log('tasksHtmlList', tasksHtmlList);
    const tasksHtml = tasksHtmlList.join('\n');
    console.log('tasksHtml', tasksHtml);
    const tasksList = document.getElementById('tasks-list');
    tasksList.innerHTML = tasksHtml;
    console.log('tasksList', tasksList);
  }

  getTaskById(taskId) {
    
    let foundTask;
    for (let i = 0; i < this.tasks.length; i++) {
      let task = this.tasks[i];
      if (taskId === task.currentId) {
        foundTask = task;
      }
    }
    return foundTask;
  }
}