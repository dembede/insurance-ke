// import NavBar from "./components/NavBar";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Form from "./pages/Form/Form";
import Help from "./pages/Help";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/form" element={<Form />} exact />
          <Route path="/help" element={<Help />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
