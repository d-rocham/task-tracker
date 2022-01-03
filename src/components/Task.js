import { IoClose, IoCheckmarkSharp, IoArrowUp } from "react-icons/io5"
import TaskInformation from "./TaskInformation";

const Task = ({ task, onDelete, onChangeStatus, onEdition }) => {

    /* const taskTitle = <h3 className="task-title text-xl font-ubuntu">{task.content}</h3>
    const taskDate = <p className="task-date text-sm font-raleway italic">{task.date}</p> */

    return (
        <div className="card-container flex flex-row bg-gray-200 mb-2 pr-2 shadow-md">
            <div className={`side-decorator ${task.completed ? "bg-green-600" : "bg-sky-600"} w-2 mr-2`}></div>
            <div className="info-container flex flex-col grow my-1">
                <TaskInformation informationType={"text"} /* content={TaskTitle} */ task={task} onEdition={onEdition} />
                <TaskInformation informationType={"date"} /* content={TaskDate} */ task={task} onEdition={onEdition} />
            </div>
            <div className="buttons-container flex flex-col justify-evenly align-center">
                <div className={`button w-6 h-6 mt-1 ${task.completed ? "bg-sky-600 hover:bg-sky-700" : "bg-lime-600 hover:bg-lime-700"} cursor-pointer`} onClick={() => onChangeStatus(task.id)}>
                    {task.completed ?
                        <IoArrowUp className="text-2xl text-sky-50 hover:text-sky-100" />
                        : <IoCheckmarkSharp className="text-lime-50 text-2xl hover:text-lime-100" />}

                </div>
                <div className="button w-6 h-6 my-1 bg-red-600 hover:bg-red-700 cursor-pointer" onClick={() => onDelete(task.id)}>
                    <IoClose className="text-red-50 text-2xl hover:text-red-100" />
                </div>
            </div>
        </div>
    )
}

export default Task;