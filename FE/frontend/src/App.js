import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage.js";
import SignUp from "./pages/SignUpPage.js";
import Start from "./pages/StartPage";
import Mypage from "./pages/MyPage.js";
import Questions from "./pages/QuestionsPage.js";
import EditInfo from "./pages/EditInfoPage.js";
import DetailPage from "./pages/DetailPage.js";
import RecommendResult from "./pages/RecommResultPage";
import Reserve from "./pages/ReservePage";
import { RecoilRoot } from "recoil";
import MapPage from "./pages/MapPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/question" element={<Questions />} />
          <Route path="/editinfo" element={<EditInfo />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/recommend" element={<RecommendResult />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
