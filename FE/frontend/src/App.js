import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Member/Login.js";
import SignUp from "./Components/Member/SignUp.js";
import SignUpSucess from "./Components/Member/SignUpSucess.js";
import Start from "./pages/StartPage";
import Mypage from "./pages/MyPage.js";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupsucess" element={<SignUpSucess />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
