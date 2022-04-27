
import { createRef, useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { taskService } from "../service/task.service.js";

export const TaskEdit  = (props) => {
  const [task, handleChange, setTask] = useForm(null)

  useEffect(() => {
    loadTask()
}, [])

const loadTask = async () => {
  const id = props.match.params.id
  const task = id ? await taskService.getById(id) : taskService.getEmptyTask()
  setTask(task)
}
const onSaveTask = async (ev) => {
  ev.preventDefault()
  await taskService.save({ ...task })
  props.history.push('/')
}
  
const inputRef = (elInput) => {
  if (elInput) elInput.focus()
}

if (!task) return <div>Loading...</div>
return (
    <section className='task-edit'>
        <h2>{task._id ? 'Edit' : 'Add'} Task</h2>
        <form onSubmit={onSaveTask} >
            <label htmlFor="title">Title</label>
            <input ref={inputRef} onChange={handleChange} value={task.title} type="text" name="title" id="title" />

            <label htmlFor="importance">Importance</label>
            <select onChange={handleChange} value={task.importance} name="importance" id="importance">
                <option value="" disabled>Choose Importance</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button>Save</button>
        </form>

    </section>
)

}







