import Task from "./Task";

const Tasks = ({ title, tasks, completed, onDelete, onChangeStatus, onEdition }) => {
    return (
        <div className="tasks-container flex flex-col justify-center w-full">
            <h3 className="text-2xl text-center mb-2 font-raleway">{title}</h3>
            {tasks.map((task) => (task.completed === completed ? <Task key={task.id} task={task} onDelete={onDelete} onChangeStatus={onChangeStatus} onEdition={onEdition} /> : ""))}
        </div>
    )
}

export default Tasks