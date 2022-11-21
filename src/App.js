import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ExtractPage from "./pages/ExtractPage/ExtractPage";
import InflowPage from "./pages/InFlowPage/InFlowPage";
import OutflowPage from "./pages/OutFlowPage/OutFlowPage";
import UserContext from "./contexts/UserContext";
import { useEffect, useState } from "react";
import LogInPage from "./pages/LogInPage/LogInPage";
import EditInflowPage from "./pages/EditInflowPage/EditInfowPage";
import EditOutflowPage from "./pages/EditOutFlowPage/EditOutFlowPage";

function App() {
  const [userInfos, setUserInfos] = useState(undefined);
  const storedData = JSON.parse(localStorage.getItem("userInfos"));

  useEffect(() => {
    if (storedData) {
      setUserInfos(storedData);
    }
  }, []);
  return (
    <UserContext.Provider value={{ userInfos, setUserInfos }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/extract" element={<ExtractPage />} />
          <Route path="/inflow" element={<InflowPage />} />
          <Route path="/outflow" element={<OutflowPage />} />
          <Route path="/edit/inflow" element={<EditInflowPage/>}/>
          <Route path="/edit/outflow" element={<EditOutflowPage/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

