import { useSelector } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Task from "./pages/Task";
import TaskCreate from "./pages/TaskCreate";
function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <Router>
      <Routes>
        <Route path="/" element={!user ? <Login /> : <Navigate to="/home" />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        <Route
          path="/task/:id"
          element={user ? <Task /> : <Navigate to="/" />}
        />
        <Route
          path="/task/create"
          element={user ? <TaskCreate /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
