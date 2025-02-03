import React from "react";
import "../style/viriya.css";

const CashInvoice = () => {
  return (
    <div className="cash-invoice">
      <div className="cash-invoice-content">
        {/* Header Section */}
        <div className="cash-invoice-header">
          <h1>
            VIRIYA SCIENTIFIC COMPANY
            <span className="cash-invoice-underline"></span>
          </h1>
          <h2>
            CASH INVOICE
            <span className="cash-invoice-underline"></span>
          </h2>

          <div className="cash-invoice-logo">
            <img src="/logo8111.png" alt="Logo" />
          </div>
        </div>

        {/* Invoice Details */}
        <div className="cash-invoice-details">
          <div>
            <strong>Invoice To:</strong>
            <br />
            <br />
          </div>
          <div>
            <strong>Date:</strong>
            <br />
            <br />
          </div>
        </div>

        {/* Table Section */}
        <table className="cash-invoice-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Description</th>
              <th>Qty</th>
              <th>Rate</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        {/* Total Section */}
        <div className="cash-invoice-total">
          <strong>Total: </strong>
          <span></span>
        </div>

        {/* Thank You Section */}
        <div className="cash-invoice-thank-you">:) Thank You!</div>

        {/* Footer Section */}
        <div className="cash-invoice-footer">
          <div className="cash-invoice-footer-left">
            <p>Address: No.7, Balaji Nagar, Chennai - 600070</p>
          </div>
          <div className="cash-invoice-footer-divider"></div> {/* Divider */}
          <div className="cash-invoice-footer-right">
            <p>Contact: vscompany20@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashInvoice;
