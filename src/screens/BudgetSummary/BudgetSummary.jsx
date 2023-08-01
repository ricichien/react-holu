import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import app from "../../config/firebase";

import "../../styles/global.css";

const sizingProperties = [
  { key: "usefulArea", title: "Área:", unit: "M²" },
  { key: "length", title: "Comprimento:", unit: "M" },
  { key: "panelPower", title: "Potência do Painel:", unit: "W" },
  { key: "inverters", title: "Quantidade de Inversores:", unit: "" },
  { key: "panels", title: "Quantidade de Painéis:", unit: "" },
];

async function fetchData(id) {
  try {
    console.log("Fetching data for ID:", id);
    const db = getFirestore(app);
    const budgetingCollection = doc(db, "budgeting", id);
    console.log("Sizing collection reference:", budgetingCollection.path);
    const snap = await getDoc(budgetingCollection);
    console.log("Snapshot data:", snap.data());
    return snap.data();
  } catch (error) {
    console.log("Error fetching data:", error);
    return null;
  }
}

function BudgetSummary() {
  const location = useLocation();
  const [budgeting, setBudgeting] = useState({});

  useEffect(() => {
    fetchData(location?.state?.id)
      .then((data) => {
        setBudgeting(data || {});
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, [location.state, location.state.id]);

  const isBudgetingDataAvailable = Object.keys(budgeting).length > 0;

  return (
    <>
      <div
        className="index-content-budget-summary-container"
        style={{ animation: "fadeInUp 1s" }}
      >
        <div className="index-content-budget-summary">
          <h1>Este é o kit ideal para a sua necessidade</h1>
          <div className="index-content-budget-summary-box">
            {isBudgetingDataAvailable ? (
              renderBudgetingTable()
            ) : (
              <p>Nenhum dado disponível.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );

  function renderBudgetingTable() {
    return (
      <table className="table">
        <tbody>
          {sizingProperties.map((property) => (
            <tr key={property.key}>
              <td>
                <strong>{property.title}</strong>
              </td>
              <td>
                {property.key === "usefulArea"
                  ? `${budgeting[property.key].toFixed(2)} ${property.unit}`
                  : `${budgeting[property.key]} ${property.unit}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default BudgetSummary;
