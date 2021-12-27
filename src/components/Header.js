import NewTask from "./NewTask";

const Header = () => {
    return (
        <div className="header-container flex flex-col justify-center py-2">
            <h1 className="header-title text-3xl text-center">Task Tracker</h1>
            <NewTask />
        </div>

    )
}

export default Header;