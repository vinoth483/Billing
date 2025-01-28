import React from "react";
import "./PrecisionScientific.css";
import Logo from "./logo.webp"; // Ensure the logo image is placed in the public folder or imported correctly.

const Quotation = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Company Logo" style={{ width: "100%" }} />
        </div>
        <div className="company-info">
          <h2>The Precision Scientific Co.</h2>
          <p>044 - 24335025 / 24338144 / 24338841 / +91 98400 50009</p>
          <p>precisionscientific@gmail.com | www.precision-scientific.com</p>
          <p>Precision Plaza 397, Anna Salai, Teynampet, Chennai - 600 018</p>
          <p>GST Number - 33AAMFT5165F1Z2</p>
        </div>
      </div>

      <div className="details">
        <p><strong>QTN No. 101</strong></p>
        <p className="date"><strong>Date:</strong> 21.11.2020</p>
        <p><strong>To:</strong></p>
        <p>Penna Cement Industries Ltd</p>
        <p>Karaikal Port</p>
        <p>Kheezhavanjoor Village, T.R.Pattinam</p>
        <p>Karaikal - 609 605</p>
        <p>Cell No. 9384697460</p>

        <h3>Dear Sir,</h3>
        <p>
          We acknowledge with thanks for your above requirement. We enclose herewith offer for
          the same along with its detailed literature for your kind perusal & consideration.
        </p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Sl.no</th>
            <th>Chemical Name Merck</th>
            <th>Pack of</th>
            <th>Rate</th>
            <th>Amount</th>
            <th>Dis %</th>
            <th>Dis.Amount</th>
            <th>Qty.Amount</th>
            <th>GST 18%</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Di-ammonium Oxalate GR 1.93281.0521</td>
            <td>500 gm</td>
            <td>570.00</td>
            <td>570.00</td>
            <td>40%</td>
            <td>342.00</td>
            <td>342</td>
            <td>61.56</td>
            <td>403.56</td>
          </tr>
          {/* Additional rows can be added here */}
        </tbody>
      </table>

      <div className="footer">
        <p><strong>TERMS AND CONDITION</strong></p>
        <p><strong>PAYMENT:</strong> 30%</p>
        <p><strong>DELIVERY:</strong> AT YOUR PLACE</p>
        <br />
        <p><strong>PACKING AND FORWARD:</strong> EXTRA CHARGES</p>
      </div>
    </div>
  );
};

export default Quotation;
