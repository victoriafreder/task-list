const createTaskHtml = (name, dueDate, assignedTo, description, status = 'To Do', id) => {
 
  const html = `
  <li class="list-group-item col-5">
            <div data-task-id="${id}" class="card">
              <div class="card-body">
                <div class="row">
                  <h5 class="col card-title">${name}</h5>
                  <h6 class="col card-subtitle text-danger text-end">Due Date: ${dueDate}</h6>
                </div>
                <h6 class="card-subtitle mb-2 text-muted">Assigned to: ${assignedTo}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Status: ${status}</h6>
                <p class="card-text">${description}</p>
                <!-- <div class="dropdown d-flex justify-content-end">
                  <button class="btn btn-light dropdown-toggle" type="button" id="progress" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    ${status}
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="progress">
                    <li><a class="dropdown-item">To Do</a></li>
                    <li><a class="dropdown-item">In Progress</a></li>
                    <li><a class="dropdown-item">Review</a></li>
                    <li><a class="dropdown-item">Done</a></li>
                  </ul>
                </div>-->
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
    
    this.tasks.push( {currentId: this.currentId, name: name, dueDate: dueDate, assignedTo: assignedTo, description: description, status: status} );
    
  }

  render() {
    const tasksHtmlList = [];
    
    for (let i = 0; i < this.tasks.length; i++) {
      //store current task in a variable
      const currentTask = this.tasks[i];
      
      const date = new Date(currentTask.dueDate);
      const formattedDate = (date.getMonth() + 1) + '/' + (date.getDate() + 1) + '/' + date.getFullYear();
      //adding 1 to getMonth() because array of months begins with 0=January...
      const taskHtml = createTaskHtml(currentTask.name, formattedDate, currentTask.assignedTo, currentTask.description, currentTask.status, currentTask.currentId);
      
      tasksHtmlList.push(taskHtml)
    }

    const tasksHtml = tasksHtmlList.join('\n');
    const tasksList = document.getElementById('tasks-list');
    tasksList.innerHTML = tasksHtml;
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

  save() {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJson);
    const currentId = JSON.stringify(this.currentId);
    localStorage.setItem('currentId', currentId);
  }

  // load() {
  //   if (localStorage.getItem('tasks')) {
  //     const tasksJson = localStorage.getItem('tasks');
  //     console.log(JSON.parse(tasksJson));
  //     this.tasks.push(JSON.parse(tasksJson));
  //   }
  //   if (localStorage.getItem('currentId')) {
  //     const currentId = localStorage.getItem('currentId');
  //     this.currentId = Number(currentId)
  //   }
  // }
}