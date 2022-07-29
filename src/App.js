import IntroduceContainer from "./container/IntroduceContainer";
import InputContainer from "./container/InputContainer";
import CompleteContainer from "./container/CompleteContainer";
// import AdminContainer from './container/AdminContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CameraContainer from "./container/CameraContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroduceContainer />} />
        <Route path="/regist" element={<InputContainer />} />
        <Route path="/complete" element={<CompleteContainer />} />
        <Route path="/camera" element={<CameraContainer />} />
      </Routes>
    </BrowserRouter>
    // <AdminContainer />
  );
}

export default App;
