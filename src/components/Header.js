import AddTask from "./AddTask";

const Header = ({ onSubmit }) => {
    return (
        <div className="header-container flex flex-col justify-center py-2">
            <h1 className="header-title text-4xl text-center py-2 mb-1  font-nunito">Task Tracker</h1>
            <AddTask onSubmit={onSubmit} />
        </div>

    )
}

export default Header;