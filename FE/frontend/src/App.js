import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Member/Login.js";
import SignUp from "./Components/Member/SignUp.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
