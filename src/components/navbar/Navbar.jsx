import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

import "../../styles/global.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div>
        <img
          src={Logo}
          alt="Holu"
          className="navbar-logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="navbar-menu">
        <Link to="/about">Quem Somos</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/houses">Para casas</Link>
        <Link to="/business">Para empresas</Link>
        <Link to="/">Como Funciona</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/calculo" className="budget">
          Quero um orçamento
        </Link>
      </div>
    </div>
  );
}
