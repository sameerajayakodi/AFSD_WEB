import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import "./App.css";

function App() {
  return (
    <>
      {/* <Home />
      <About /> */}
      {/* <MuiPage /> */}
      {/* <DrawerPage /> */}
      {/* <AxiosPage /> */}
      {/* <LoginPage />
      <RegisterPage /> */}

      <Routes>
        {/*sampurna page ekak wens weddi routing app.jsx hari componet ekaka hari danna puluwan */}
        {/* router eka hadnn oni e adala component eka load wenna ona thana */}
        {/* default route eka widiyata * ho / denna puluwan ...Navigate use karala redirect karanna puluwan */}

        <Route path="*" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
