import { IoClose, IoCheckmarkSharp } from "react-icons/io5"

const Task = ({ task }) => {
    return (
        <div className="card-container flex flex-row bg-gray-200 mb-2 pr-2">
            <div className="side-decorator bg-sky-600 w-2 mr-2"></div> {/* Side colored box */}
            <div className="info-container flex flex-col grow my-1">
                <h3 className="task-title text-xl">{task.content}</h3>
                <p className="task-date text-sm">{task.date}</p>
            </div>
            <div className="buttons-container flex flex-col justify-evenly align-center">
                <div className="-button w-6 h-6 mt-1 bg-lime-600 hover:bg-lime-700 cursor-pointer">
                    <IoCheckmarkSharp className="text-lime-50 text-2xl hover:text-lime-100" />
                </div>
                <div className="-button w-6 h-6 my-1 bg-red-600 hover:bg-red-700 cursor-pointer">
                    <IoClose className="text-red-50 text-2xl hover:text-red-100" />
                </div>
            </div>
        </div>
    )
}

export default Task;