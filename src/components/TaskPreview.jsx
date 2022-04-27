import { Link } from "react-router-dom"

export function TaskPreview({ task, onRemoveTask }) {
    const getDate = timestamp => {
        return new Date(timestamp).toDateString();
    };
    if (!task) return <div>Loading...</div>
    return (
        <section className= 'task-preview'>
            {/* <Link to={`/task/${task._id}`} className="info"> */}
                <h2>{task.title}</h2>
                <h4>{task.status}</h4>
                <span>{getDate(task.createdAt)}</span>
            {/* </Link> */}
            <section className="actions">
                <button onClick={() => onRemoveTask(task._id)}>Delete</button>
                <Link to={`/task/edit/${task._id}`}>Edit task</Link> 
            </section>
        </section>
    )
}
