import NewTask from "./NewTask";

const Header = () => {
    return (
        <div className="header-container flex flex-col justify-center py-2">
            <h1 className="header-title text-4xl text-center py-2 mb-1">Task Tracker</h1>
            <NewTask />
        </div>

    )
}

export default Header;