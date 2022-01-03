const TaskTitle = ({ content, handleClick }) => {

    return (
        <h3 className="task-title text-xl font-ubuntu" onClick={handleClick} onBlur={handleClick}>{content}</h3>
    )
}

export default TaskTitle;
