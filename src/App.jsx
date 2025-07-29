import "./index.css";
import Navbar from "./component/Navbar";
import Manager from "./component/Manager";
import Display from "./component/Display";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-950">
          <div className="z-0 absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="z-10 flex flex-col items-center  min-h-screen">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <Home />
                  </>
                }
              />
              <Route
                path="/add-passwords"
                element={
                  <>
                    <Navbar />
                    <Manager />
                  </>
                }
              />
              <Route
                path="/display"
                element={
                  <>
                    <Navbar />
                    <Display />
                  </>
                }
              />
            </Routes>
          </div>
          <div className="z-0 absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>
    </>
  );
}

export default App;
