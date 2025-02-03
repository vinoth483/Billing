import React from "react";
import "../style/GUJARAT.css"; // Import your CSS file

const TaxInvoice = () => {
  return (
    <div className="gujarat-container">
      {/* Header Section */}
      <header className="gujarat-header">
        <div className="gujarat-logo-section">
          <h1>GUJARAT FREIGHT TOOLS</h1>
          <div className="gujarat-company-info">
            <div className="gujarat-info-container">
              <p>Manufacturing & Supply of Precision Press Tool & Room Component</p>
            </div>
          </div>

          <div className="gujarat-address-container">
            <p>64, Ashok Industrial Estate</p>
            <p>New Cloth Market</p>
            <p>Ahmedabad - 38542</p>
          </div>
          <div className="gujarat-contact-info">
            <p>Tel: 079-25820309 </p>
            <p>
              Web: <a href="http://www.gftools.com" target="_blank" rel="noopener noreferrer">www.gftools.com</a>
            </p>
            <p>
              Email: <a href="mailto:info@gftools.com">info@gftools.com</a>
            </p>
          </div>
          <p className="gujarat-gstn">
            <span className="gujarat-gstin-label">GSTIN:</span> 24DHE7487RE5RT4
          </p>
        </div>
        <div className="gujarat-logo-right">
          <img src="RAKAS B_300xx.png" alt="Company Logo" className="gujarat-logo" />
        </div>
      </header>

      {/* Invoice Title */}
      <div className="gujarat-title">
        <h2>TAX INVOICE</h2>
        <p>ORIGINAL FOR RECIPIENT</p>
      </div>

      {/* Customer Details */}
      <section className="gujarat-customer-details">
        <div className="gujarat-left">
          <h3>Customer Details</h3>
          <p><strong>M/S:</strong> Kevin Motors</p>
          <p><strong>Address:</strong> Chandani Chowk, New Delhi, Opposite Statue, New Delhi, Delhi - 110014</p>
          <p><strong>Phone:</strong> 9372346666</p>
          <p><strong>GSTIN:</strong> 07AAOLC1206D1ZG</p>
          <p><strong>Place of Supply:</strong> Delhi (07)</p>
        </div>
        <div className="gujarat-border">
          <div className="gujarat-left">
            <table>
              <tbody>
                <tr><td><strong>Invoice No.:</strong></td><td>GST112020</td></tr>
                <tr><td><strong>Invoice Date:</strong></td><td>04-Mar-2020</td></tr>
                <tr><td><strong>Challan No.:</strong></td><td>865</td></tr>
                <tr><td><strong>Challan Date:</strong></td><td>03-Mar-2020</td></tr>
                <tr><td><strong>P.O. No.:</strong></td><td>66</td></tr>
                <tr><td><strong>Delivery Date:</strong></td><td>04-Mar-2020</td></tr>
              </tbody>
            </table>
          </div>
          <div className="gujarat-right">
            <table>
              <tbody>
                <tr><td><strong>Reverse Charge:</strong></td><td>No</td></tr>
                <tr><td><strong>L.R. No.:</strong></td><td>958</td></tr>
                <tr><td><strong>E-Way No.:</strong></td><td>EWB58464584</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Items Table */}
      <table className="gujarat-item-table">
        <thead>
          <tr>
            <th scope="col" rowSpan="2">Sr. No.</th>
            <th scope="col" rowSpan="2">Name of Product / Service</th>
            <th scope="col" rowSpan="2">HSN / SAC</th>
            <th scope="col" rowSpan="2">Qty</th>
            <th scope="col" rowSpan="2">Rate</th>
            <th scope="col" rowSpan="2">Taxable Value</th>
            <th scope="col" colSpan="2">IGST</th>
            <th scope="col" rowSpan="2">Total</th>
          </tr>
          <tr>
            <th scope="col">%</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Automatic Saw</td>
            <td>8202</td>
            <td>1.00 PCS</td>
            <td>586.00</td>
            <td>586.00</td>
            <td>9.00</td>
            <td>52.74</td>
            <td>638.74</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Stanley Hammer<br /><small>Claw Hammer Steel Shaft (Black and Chrome)</small></td>
            <td>8205</td>
            <td>1.00 PCS</td>
            <td>568.00</td>
            <td>568.00</td>
            <td>9.00</td>
            <td>51.12</td>
            <td>619.12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaxInvoice;
