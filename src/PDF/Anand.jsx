import React from "react";
import "../style/ANAND.css";

const Quotation = () => {
  return (
    <div className="anand-container">
      <div className="anand-header">
        <img src="/logo8111.png" alt="Company Logo" className="anand-logo" />
        <h1>ANAND SCIENTIFIC COMPANY</h1>
        <h3>Quotation</h3>
      </div>
      <div className="anand-contact-info">
        <p>
          <strong>Ref:</strong> ANAND/RR/2020-21/2569
        </p>
        <p>
          <strong>Date:</strong> 07-01-2021
        </p>
      </div>
      <div className="anand-details">
        <p>
          <strong>To:</strong>
        </p>
        <p>
          The Purchase Manager,
          <br />
          M/s Rakas Science House,
          <br />
          Karaikkal.
        </p>
      </div>
      <table className="anand-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Particulars</th>
            <th>Price Per Unit</th>
            <th>GST</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Male Dummy</td>
            <td>5750.00</td>
            <td>18%</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Patient Coat</td>
            <td>1150.00</td>
            <td>18%</td>
          </tr>
        </tbody>
      </table>
      <div className="anand-terms">
        <p>
          <strong>Terms & Conditions:</strong>
        </p>
        <ul>
          <li>Delivery immediate.</li>
          <li>Payment 100% advance.</li>
          <li>GST 18% Extra.</li>
        </ul>
      </div>
      <div className="anand-footer">
        <p>
          No. 123, 1st Main Road, Balamurugan Garden, Thoraipakkam, Chennai - 600 097.
        </p>
        <p>
          <span className="anand-label">Tele:</span> 044-43331045, 43331196 |{" "}
          <span className="anand-label">Cell No:</span> 98400 15868
        </p>
        <p>
          <span className="anand-label">Email:</span> anandscientific@yahoo.in |{" "}
          <span className="anand-label">GST No:</span> 33AAIPR0004K1Z0
        </p>
      </div>
    </div>
  );
};

export default Quotation;
