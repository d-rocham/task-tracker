import Task from "./Task";

const Tasks = ({ tasks }) => {
    return (
        <div className="tasks-container flex flex-col justify-center w-full">
            {tasks.map((task) => (<Task key={task.id} task={task} />))}
        </div>
    )
}

export default Tasks