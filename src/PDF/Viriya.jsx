import React from "react";
import "./VIRIYA_SCIENTIFIC_COMPANY.css";

const CashInvoice = () => {
  return (
    <div className="invoice">
      <div className="invoice-content">
        {/* Header Section */}
        <div className="header">
          <h1>
            VIRIYA SCIENTIFIC COMPANY
            <span className="underline"></span>
          </h1>
          <h2>
            CASH INVOICE
            <span className="underline"></span>
          </h2>

          <div className="logo">
            <img src="/logo8111.png" alt="Logo" />
          </div>
        </div>

        {/* Invoice Details */}
        <div className="details">
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
        <table>
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
        <div className="total">
          <strong>Total: </strong>
          <span></span>
        </div>

        {/* Thank You Section */}
        <div className="thank-you">:) Thank You!</div>

        {/* Footer Section */}
        <div className="footer">
          <div className="footer-left">
            <p>Address: No.7, Balaji Nagar, Chennai - 600070</p>
          </div>
          <div className="footer-divider"></div> {/* Divider */}
          <div className="footer-right">
            <p>Contact: vscompany20@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashInvoice;
