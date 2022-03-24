const {assert} = require('chai');
const { describe, it } = require('mocha');
const { addTask, deleteTask, getTaskById, TaskManager} = require('../js/taskManager');
//const { myTask } = require('../js/index');
//const app = require('../taskManager.js');

describe('constructor', () => {
  it('sets this.currentId to currentId', () => {
    const testTask = new TaskManager;
    const expected = 0;

    const actual = testTask.currentId;

    assert.strictEqual(actual, expected);
  })

  it('creates empty array', () => {
    //Setup
    const testTask = new TaskManager;
    const expected = [];
    //Exercise
    const actual = testTask.tasks;
    //Verify
    assert.deepEqual(actual, expected);
  })
})

describe('addTask', () => {
  it('increments this.currentId', () => {
    //Setup
    let testTask = new TaskManager;
    testTask.currentId = 0;
    const expected = 1;
    //Exercise
    testTask.addTask();
    const actual = testTask.currentId;
    //Verify
    assert.strictEqual(actual, expected);
  })

  it('pushes task object into an array', () => {
    //Setup
    let testTask = new TaskManager;
    let expected = {currentId: 1, name: 'get groceries', dueDate: '2022/3/24', assignedTo: 'Victoria', description: 'get milk', status: 'TODO'};
    //Exercise
    testTask.addTask('get groceries', '2022/3/24', 'Victoria', 'get milk', 'TODO');
    let actual = testTask.tasks[0];
    //Verify
      assert.deepEqual(actual, expected);
  })
})

describe('getTaskById', () => {
  it('returns specific task', () => {
    //Setup
    let testTask = new TaskManager;
    const taskId = 1;
    const expected = {currentId: 1, name: 'get groceries', dueDate: '2022/3/24', assignedTo: 'Victoria', description: 'get milk', status: 'TODO'};
    //Exercise
    testTask.addTask('get groceries', '2022/3/24', 'Victoria', 'get milk', 'TODO');
    
    const actual = testTask.getTaskById(taskId);
    //Verify
    assert.deepEqual(actual, expected);
  })
})

describe('deleteTask', () => {
  it('pushes the task into a new array', () => {
    //Setup

    //Exercise

    //Verify
  })
})