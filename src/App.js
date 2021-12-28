import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 0,
        content: "English Class",
        date: "Dec 24th at 7:30pm",
        completed: false,
      },
      {
        id: 1,
        content: "Buy Christmas gifts",
        date: "Dec 23rd at 6:00pm",
        completed: false,
      },
      {
        id: 2,
        content: "Ride bike",
        date: "Dec 27th at 9:00am",
        completed: false,
      },
      {
        id: 3,
        content: "Learn useState",
        date: "Dec 30th at 10:00am",
        completed: true,
      },
      {
        id: 4,
        content: "Watch Liverpool vs. Leicester",
        date: "Dec 28th at 3:00pm",
        completed: true,
      }
    ]
  );

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const changeStatus = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  };

  return (
    <div className="application-container flex flex-col justify-center my-5 mx-auto px-2 max-w-screen-md border-2 border-black">
      <Header />
      <Tasks title={"Pending tasks"} tasks={tasks} completed={false} onDelete={deleteTask} onChangeStatus={changeStatus} />
      <Tasks title={"Completed tasks"} tasks={tasks} completed={true} onDelete={deleteTask} onChangeStatus={changeStatus} />
    </div>
  );
}

export default App;
