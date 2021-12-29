import { useState } from "react";

const AddTask = ({ onSubmit }) => {
    const [text, setText] = useState("");
    const [date, setDate] = useState("");

    const onClick = (e) => {
        e.preventDefault();
        //TODO: input validation

        if (!text || !date) {
            alert("Both fields are required!")
            return;
        }

        onSubmit({ content: text, date: new Date(date).toDateString(), completed: false });

        setText("");
        setDate("");
    }

    return (
        <form action="" className="create-new-task inline-flex justify-around flex-wrap gap-2">
            <input type="text" name="" id="" value={text} onChange={(e) => setText(e.target.value)} placeholder="What's on your mind?" required className="p-1 rounded-md bg-gray-100 border-transparent" />
            <input type="date" name="" id="" value={date} onChange={(e) => setDate(e.target.value)} required className="p-1 rounded-md bg-gray-100 border-transparent" />
            <input type="submit" value="Add!" onClick={onClick} className="py-1 px-2 rounded-md bg-emerald-600 border-transparent text-white font-bold cursor-pointer" />
        </form>
    )
}

export default AddTask;