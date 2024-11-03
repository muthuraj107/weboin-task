import React from "react";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Form from "./pages/Form";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/form" element={<Form/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
