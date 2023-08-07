import React from 'react';
import NextBtn from 'components/SimulationForm/NextBtn';
import './filter2.css'; 

function ExternalPage({ onNext }) {
  return (
    <>
    <div className="centered-and-scaled">
      <object data="/filter2.html" />
    </div>
      {onNext && <NextBtn onClick={onNext} />}
    </>
  );
}

export default ExternalPage;