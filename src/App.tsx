import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
import { Container } from "react-bootstrap";
import { Main } from "./pages/main";
import { Menu } from "./pages/menu";
import { About } from "./pages/about";
import { Navbar } from "./components/navbar";
import { MainProvider } from "./context/main-context";

function App() {
  return (
    <MainProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </MainProvider>
  );
}

export default App;
