import Task from "./Task";

const Tasks = ({ tasks }) => {
    return (
        <div className="flex flex-col justify-center">
            {tasks.map((task) => (<Task key={task.id} task={task} />))}
        </div>
    )
}

export default Tasks