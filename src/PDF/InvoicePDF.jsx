import React from "react";
import "./invoice2.css"; // Ensure this CSS file is in the same folder or update the path
import logo from "./RAKAS B_300xx.png"; // Update the path to match your project structure

const Invoice = () => {
  return (
    <div className="invoice-container">
      <header>
        <div className="header-top">
          <div className="logo">
            <img src={logo} alt="Company Logo" />
          </div>
          <div className="invoice-title">
            <h1>Invoice</h1>
          </div>
        </div>
      </header>
      <main>
        <div className="invoice-info">
          <div className="billed-by">
            <h2>Billed By</h2>
            <p><strong>RAKAS SCIENCE HOUSE</strong></p>
            <p>No.1, Ram Nagar, Opp Housing Board, Nehru Nagar, Karaikal, Puducherry, India - 609605</p>
            <p>GSTIN: 34CQSP55457K1ZT</p>
            <p>PAN: GQSP55457K</p>
          </div>
          <div className="billed-to">
            <h2>Billed To</h2>
            <p><strong>ALAM ALLOYS</strong></p>
            <p>R.S.No:122/4A, Surakudi Village, Thirunallar, Karaikal, Puducherry, India - 34</p>
            <p>GSTIN: 34AAPF5658P1ZP</p>
            <p>PAN: AAPF5658P</p>
          </div>
          <div className="invoice-details">
            <h2>Invoice Details</h2>
            <p>Invoice No: <strong>00218</strong></p>
            <p>Invoice Date: <strong>Jan 07, 2025</strong></p>
            <p>Due Date: <strong>Jan 22, 2025</strong></p>
            <p>Country of Supply: <strong>India</strong></p>
            <p>Place of Supply: <strong>Puducherry (34)</strong></p>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>HSN/SAC</th>
              <th>GST Rate</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Discount</th>
              <th>Amount</th>
              <th>CGST</th>
              <th>SGST</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nitric Acid 2.5Lts(Q)</td>
              <td>2808</td>
              <td>18%</td>
              <td>1</td>
              <td>₹2,139.00</td>
              <td>25%</td>
              <td>₹1,604.25</td>
              <td>₹144.38</td>
              <td>₹144.38</td>
              <td>₹1,893.01</td>
            </tr>
            <tr>
              <td>Perchloric Acid 500ML(Q)</td>
              <td>2811</td>
              <td>18%</td>
              <td>5</td>
              <td>₹3,061.00</td>
              <td>25%</td>
              <td>₹11,478.75</td>
              <td>₹1,033.09</td>
              <td>₹1,033.09</td>
              <td>₹13,544.93</td>
            </tr>
          </tbody>
        </table>
      </main>
      <footer>
        <div className="terms">
          <h3>Terms and Conditions</h3>
          <p>1. The pricing is valid till 30 days from the date of quotation.</p>
          <p>2. The products that we have suggested are as per our knowledge, unless specified.</p>
          <p>3. It is user's responsibility to verify that the specifications and the pack sizes are acceptable for their intended use.</p>
        </div>
        <div className="totals">
          <table>
            <tr>
              <td>Sub Total</td>
              <td>₹38,858.00</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>(₹7,485.50)</td>
            </tr>
            <tr>
              <td>Amount</td>
              <td>₹31,372.50</td>
            </tr>
            <tr>
              <td>CGST</td>
              <td>₹2,823.53</td>
            </tr>
            <tr>
              <td>SGST</td>
              <td>₹2,823.53</td>
            </tr>
            <tr>
              <td>Total (INR)</td>
              <td>₹37,020.00</td>
            </tr>
          </table>
        </div>
        <div className="bank-details">
          <h3>Bank Details</h3>
          <p>Account Name: RAKAS SCIENCE HOUSE</p>
          <p>Account Number: 50200057690672</p>
          <p>IFSC: HDFC0002403</p>
          <p>Bank: HDFC Bank</p>
          <p>Account Type: Current</p>
        </div>
        <div className="page-footer">
          <div className="footer-details">
            <p><strong>Invoice No:</strong> 00218</p>
            <p><strong>Invoice Date:</strong> 07 Jan 2025</p>
            <p><strong>Billed To:</strong> ALAM ALLOYS</p>
          </div>
          <div className="page-number">
            <p>Page 1 of 2</p>
          </div>
          <div className="note">
            <p>This is an electronically generated document, no signature is required.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Invoice;
