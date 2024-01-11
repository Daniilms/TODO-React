import { Input } from "./components/Input/Input";
import "./App.css";
import { TasksList } from "./components/TasksList/TasksList";
import { useEffect, useState } from "react";
import { ArrsLengthObject, TaskInt } from "./const/const";
import { MainScreen } from "./components/MainScreen/MainScreen";
import { Routes, Route } from "react-router-dom";

function App() {
  const [Personal, setPersonal] = useState<TaskInt[]>([]);
  const [Life, setLife] = useState<TaskInt[]>([]);
  const [Work, setWork] = useState<TaskInt[]>([]);
  const [Others, setOthers] = useState<TaskInt[]>([]);
  const [path, setPath] = useState("/");
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    if (path !== "/") {
      setShowInput(true);
    }
  }, [path]);

  const allArraysLength: ArrsLengthObject[] = [
    {
      name: "Life",
      length: Life.length,
    },
    {
      name: "Work",
      length: Work.length,
    },
    {
      name: "Others",
      length: Others.length,
    },
    {
      name: "Personal",
      length: Personal.length,
    },
  ];

  function checkForArray() {
    let currArray: TaskInt[] = [];
    let currSetter = setPersonal;

    if (path === "life") {
      currArray = Life;
      currSetter = setLife;
    }
    if (path === "personal") {
      currArray = Personal;
      currSetter = setPersonal;
    }
    if (path === "work") {
      currArray = Work;
      currSetter = setWork;
    }
    if (path === "others") {
      currArray = Others;
      currSetter = setOthers;
    }
    return [currArray, currSetter];
  }
  return (
    <div className="app">
      <main>
        <div className="container">
          <div className="app-wrp">
            <div className="app-content">
              <div className="app-top-decoration">
                <h1 className="app-header">TODO List</h1>
                {showInput ? (
                  <Input
                    todos={checkForArray()[0]}
                    todosSetter={checkForArray()[1]}
                    path={path}
                    pathSetter={setPath}
                  />
                ) : (
                  <div className="app-header-main">
                    <h1 className="app-header-name-user">Hello Name</h1>
                    <p className="app-header-name-options">+</p>
                  </div>
                )}
              </div>
              <Routes>
                <Route
                  path={`/`}
                  element={
                    <MainScreen
                      todos={checkForArray()[0]}
                      allArraysLength={allArraysLength}
                      inputSetter={setShowInput}
                      path={path}
                      pathSetter={setPath}
                    />
                  }
                ></Route>
                <Route
                  path={"/Tasks/:id"}
                  element={
                    <TasksList
                      todos={checkForArray()[0]}
                      todosSetter={checkForArray()[1]}
                      pathSetter={setPath}
                    />
                  }
                ></Route>
              </Routes>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
