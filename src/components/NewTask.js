const NewTask = () => {
    const onClick = (e) => {
        e.preventDefault();
        console.log(e)
    }

    return (
        <form action="" className="create-new-task inline-flex justify-around flex-wrap gap-2">
            <input type="text" name="" id="" placeholder="What's on your mind?" className="p-1 rounded-md bg-gray-100 border-transparent" />
            <input type="datetime-local" name="" id="" className="p-1 rounded-md bg-gray-100 border-transparent" />
            <input type="submit" value="Add!" onClick={onClick} className="py-1 px-2 rounded-md bg-emerald-600 border-transparent text-white font-bold cursor-pointer" />
        </form>
    )
}

export default NewTask;