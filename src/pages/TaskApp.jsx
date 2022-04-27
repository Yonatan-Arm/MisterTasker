import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTasks, removeTask } from '../store/actions/taskActions'
import { TaskList } from '../components/TaskList'

export const TaskApp = (props) => {
  const { tasks } = useSelector(state => state.taskModule)
  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(loadTasks())
}, [])
    
  

    const onRemoveTask = async (taskId) => {
        dispatch(removeTask(taskId))
    }
    if (!tasks) return <div>Loading...</div>
    return (
      <div className='container taskApp'>
        <h1 >TaskApp</h1>
        <TaskList history={props.history} onRemoveTask={onRemoveTask} tasks={tasks} />

      </div>
    )
  
}
