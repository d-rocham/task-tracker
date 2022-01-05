import { useState, useEffect } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([]);

  //Render incoming tasks from server
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

  //Retrieve tasks or task from server. Find a better name because it won't always return several tasks
  const fetchTasks = async (id = null) => {
    try {
      const response = id == null ? await fetch("http://localhost:5000/tasks") : await fetch(`http://localhost:5000/tasks/${id}`);
      const responseData = await response.json();
      return responseData;
    }
    catch (err) {
      alert(err);
    }
  }

  //Add tasks
  const addTask = async (task) => {
    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task)
    });

    const newTask = await response.json()
    setTasks([...tasks, newTask]);
  }

  //Edit task info
  const editTask = async (id, newData) => {

    //Fetch required task from server
    const targetTask = await fetchTasks(id);

    //Create new task object with updated info
    const updatedTask = Number.isNaN(Date.parse(newData)) ?
      { ...targetTask, content: newData } :
      { ...targetTask, date: newData };

    //Return new task to server
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await response.json();

    setTasks(tasks.map((task) =>
      task.id === id ?
        Number.isNaN(Date.parse(newData)) ?
          { ...task, content: data.content } :
          { ...task, date: data.date }
        : task));
  }

  //Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })

    setTasks(tasks.filter((task) => task.id !== id));
  };


  //Change status (completed or not)
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
