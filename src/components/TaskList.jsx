import { Link } from "react-router-dom";
import { TaskPreview } from "./TaskPreview";

export function TaskList({ tasks, onRemoveTask, history }) {
    
    return (
        <div>
         <Link to={`/task/edit/`}>Add task</Link> 
        <section className="task-list simple-cards-grid">
            {tasks.map(task =>
                <TaskPreview onRemoveTask={onRemoveTask} key={task._id} task={task} />
            )}
        </section>
        </div>
    )
}

