import { TaskPreview } from "./TaskPreview";

export function TaskList({ tasks, onRemoveTask, history }) {
    
    return (
        <section className="task-list simple-cards-grid">
            {tasks.map(task =>
                <TaskPreview onRemoveTask={onRemoveTask} key={task._id} task={task} />
            )}
        </section>
    )
}

