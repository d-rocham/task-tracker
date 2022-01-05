import { useState, useEffect } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    }

    getTasks()
    return () => {//TODO:
      /*   cleanup */
    }
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/tasks");
      const tasks = await response.json();
      return tasks;
    }
    catch (err) {
      alert(err);
    }
  }

  const addTask = (task) => {
    const id = tasks.length;
    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);
  }

  const editTask = (id, isContent, newData) => {
    setTasks(tasks.map((task) =>
      task.id === id ?
        isContent ?
          { ...task, content: newData } :
          { ...task, date: newData }
        : task));
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const changeStatus = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  };


  return (
    <div className="application-container flex flex-col justify-center my-5 mx-auto px-2 max-w-screen-md border-2 border-black">
      <Header onSubmit={addTask} />
      <Tasks title={"Pending tasks"} tasks={tasks} completed={false} onDelete={deleteTask} onChangeStatus={changeStatus} onEdition={editTask} />
      <Tasks title={"Completed tasks"} tasks={tasks} completed={true} onDelete={deleteTask} onChangeStatus={changeStatus} />
    </div>
  );
}

export default App;
