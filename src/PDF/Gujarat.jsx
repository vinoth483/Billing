import React from "react";
import "./GUJARAT.css"; // Import your CSS file

const TaxInvoice = () => {
  return (
    <div className="invoice-container">
      {/* Header Section */}
      <header className="invoice-header">
        <div className="logo-section">
          <h1>GUJARAT FREIGHT TOOLS</h1>
          <div className="company-info">
            <div className="info-container">
              <p>Manufacturing & Supply of Precision Press Tool & Room Component</p>
            </div>
          </div>

          <div className="address-container">
            <p>64, Ashok Industrial Estate</p>
            <p>New Cloth Market</p>
            <p>Ahmedabad - 38542</p>
          </div>
          <div className="contact-info">
            <p>Tel: 079-25820309 </p>
            <p>
              Web: <a href="http://www.gftools.com" target="_blank" rel="noopener noreferrer">www.gftools.com</a>
            </p>
            <p>
              Email: <a href="mailto:info@gftools.com">info@gftools.com</a>
            </p>
          </div>
          <p className="gstn">
            <span className="gstin-label">GSTIN:</span> 24DHE7487RE5RT4
          </p>
        </div>
        <div className="logo-right">
          <img src="RAKAS B_300xx.png" alt="Company Logo" className="logo" />
        </div>
      </header>

      {/* Invoice Title */}
      <div className="invoice-title">
        <h2>TAX INVOICE</h2>
        <p>ORIGINAL FOR RECIPIENT</p>
      </div>

      {/* Customer Details */}
      <section className="customer-details">
        <div className="left">
          <h3>Customer Details</h3>
          <p><strong>M/S:</strong> Kevin Motors</p>
          <p><strong>Address:</strong> Chandani Chowk, New Delhi, Opposite Statue, New Delhi, Delhi - 110014</p>
          <p><strong>Phone:</strong> 9372346666</p>
          <p><strong>GSTIN:</strong> 07AAOLC1206D1ZG</p>
          <p><strong>Place of Supply:</strong> Delhi (07)</p>
        </div>
        <div className="border">
          <div className="left">
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
          <div className="right">
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
      <table className="item-table">
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
        <tfoot>
          <tr>
            <td colSpan="3" style={{ textAlign: "right" }}>Total</td>
            <td>2.00 PCS</td>
            <td>-</td>
            <td>1154.00</td>
            <td>9.00</td>
            <td>103.86</td>
            <td>1257.86</td>
          </tr>
        </tfoot>
      </table>

      {/* Summary Section */}
      <div className="container">
        <section className="summary">
          <div className="left-summary">
            <p><strong>Total in Words</strong></p>
            <p>ONE THOUSAND TWO HUNDRED AND FIFTY-EIGHT RUPEES ONLY</p>
          </div>
          <div className="right-summary">
            <table>
              <tbody>
                <tr><td>Taxable Amount:</td><td>1,154.00</td></tr>
                <tr><td>Add : IGST:</td><td>103.86</td></tr>
                <tr><td>Total Tax:</td><td>103.86</td></tr>
                <tr><td><strong>Total Amount After Tax:</strong></td><td><strong>1,258.00</strong></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Bank Details Section */}
        <section className="bank-details">
          <h3>Bank Details</h3>
          <p><strong>Bank Name:</strong> State Bank of India</p>
          <p><strong>Branch Name:</strong> RAF CAMP</p>
          <p><strong>Bank Account Number:</strong> 200000004512</p>
          <p><strong>IFSC Code:</strong> SBIN00000488</p>
        </section>

        {/* Terms and Conditions Section */}
        <section className="terms">
          <h3>Terms and Conditions</h3>
          <ol>
            <li>Subject to Ahmedabad Jurisdiction.</li>
            <li>Our responsibility ceases as soon as the goods leave our premises.</li>
            <li>Goods once sold will not be taken back.</li>
            <li>Delivery ex-premises.</li>
          </ol>
        </section>

        {/* Footer Section */}
        <footer>
          <p className="signature"><strong>Authorized Signature</strong></p>
          <p>This is a computer-generated invoice. No signature required.</p>
        </footer>
      </div>
    </div>
  );
};

export default TaxInvoice;
