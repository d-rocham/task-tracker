const NewTask = () => {
    const onClick = (e) => {
        e.preventDefault();
        console.log(e)
    }

    return (
        <form action="" className="create-new-task text-center inline">
            <input type="text" name="" id="" placeholder="What's on your mind?" />
            <input type="submit" value="Add!" onClick={onClick} />
        </form>
    )
}

export default NewTask;