import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from "./pages/LogInPage/LogInPage";
import GlobalStyle from "./style/GlobalStyle";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ExtractPage from "./pages/ExtractPage/ExtractPage";
import InflowPage from "./pages/InFlowPage/InFlowPage";
import OutflowPage from "./pages/OutFlowPage/OutFlowPage";
import UserContext from "./contexts/UserContext";
import { useState } from "react";

function App() {
  const [userInfos, setUserInfos] = useState(undefined);
  console.log(userInfos, "App")
  return (
    <UserContext.Provider value={{ userInfos, setUserInfos }}>
    
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<LogInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="extract" element={<ExtractPage />} />
            <Route path="/inflow" element={<InflowPage />} />
            <Route path="/outflow" element={<OutflowPage />} />
          </Routes>
        </BrowserRouter>

    </UserContext.Provider>
  );
}

export default App;
