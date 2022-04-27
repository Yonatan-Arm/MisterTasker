import { taskService } from '../../service/task.service.js'

export function loadTasks() {
  return async (dispatch) => {
    try {
      const tasks = await taskService.query()
      dispatch({ type: 'SET_TASKS', tasks })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function removeTask(taskId) {
  return async (dispatch) => {
    try {
      await taskService.remove(taskId)
      dispatch({ type: 'REMOVE_TASK', taskId })
    } catch (err) {
      console.log('err:', err)
    }
  }
}
export function getTask(taskId) {
    return async dispatch => {
        try {
            const task = await taskService.getTaskById(taskId);
            dispatch({ type: 'SET_TASK', task });
        } catch (err) {
            console.log('err:', err);
        }
    };
}

export function setFilterBy(filterBy) {
  return async (dispatch) => {
    dispatch({ type: 'SET_FILTER_BY', filterBy })
  }
}


 export function updateTask(task) {
    return async dispatch => {
        try {
            await taskService.save(task);
            dispatch({ type: 'UPDATE_TASK', task });
        } catch (err) {
            console.log('err:', err);
        }
    };
}




