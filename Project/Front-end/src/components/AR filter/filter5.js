import React from "react";
import "./filter5.css";
import NextBtn from "components/SimulationForm/NextBtn";

function ExternalPage({ onNext }) {
  return (
    <>
      <div className="centered-and-scaled">
        <object data="/filter5.html" />
      </div>
      {onNext && <NextBtn onClick={onNext} />}
    </>
  );
}

export default ExternalPage;
