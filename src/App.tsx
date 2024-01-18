import { Input } from "./components/Input/Input";
import "./App.css";
import { TasksList } from "./components/TasksList/TasksList";
import { useEffect, useState } from "react";
import { MainScreen } from "./components/MainScreen/MainScreen";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const [showInput, setShowInput] = useState(false);

  const path = useLocation();

  const currentPath = path.pathname;

  useEffect(() => {
    if (currentPath !== "/") {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  }, [currentPath]);

  return (
    <div className="app">
      <main>
        <div className="container">
          <div className="app-wrp">
            <div className="app-content">
              <div className="app-top-decoration">
                <h1 className="app-header">TODO List</h1>
                {showInput ? (
                  <Input />
                ) : (
                  <div className="app-header-main">
                    <h1 className="app-header-name-user">Hello Name</h1>
                    <p className="app-header-name-options">+</p>
                  </div>
                )}
              </div>
              <Routes>
                <Route path={`/`} element={<MainScreen />}></Route>
                <Route path={"/Tasks/:id"} element={<TasksList />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
