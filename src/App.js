import IntroduceContainer from "./container/IntroduceContainer";
import InputContainer from "./container/InputContainer";
import CompleteContainer from "./container/CompleteContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CameraContainer from "./container/CameraContainer";
<<<<<<< HEAD
// import AdminContainer from './container/AdminContainer';
// import InquiryContainer from './container/InquiryContainer';
=======
import AdminContainer from "./container/AdminContainer";
import InquiryContainer from "./container/InquiryContainer";
import ExitContainer from "./container/ExitContainer";
import ExitCompleteContainer from "./container/ExitCompleteContainer";
>>>>>>> 9983faea4b2b31772e3340f98e572708b47108dd
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
            <Route path="/" element={<IntroduceContainer />} />
            <Route path="/regist" element={<InputContainer />} />
            <Route path="/complete" element={<CompleteContainer />} />
            <Route path="/camera" element={<CameraContainer />} />
            <Route path="/exit" element={<ExitContainer />} />
            <Route path="/exitcomplete" element={<ExitCompleteContainer />} />
            <Route path="/inquiry" element={<InquiryContainer />} />
            <Route path="/admin" element={<AdminContainer />} />
          </Routes>
        </BrowserRouter>
        <GlobalStyle />
<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<IntroduceContainer />} />
          <Route path="/regist" element={<InputContainer />} />
          <Route path="/complete" element={<CompleteContainer />} />
          <Route path="/camera" element={<CameraContainer />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
      {/* <AdminContainer />
    <InquiryContainer/> */}
=======
      </QueryClientProvider>
      {/* <InputContainer/> */}
      {/* <AdminContainer />
      <InquiryContainer /> */}
>>>>>>> 9983faea4b2b31772e3340f98e572708b47108dd
    </>
  );
}

export default App;
