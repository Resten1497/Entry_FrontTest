import IntroduceContainer from "./container/IntroduceContainer";
import MainContainer from './container/MainContainer';
import InputContainer from "./container/InputContainer";
import CompleteContainer from "./container/CompleteContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CameraContainer from "./container/CameraContainer";
import AdminContainer from "./container/AdminContainer";
import InquiryContainer from "./container/InquiryContainer";
import ExitContainer from "./container/ExitContainer";
import ExitCompleteContainer from "./container/ExitCompleteContainer";
import ErrorContainer from './container/ErrorContainer';
import GlobalStyle from "./style/globalStyle";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/main" element={<IntroduceContainer />} />
            <Route path="/regist" element={<InputContainer />} />
            <Route path="/complete" element={<CompleteContainer />} />
            <Route path="/camera" element={<CameraContainer />} />
            <Route path="/exit" element={<ExitContainer />} />
            <Route path="/exitcomplete" element={<ExitCompleteContainer />} />
            <Route path="/inquiry" element={<InquiryContainer />} />
            <Route path="/admin" element={<AdminContainer />} />
            <Route path="/*" element={<ErrorContainer />} />
          </Routes>
        </BrowserRouter>
        <GlobalStyle />
      </QueryClientProvider>
    </>
  );
}

export default App;
