import React from "react";
import "./quotation.css";

const Quotation = () => {
  return (
    <div className="quotation-container">
      {/* Header Section */}
      <div className="header">
        <h1>QUOTATION</h1>
        <div className="quotation-info">
          <p><strong>No:</strong> 10076</p>
          <p><strong>Date:</strong> 23/09/2024</p>
        </div>
        <div className="logo-container">
          <img src="/logo8111.png" alt="Viriya Scientific Company" className="logo" />
          <div className="logo-divider"></div> {/* Vertical divider */}
          <div className="logo-text">
            <h1>VIRIYA</h1>
            <p>SCIENTIFIC COMPANY</p>
            <p>SCIENCE MATTERS</p>
          </div>
        </div>
      </div>

      {/* Quotation Details */}
      <div className="details">
        <p><strong>To:</strong></p>
        <p>Dr. Ram Kumar</p>
        <p>HOD of Physics Department</p>
        <p>C Kandaswami Naidu College</p>
        <p>Anna Nagar, Chennai - 600 102</p>
      </div>

      {/* Table Section */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>UNIT PRICE</th>
              <th>QTY</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Air Wedge stand (with optical plates set of 2 in PVC box)</td>
              <td>500</td>
              <td>1 No</td>
              <td>500.00</td>
            </tr>
            <tr>
              <td>Ammeter</td>
              <td>490</td>
              <td>1 No</td>
              <td>490.00</td>
            </tr>
            <tr>
              <td>Physical balance with extended support divided door case & wooden base</td>
              <td>7540</td>
              <td>1 No</td>
              <td>7540.00</td>
            </tr>
            {/* Add other rows as needed */}
          </tbody>
        </table>
      </div>

      {/* Footer Section */}
      <div className="footer">
        In case of any enquiry contact us at <strong>+91 8124095141</strong> or email us at <strong>vscompany20@gmail.com</strong>
      </div>
    </div>
  );
};

export default Quotation;
