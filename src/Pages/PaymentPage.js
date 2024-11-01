import React from 'react';
import './PaymentPage.css'; 

const PaymentPage = () => {

  const department = {
    name: 'Departamento de Playa',
    capacity: 4,
    beds: 2,
    price: 120,
    piso: 3,
    imageUrl: 'https://casasdevacaciones.pe/wp-content/uploads/2020/03/vista-sala-departamento-playa-san-bartolo-scaled.jpg',
  };

  const handlePayment = (method) => {
    console.log(`Pagando con ${method}`);
  };

  const goBack = () => {
    alert("Regresando")
  };

  return (
    <div className="payment-container">
      <button className="back-button" onClick={goBack}>
        <img src="https://img.icons8.com/ios-filled/50/000000/back.png" alt="Regresar" />
      </button>
      <div className="department-view">
        <img src={department.imageUrl} alt={department.name} />
      </div>
      <div className="department-description">
        <h2>{department.name}</h2>
        <p><strong>Aforo:</strong> {department.capacity}</p>
        <p><strong>Número de camas:</strong> {department.beds}</p>
        <p><strong>Precio por noche:</strong> S/. {department.price}</p>
        <p><strong>Piso:</strong> {department.piso}</p>

        <h3>Métodos de pago:</h3>
        <div className="payment-methods">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-YbiyLYyImtiqdlFMTWQWt60TZWm2chkrA&s" 
            alt="Iziqpay" 
            onClick={() => handlePayment('Iziqpay')} 
            className="payment-icon"
          />
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOL5U0fXWe7o7BL274TqnieI1Kqr3OrEjVA&s" 
            alt="Culqi" 
            onClick={() => handlePayment('Culqi')} 
            className="payment-icon"
          />
          <img 
            src="https://yt3.googleusercontent.com/1il06CSbBwwG5lyybUYa6KnisWtswkvFPK9y2C92R3Vp5hd6rCdTBYD-TGKGAQt9V6FMMSXsxw=s900-c-k-c0x00ffffff-no-rj" 
            alt="BCP" 
            onClick={() => handlePayment('BCP')} 
            className="payment-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
