import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import SobreNos from "./SobreNos";

function App() {
  return (
    <div className="App">
      <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="sobre-nos" element={<SobreNos />} />
            </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
