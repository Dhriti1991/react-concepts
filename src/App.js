import "./App.css";
import HomeComponent from "./components/homecomponent.js";
import HomePropsState from "./components/props-and-state-concept/index.js";
import HomeReactHooks from "./components/react-hooks-concept/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <header className="App-header">
            <p>Concepts of React</p>
          </header>
          <Routes>
            <Route exact path="/" element={<HomeComponent />} />
            <Route path="/props-state" element={<HomePropsState />} />
            <Route path="/react-hooks" element={<HomeReactHooks />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
