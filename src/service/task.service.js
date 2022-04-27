// import axios from 'axios'
import {storageService} from './async.service.js'
export const taskService = {
  query,
  getById,
  remove,
  save,
  getEmptyTask,
}
 const STORAGE_KEY= 'tasks_db'
 const TASKS = [
  {
    _id:"u101",
    title:'learn js',
    status: 'new',
    description: 'task description is here',
    importance: 3,
    createdAt: Date.now(),
    lastTriedAt: null,
    triesCount: 0,
    doneAt: null,
    errors: [],
  },
  {
    _id:"u102",
    title:'go to workout',
    status: 'new',
    description: 'task description is here',
    importance: 3,
    createdAt: Date.now(),
    lastTriedAt: null,
    triesCount: 0,
    doneAt: null,
    errors: [],
  },
  {
    _id:"u103",
    title:'go and eat outside',
    status: 'new',
    description: 'task description is here',
    importance: 2,
    createdAt: Date.now(),
    lastTriedAt: null,
    triesCount: 0,
    doneAt: null,
    errors: [],
  }
]
// storageService.postMany(STORAGE_KEY, TASKS )

async function query(filterValue) {
  try {
    // const tasks = await axios.get(TASK_URL, { params: filterValue })
    const tasks = await storageService.query(STORAGE_KEY)
    return tasks 
  } catch (error) {
    throw new Error('error on quey FE', error)
  }
}

async function getById(id) {
  try {
    // return await axios.get(TASK_URL + id).then((res) => res.data)
    return await storageService.get(STORAGE_KEY, id)
  } catch (error) {
    throw new Error('error on getById FE', error)
  }
}

async function remove(id) {
  try {
    // return await axios.delete(`${TASK_URL}${id}/`)
    return await storageService.remove(STORAGE_KEY, id)

  } catch (error) {
    throw new Error('error on remove Fe', error)
  }
}

async function save(task) {
  try {
    if (task._id) {
      // return await axios.put(`${TASK_URL}`, task)
      return await storageService.put(STORAGE_KEY, task)

    }
    // const addedTask = await axios.post(`${TASK_URL}`, { ...task })
    const addedTask =  await storageService.post(STORAGE_KEY, task)
    return addedTask
  } catch (error) {
    throw new Error('error on save fe', error)
  }
}

function getEmptyTask(title='new task',) {
  return {
    title,
    status: 'new',
    description: 'task description goes here',
    importance: 3,
    createdAt: Date.now(),
    lastTriedAt: null,
    triesCount: 0,
    doneAt: null,
    errors: [],
  }
}



