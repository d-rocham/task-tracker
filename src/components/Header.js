import NewTask from "./NewTask";

const Header = () => {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="text-3xl text-center">Task Tracker</h1>
            <NewTask />
        </div>

    )
}

export default Header;