import React from "react";
import "./Quotation.css";

const Quotation = () => {
  return (
    <div className="quotation">
      <div className="header">
        <h1>LIGHTNING</h1>
        <h1>SCIENTIFIC INDUSTRY</h1>
      </div>

      <div className="details">
        <p><strong>Quotation No :</strong> LSI2056</p>
        <p><strong>Date :</strong> 22.11.2024</p>
      </div>

      <div className="recipient">
        <p><strong>To,</strong></p>
        <p>Western Thomson India Ltd</p>
        <p>B-18/W, Sipcot Industrial Complex, Gummidipoondi,</p>
        <p>Tamil Nadu, India - 601201</p>
      </div>

      <h2>1. HOT AIR OVEN</h2>

      <table className="spec-table">
        <tbody>
          <tr>
            <td><strong>Temperature range</strong></td>
            <td>Ambient to 250°C</td>
          </tr>
          <tr>
            <td><strong>Temperature controller</strong></td>
            <td>Digital temperature controller</td>
          </tr>
          <tr>
            <td><strong>Temperature sensor</strong></td>
            <td>PT100</td>
          </tr>
          <tr>
            <td><strong>Inner chamber</strong></td>
            <td>Stainless Steel 304</td>
          </tr>
          <tr>
            <td><strong>External cabinet</strong></td>
            <td>Stainless Steel 304</td>
          </tr>
          <tr>
            <td><strong>Door</strong></td>
            <td>Insulated door with door latch</td>
          </tr>
          <tr>
            <td><strong>Insulation</strong></td>
            <td>Glass wool insulation</td>
          </tr>
          <tr>
            <td><strong>Trays</strong></td>
            <td>Stainless steel trays</td>
          </tr>
          <tr>
            <td><strong>Standard fittings</strong></td>
            <td>ON/OFF switch, Load indicator</td>
          </tr>
          <tr>
            <td><strong>Power supply</strong></td>
            <td>220V 50Hz Single Phase</td>
          </tr>
          <tr>
            <td><strong>Power</strong></td>
            <td>15 Amps</td>
          </tr>
          <tr>
            <td><strong>Additional Features</strong></td>
            <td>Fan for uniform Circulation</td>
          </tr>
        </tbody>
      </table>

      <table className="price-table">
        <thead>
          <tr>
            <th>Chamber Size (H x W x D) MM (Approx)</th>
            <th>Trays Nos</th>
            <th>Price Rs</th>
            <th>GST %</th>
            <th>Total Rs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>605 x 605 x 605</td>
            <td>3</td>
            <td>86,000</td>
            <td>18</td>
            <td>101,480.00</td>
          </tr>
        </tbody>
      </table>

      <div className="footer">
        <h3>LIGHTNING SCIENTIFIC INDUSTRY</h3>
        <p>29/29, Reddy Street, Korattur, Chennai-600080</p>
        <p>Contact: lsi95@outlook.com, +91 81240 95141</p>
        <p><strong>GST:</strong> 33AIVPH6182R3ZW</p>
      </div>
    </div>
  );
};

export default Quotation;
