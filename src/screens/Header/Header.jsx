import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/global.css";

function Header() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { name, email, phoneNumber } = formData;
    let isValid = true;

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!name || !nameRegex.test(name)) {
      setNameError("Digite um nome válido.");
      isValid = false;
    } else {
      setNameError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setEmailError("Digite um e-mail válido.");
      isValid = false;
    } else {
      setEmailError("");
    }

    const phoneRegex = /^[0-9]{10,}$/;
    if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
      setPhoneNumberError("Digite um número de telefone válido.");
      isValid = false;
    } else {
      setPhoneNumberError("");
    }

    if (!isValid) {
      return;
    }
    navigate("/calculo");
  };

  return (
    <>
      <div
        className="index-content-header"
        style={{ animation: "fadeInUp 1s" }}
      >
        <div className="index-form">
          <h1>Economize com energia solar. Invista no futuro.</h1>
          <div className="form-group">
            <h2 className="required">Nome</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=""
            />
            {nameError && <span className="error-message">{nameError}</span>}
          </div>
          <div className="form-group">
            <h2 className="required">E-mail</h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=""
            />
            {emailError && <span className="error-message">{emailError}</span>}
          </div>
          <div className="form-group">
            <h2 className="required">Número de Telefone</h2>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="(DDD) + Seu número"
            />
            {phoneNumberError && (
              <span className="error-message">{phoneNumberError}</span>
            )}
          </div>
          <p className="disclaimer">
            A holu.com.br necessita das informações de contacto que nos fornece
            para o contactar sobre produtos e serviços. Pode anular a subscrição
            destas comunicações em qualquer momento. Para obter informações
            sobre como anular a subscrição, bem como sobre as nossas práticas de
            privacidade e compromisso com a proteção da sua privacidade,
            verifique a nossa Política de Privacidade.
          </p>
          <button onClick={handleSubmit}>Faça uma simulação</button>
        </div>
      </div>
    </>
  );
}

export default Header;
