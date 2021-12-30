import { useState } from "react";

const TaskDate = ({ date }) => {
    const [isEditing, setEditing] = useState(false);

    return (
        <p className="task-date text-sm font-raleway italic">{date}</p>
    )

}

export default TaskDate;