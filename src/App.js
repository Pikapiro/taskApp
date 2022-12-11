import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LogIn from "./components/LogIn";
import NevBar from "./components/NevBar";
import AllTasks from "./components/AllTasks";
import MyTasks from "./components/MyTasks";
import NewTasks from "./components/NewTasks";
import History from "./components/History";

function App() {
  const [loged, setLoged] = useState({});
  const [flagData, setFlagData] = useState(true);
  const [tasksArr, setTasksArr] = useState([]);
  const [users, setUsers] = useState([]);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    fetch("/getAllData")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTasksArr(data.tasks);
        setUsers(data.users);
        setHistory(data.history);
      });
  }, [flagData]);
  const finish = (index) => {
    let arr = [...tasksArr];

    let f = arr.filter((ele, i) => {
      return index == i;
    });

    fetch("/endTask", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        endTask: f[0],
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setFlagData(!flagData);
      });
  };
  const add = (n, d) => {
    let temp = { name: n, description: d };
    fetch("/newTask", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        newTask: temp,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setFlagData(!flagData);
      });
  };

  const [b, setB] = useState(true);
  const screen = () => {
    if (b == true) {
      return <LogIn b={setB} arr={users} lg={setLoged} />;
    } else {
      return (
        <div>
          <NevBar b={setB} />
          <h1>welcome:{loged.name}</h1>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        {screen()}
        <Routes>
          <Route
            path="/allTasks"
            element={<AllTasks arr={tasksArr} l={loged} f={finish} />}
          />
          <Route path="/myTasks" element={<MyTasks />} />
          <Route path="/newTask" element={<NewTasks add={add} />} />
          <Route path="/history" element={<History arr={history} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
