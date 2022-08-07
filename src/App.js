import IntroduceContainer from "./container/IntroduceContainer";
import InputContainer from "./container/InputContainer";
import CompleteContainer from "./container/CompleteContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CameraContainer from "./container/CameraContainer";
// import AdminContainer from "./container/AdminContainer";
// import InquiryContainer from "./container/InquiryContainer";
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
          </Routes>
        </BrowserRouter>
        <GlobalStyle />
      </QueryClientProvider>
      {/* <InputContainer/> */}
      {/* <AdminContainer />
      <InquiryContainer /> */}
    </>
  );
}

export default App;
