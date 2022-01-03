const TaskDate = ({ date, handleClick }) => {

    return (
        <p className="task-date text-sm font-raleway italic" onClick={handleClick} onBlur={handleClick}>{date}</p>
    )
}

export default TaskDate;