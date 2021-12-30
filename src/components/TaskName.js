import { useState } from "react";

const TaskName = ({ content }) => {
    const [isEditing, setEditing] = useState(false);

    return (
        <h3 className="task-title text-xl font-ubuntu">{content}</h3>
    )

}

export default TaskName;