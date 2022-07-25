import IntroduceContainer from "./container/IntroduceContainer";
import InputContainer from "./container/InputContainer";
import CompleteContainer from "./container/CompleteContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroduceContainer />} />
        <Route path="/regist" element={<InputContainer />} />
        <Route path="/complete" element={<CompleteContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
