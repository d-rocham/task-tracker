import { useState } from "react";
import TaskTitle from "./TaskTitle";
import TaskDate from "./TaskDate";


/* <TaskName type={"input" or "date"} children = TODO:?? task={task}}*/
const TaskInformation = ({ informationType, task, onEdition }) => {
    /* Set inline editable input state /* 

    /* Set component editing state */
    const [isEditing, setEditing] = useState(false);
    const switchStatus = () => setEditing(!isEditing);

    const handleSubmission = (id, newValue) => {
        onEdition(id, newValue);
        switchStatus();
    }

    /* Render component */
    if (task.completed) {
        return (
            informationType === "text" ? <TaskTitle content={task.content} /> : <TaskDate date={task.date} />
        ); //Return children without the ability to modify
    }

    return (
        isEditing ? (<input
            type={informationType}
            className="pending"
            placeholder={informationType === "text" ? task.content : task.date}
            onBlur={switchStatus}
            onKeyDown={(e) => e.key === "Enter" ? handleSubmission(task.id, e.target.value) : ""}
            autoFocus />)
            : informationType === "text" ?
                <TaskTitle content={task.content} handleClick={switchStatus} /> :
                <TaskDate date={task.date} handleClick={switchStatus} />
    )

}

export default TaskInformation;