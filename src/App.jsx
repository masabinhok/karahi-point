import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import DataTable from "./routes/DataTable";
import ContactPage from "./routes/ContactPage";
import ProjectPage from "./routes/ProjectPage";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data/:category" element={<DataTable />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
};

export default App;
