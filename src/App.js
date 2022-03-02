import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbars/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserList from "./pages/user/UserList";

const App = () => {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
