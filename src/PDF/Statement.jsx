import React from "react";
import "./Statement.css";

const StatementOfAccount = () => {
  return (
    <div className="statement-container">
      <div className="header">
        <div className="business-info">
          <p><em>Your Business Name</em></p>
          <p><em>Your Business Address</em></p>
          <p><em>Your Business City, State, and ZIP Code</em></p>
        </div>
        <div className="statement-date">
          <p><em>Statement Date</em></p>
        </div>
        <div className="business-phone">
          <p><em>Your Business Phone</em></p>
        </div>
      </div>

      <h2 className="title">Statement of Account</h2>

      <div className="customer-info">
        <p><em>Customer's Name</em></p>
        <p><em>Customer's Address</em></p>
        <p><em>Customer's City, State, and ZIP Code</em></p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Bill Value</th>
            <th>Payment Made</th>
            <th>Account Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Previous Balance</td>
            <td></td>
            <td></td>
            <td>$0.00</td>
          </tr>
          <tr>
            <td></td>
            <td>Inv No</td>
            <td>$0.00</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>$0.00</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>$0.00</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>$0.00</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>$0.00</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div className="balance-section">
        <p>
          <strong>Ending Balance:</strong> <span>[Statement Date]</span> <span className="balance">$0.00</span>
        </p>
        <p>
          <strong>Balance Due:</strong> <span>[Date]</span>
        </p>
      </div>
    </div>
  );
};

export default StatementOfAccount;