import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage.js";
import SignUp from "./pages/SignUpPage.js";
import Start from "./pages/StartPage";
import Mypage from "./pages/MyPage.js";
import Questions from "./pages/QuestionsPage.js";
import EditInfo from "./pages/EditInfoPage.js";
import RecommendResult from "./pages/RecommResultPage";

import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/question" element={<Questions />} />
          <Route path="/editinfo" element={<EditInfo />} />
          <Route path="/recommend" element={<RecommendResult />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
