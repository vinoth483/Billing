import React from "react";
import "../style/DELIVERYCHALLAN.css";

const DeliveryChallan = () => {
  return (
    <div className="deliverychallan-container">
      {/* Header Section */}
      <div className="deliverychallan-header">
        <div className="deliverychallan-title">
          <h1>DELIVERY CHALLAN</h1>
        </div>
        <div className="deliverychallan-original">
          <p>ORIGINAL FOR CONSIGNEE</p>
        </div>
      </div>

      {/* Info Section */}
      <div className="deliverychallan-info">
        <div className="deliverychallan-from">
          <p><strong>From:</strong></p>
        </div>
        <div className="deliverychallan-info-right">
          <p>No: <span className="deliverychallan-underline">________________________</span></p>
          <p>Date: <span className="deliverychallan-underline">________________________</span></p>
          <p>GST No: <span className="deliverychallan-underline">________________________</span></p>
        </div>
      </div>

      {/* Consignee and GST Section */}
      <div className="deliverychallan-details">
        <div className="deliverychallan-consignee">
          <p><strong>Consignee:</strong></p>
          <p>
            M/s: _____________________________<br />
            _________________________________<br />
            _________________________________
          </p>
          <p>GST No: </p>
        </div>
        <div className="deliverychallan-gst">
          <p><strong>Place of Supply:</strong> ___________________</p>
          <p><strong>State Code:</strong> _______________________</p>
          <p><strong>If Inter State:</strong> ______________________<br />
            _________________________________<br />
            _________________________________
          </p>
        </div>
      </div>

      {/* Table Section */}
      <table className="deliverychallan-table">
        <thead>
          <tr>
            <th>QUANTITY / UNIT</th>
            <th>DESCRIPTION OF GOODS</th>
            <th>HSN CODE</th>
            <th>RATE / PER</th>
            <th>VALUE / AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10 pcs</td>
            <td>Product A</td>
            <td>1234</td>
            <td>₹50</td>
            <td>₹500</td>
          </tr>
          <tr>
            <td>5 pcs</td>
            <td>Product B</td>
            <td>5678</td>
            <td>₹100</td>
            <td>₹500</td>
          </tr>
          <tr>
            <td>3 pcs</td>
            <td>Product C</td>
            <td>91011</td>
            <td>₹200</td>
            <td>₹600</td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "right", fontWeight: "bold" }}>
              Total Taxable Value of Goods / Services:
            </td>
            <td>₹1600</td>
          </tr>
          <tr>
            <td colSpan="5" style={{ textAlign: "left", fontStyle: "italic" }}>
              In words: _________________________________________________
            </td>
          </tr>
        </tbody>
      </table>

      {/* Footer Section */}
      <div className="deliverychallan-footer">
        <div className="deliverychallan-note">
          <p>
            If difference in Quantity, Quality, and Rate found, please notify
            within 24 hours. Else no claim will be entertained.
          </p>
        </div>
        <div className="deliverychallan-signatures">
          <p>Prepared by: ____________________________</p>
          <p>Received by: ____________________________</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryChallan;
