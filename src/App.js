import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbars/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
