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
        checked: false,
      },
      {
        id: 1,
        content: "Buy Christmas gifts",
        date: "Dec 23rd at 6:00pm",
        checked: false,
      },
      {
        id: 2,
        content: "Ride bike",
        date: "Dec 27th at 9:00am",
        checked: false,
      }
    ]
  );
  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
