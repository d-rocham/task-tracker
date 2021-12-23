const Task = ({ task }) => {
    return (
        <div className="flex flex-row">
            <div></div> {/* Side colored box */}
            <div className="flex flex-col">
                <h3>{task.content}</h3>
                <p>{task.date}</p>
            </div>
            <div className="flex flex-col">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Task;