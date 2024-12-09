import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DrawerPage from "../pages/DrawerPage/DrawerPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import "./App.css";

function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    console.log(localStorage.getItem("afsd-token"));
    if (localStorage.getItem("afsd-token")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);
  return (
    <>
      {login ? (
        <DrawerPage />
      ) : (
        <Routes>
          {/*sampurna page ekak wens weddi routing app.jsx hari componet ekaka hari danna puluwan */}
          {/* router eka hadnn oni e adala component eka load wenna ona thana */}
          {/* default route eka widiyata * ho / denna puluwan ...Navigate use karala redirect karanna puluwan */}

          <Route
            path="*"
            element={<Navigate to={"/login"} key={"navigate"} />}
          />
          <Route path="/login" element={<LoginPage key={"login"} />} />
          <Route path="/register" element={<RegisterPage key={"register"} />} />
        </Routes>
      )}
      {/* <Home />
      <About /> */}
      {/* <MuiPage /> */}
      {/* <DrawerPage /> */}
      {/* <AxiosPage /> */}
      {/* <LoginPage />
      <RegisterPage /> */}
    </>
  );
}

export default App;
