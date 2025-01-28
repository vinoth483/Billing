import React from "react";
import "./ANAND.css";

const Quotation = () => {
  return (
    <div className="container">
      <div className="header">
        <img src="/logo8111.png" alt="Company Logo" />
        <h1>ANAND SCIENTIFIC COMPANY</h1>
        <h3>Quotation</h3>
      </div>
      <div className="contact-info">
        <p>
          <strong>Ref:</strong> ANAND/RR/2020-21/2569
        </p>
        <p>
          <strong>Date:</strong> 07-01-2021
        </p>
      </div>
      <div className="details">
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
      <table className="table">
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
          {/* Add more rows as needed */}
        </tbody>
      </table>
      <div className="terms">
        <p>
          <strong>Terms & Conditions:</strong>
        </p>
        <ul>
          <li>Delivery immediate.</li>
          <li>Payment 100% advance.</li>
          <li>GST 18% Extra.</li>
        </ul>
      </div>
      <div className="footer">
        <p>
          No. 123, 1st Main Road, Balamurugan Garden, Thoraipakkam, Chennai -
          600 097.
        </p>
        <p>
          <span className="label">Tele:</span> 044-43331045, 43331196 |{" "}
          <span className="label">Cell No:</span> 98400 15868
        </p>
        <p>
          <span className="label">Email:</span> anandscientific@yahoo.in |{" "}
          <span className="label">GST No:</span> 33AAIPR0004K1Z0
        </p>
      </div>
    </div>
  );
};

export default Quotation;
