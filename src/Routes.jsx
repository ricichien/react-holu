import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Header from "./screens/Header/Header";
import About from "./screens/About/About";
import Projects from "./screens/Projects/Projects";
import Houses from "./screens/Houses/Houses";
import Business from "./screens/Business/Business";
import Blog from "./screens/Blog/Blog";
import BudgetSummary from "./screens/BudgetSummary/BudgetSummary";
import BudgetForm from "./screens/BudgetForm/BudgetForm";

function RoutesComponent() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/calculo" element={<BudgetForm />} />
        <Route path="/calculo/:id" element={<BudgetSummary />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/business" element={<Business />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
