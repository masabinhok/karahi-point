import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import DataTable from "./routes/DataTable";
import ContactPage from "./routes/ContactPage";
import ProjectPage from "./routes/ProjectPage";
import LoginPage from "./routes/LoginPage";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {!isAuthenticated ? (
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/data/:category" element={<DataTable />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/project" element={<ProjectPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
