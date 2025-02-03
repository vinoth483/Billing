import React from "react";
import "../style/Statement.css";

const StatementOfAccount = () => {
  return (
    <div className="soa-container">
      <div className="soa-header">
        <div className="soa-business-info">
          <p><em>Your Business Name</em></p>
          <p><em>Your Business Address</em></p>
          <p><em>Your Business City, State, and ZIP Code</em></p>
        </div>
        <div className="soa-statement-date">
          <p><em>Statement Date</em></p>
        </div>
        <div className="soa-business-phone">
          <p><em>Your Business Phone</em></p>
        </div>
      </div>

      <h2 className="soa-title">Statement of Account</h2>

      <div className="soa-customer-info">
        <p><em>Customer's Name</em></p>
        <p><em>Customer's Address</em></p>
        <p><em>Customer's City, State, and ZIP Code</em></p>
      </div>

      <table className="soa-table">
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
        </tbody>
      </table>

      <div className="soa-balance-section">
        <p>
          <strong>Ending Balance:</strong> <span>[Statement Date]</span> <span className="soa-balance">$0.00</span>
        </p>
        <p>
          <strong>Balance Due:</strong> <span>[Date]</span>
        </p>
      </div>
    </div>
  );
};

export default StatementOfAccount;
