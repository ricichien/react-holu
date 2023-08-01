import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getFirestore, addDoc } from "firebase/firestore";

import app from "../../config/firebase";
import Solar from "../../assets/Solar.jpg";
import SolarSystemCalculator from "../../service/SolarSystemCalculator";

import "../../styles/global.css";

function BudgetForm() {
  const [inputPower, setInputPower] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handlePowerChange = (event) => {
    setInputPower(event.target.value);
    setErrorMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isValidInput(inputPower)) {
      setInputPower("");
      setErrorMessage("Insira um valor válido");
    } else {
      try {
        const calculator = new SolarSystemCalculator();
        const budgetingData = calculator.calculateSolarSystem(
          parseFloat(inputPower.replace(",", "."))
        );

        const db = getFirestore(app);
        const budgetingCollection = collection(db, "budgeting");
        const docRef = await addDoc(budgetingCollection, budgetingData);
        navigate(`/calculo/${docRef.id}`, { state: { id: docRef.id } });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const isValidInput = (input) => {
    const numericValue = parseFloat(input.replace(",", "."));
    const isValid =
      !!input &&
      !isNaN(numericValue) &&
      input.search(/[A-Za-z]/) === -1 &&
      input.lastIndexOf(",") === input.indexOf(",");
    return isValid;
  };

  return (
    <>
      <div
        className="index-content-budgeting"
        style={{ animation: "fadeInUp 1s" }}
      >
        <div className="index-form">
          <h3>
            Digite a potência desejada em KWs para criarmos um orçamento para
            você.
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <h2 className="required">Potência Total (KW)</h2>
              <input
                required
                id="powerInput"
                type="text"
                value={inputPower}
                onChange={handlePowerChange}
                placeholder="Ex.: 4,5"
              />
              <span className="error-message">{errorMessage}</span>
            </div>
            <button type="submit" disabled={!isValidInput(inputPower)}>
              Simular
            </button>
          </form>
        </div>
        <div className="img-box">
          <img src={Solar} alt="" />
        </div>
      </div>
    </>
  );
}

export default BudgetForm;
