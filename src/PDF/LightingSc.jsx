import React from "react";
import "../style/lightingSC.css";

const ProformaInvoice = () => {
  return (
    <div className="proforma-wrapper">
      <header>
        <div className="proforma-header">
          <h1>LIGHTNING SCIENTIFIC INDUSTRY</h1>
        </div>
        <div className="proforma-header-sub">
          <div className="proforma-address">
            <p>
              29/29, Reddy street, Korattur, Chennai<br />
              Email: LSI95@outlook.com<br />
              Contact No: 8124095141<br />
              GST: 33AAVIPH6182R32W
            </p>
          </div>
          <div className="proforma-logo">
            <img
              src="/images/WhatsApp_Image_2025-01-26_at_19.26.48_0e0167e5-removebg-preview.png"
              alt="LSI Logo"
              className="proforma-logo-img"
            />
          </div>
          <div className="proforma-title">
            <h2>Proforma Invoice</h2>
          </div>
        </div>
      </header>

      <section className="proforma-details">
        <div className="proforma-bill-to">
          <p>
            <strong>Bill to:</strong>
            <br />
            Client Name
            <br />
            Brenda Hill
            <br />
            Address Line
          </p>
        </div>
        <div className="proforma-info">
          <p>Inv No: LSI0025423</p>
          <p>Date: 24/12/2024</p>
          <p>P.O. No: 2400585000</p>
          <p>Quote No: 0076866698</p>
        </div>
      </section>

      <table className="proforma-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Qty</th>
            <th>Item #</th>
            <th>Description</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>5</td>
            <td>LSI1234</td>
            <td>Laboratory Microscope</td>
            <td>₹15,000</td>
            <td>₹75,000</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4"></td>
            <td style={{ textAlign: "right" }}>Subtotal</td>
            <td>₹2,36,000</td>
          </tr>
          <tr>
            <td colSpan="4"></td>
            <td style={{ textAlign: "right" }}>GST (18%)</td>
            <td>₹42,480</td>
          </tr>
          <tr>
            <td colSpan="4"></td>
            <td style={{ textAlign: "right" }}><strong>Total</strong></td>
            <td><strong>₹2,78,480</strong></td>
          </tr>
        </tfoot>
      </table>

      <section className="proforma-bank-details">
        <p><strong>Bank Details:</strong></p>
        <p>Name: LIGHTNING SCIENTIFIC INDUSTRY</p>
        <p>Bank Name: Kotak Mahindra Bank</p>
        <p>A/C: 8124095141</p>
        <p>IFSC Code: KKBK0008525</p>
      </section>

      <footer className="proforma-terms">
        <h3>Terms & Conditions</h3>
        <p>GST: Extra as applicable</p>
        <p>Installation: Not required. The equipment is plug-and-use.</p>
        <p>Payment: 70% advance along with the purchase order (PO), 30% prior to dispatch.</p>
        <p>Warranty: 13 months against manufacturing defects.</p>
        <p>Delivery Period: 10 working days from the receipt of the advance payment and PO.</p>
        <p>Scope of Supply: All electrical and civil work will be arranged by the customer.</p>
        <p>Quotation Validity: 30 days from the date of this offer.</p>
      </footer>
    </div>
  );
};

export default ProformaInvoice;