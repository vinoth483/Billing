import React from "react";
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";

// General styling
const styles = StyleSheet.create({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Arial, sans-serif",
  },

  // Invoice container styling
  rakasInvoiceContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: 800,
    margin: "auto",
    padding: 20,
  },

  // Header styling
  rakasHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 2,
    borderColor: "#000",
    paddingBottom: 10,
  },
  rakasHeaderTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  rakasLogo: {
    maxWidth: 100,
    height: "auto",
  },
  rakasInvoiceTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "right",
    flexGrow: 1,
  },

  // Invoice Info Section
  rakasInvoiceInfo: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  rakasBilledBy: {
    width: "32%",
    padding: 10,
  },
  rakasBilledTo: {
    width: "32%",
    padding: 10,
  },
  rakasInvoiceDetails: {
    width: "32%",
    padding: 10,
  },
  rakasBilledByH2: {
    fontSize: 16,
    marginBottom: 10,
  },

  // Table Styling
  rakasTable: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: 20,
  },
  rakasTableTh: {
    border: "1px solid #ddd",
    padding: 8,
    textAlign: "left",
    fontSize: 14,
    backgroundColor: "#f9f9f9",
    fontWeight: "bold",
  },
  rakasTableTd: {
    border: "1px solid #ddd",
    padding: 8,
    textAlign: "left",
    fontSize: 14,
  },

  // Footer Section
  rakasFooter: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 20,
  },
  rakasTerms: {
    width: "50%",
  },
  rakasTotals: {
    width: "50%",
    paddingLeft: 20,
  },
  rakasTotalsTable: {
    width: "100%",
    borderCollapse: "collapse",
  },
  rakasBankDetails: {
    width: "100%",
    marginTop: 20,
  },
  rakasFooterDetails: {
    width: "50%",
  },
  rakasPageFooter: {
    width: "100%",
    borderTopWidth: 1,
    marginTop: 20,
    paddingTop: 10,
    fontSize: 8,
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
  },
  rakasPageNumber: {
    position: "absolute",
    right: 0,
    textAlign: "right",
    width: "auto",
    fontSize: 8,
  },
  rakasNote: {
    width: "100%",
    fontStyle: "italic",
    fontSize: "3px",
    marginTop: 10,
    marginLeft: "-90px",
  },
});

const InvoicePDF = ({ companyName, invoiceTo, date }) => {
  console.log("InvoicePDF is rendered", { companyName, invoiceTo, date });

  return (
    <Document>
      <Page style={styles.rakasInvoiceContainer}>
        <View style={styles.rakasHeader}>
          <View style={styles.rakasHeaderTop}>
            <View style={styles.rakasLogo}>
              <Image src="../assets/RAKAS B_300xx.png" style={styles.rakasLogo} />
            </View>
            <Text style={styles.rakasInvoiceTitle}>Invoice</Text>
          </View>
        </View>

        <View style={styles.rakasInvoiceInfo}>
          <View style={styles.rakasBilledBy}>
            <Text>Billed By</Text>
            <Text>RAKAS SCIENCE HOUSE</Text>
            <Text>No.1, Ram Nagar, Opp Housing Board, Nehru Nagar, Karaikal, Puducherry, India - 609605</Text>
            <Text>GSTIN: 34CQSP55457K1ZT</Text>
            <Text>PAN: GQSP55457K</Text>
          </View>

          <View style={styles.rakasBilledTo}>
            <Text>Billed To</Text>
            <Text>ALAM ALLOYS</Text>
            <Text>R.S.No:122/4A, Surakudi Village, Thirunallar, Karaikal, Puducherry, India - 34</Text>
            <Text>GSTIN: 34AAPF5658P1ZP</Text>
            <Text>PAN: AAPF5658P</Text>
          </View>

          <View style={styles.rakasInvoiceDetails}>
            <Text>Invoice No: 00218</Text>
            <Text>Invoice Date: Jan 07, 2025</Text>
            <Text>Due Date: Jan 22, 2025</Text>
            <Text>Country of Supply: India</Text>
            <Text>Place of Supply: Puducherry (34)</Text>
          </View>
        </View>

        <View style={styles.rakasTable}>
          <View style={styles.rakasTableTh}>
            <Text style={styles.rakasTableTh}>Item</Text>
            <Text style={styles.rakasTableTh}>HSN/SAC</Text>
            <Text style={styles.rakasTableTh}>GST Rate</Text>
            <Text style={styles.rakasTableTh}>Quantity</Text>
            <Text style={styles.rakasTableTh}>Rate</Text>
            <Text style={styles.rakasTableTh}>Discount</Text>
            <Text style={styles.rakasTableTh}>Amount</Text>
            <Text style={styles.rakasTableTh}>CGST</Text>
            <Text style={styles.rakasTableTh}>SGST</Text>
            <Text style={styles.rakasTableTh}>Total</Text>
          </View>

          <View style={styles.rakasTableTd}>
            <Text style={styles.rakasTableTd}>Nitric Acid 2.5Lts(Q)</Text>
            <Text style={styles.rakasTableTd}>2808</Text>
            <Text style={styles.rakasTableTd}>18%</Text>
            <Text style={styles.rakasTableTd}>1</Text>
            <Text style={styles.rakasTableTd}>₹2,139.00</Text>
            <Text style={styles.rakasTableTd}>25%</Text>
            <Text style={styles.rakasTableTd}>₹1,604.25</Text>
            <Text style={styles.rakasTableTd}>₹144.38</Text>
            <Text style={styles.rakasTableTd}>₹144.38</Text>
            <Text style={styles.rakasTableTd}>₹1,893.01</Text>
          </View>

          <View style={styles.rakasTableTd}>
            <Text style={styles.rakasTableTd}>Perchloric Acid 500ML(Q)</Text>
            <Text style={styles.rakasTableTd}>2811</Text>
            <Text style={styles.rakasTableTd}>18%</Text>
            <Text style={styles.rakasTableTd}>5</Text>
            <Text style={styles.rakasTableTd}>₹3,061.00</Text>
            <Text style={styles.rakasTableTd}>25%</Text>
            <Text style={styles.rakasTableTd}>₹11,478.75</Text>
            <Text style={styles.rakasTableTd}>₹1,033.09</Text>
            <Text style={styles.rakasTableTd}>₹1,033.09</Text>
            <Text style={styles.rakasTableTd}>₹13,544.93</Text>
          </View>
        </View>

        <View style={styles.rakasFooter}>
          <Text style={styles.rakasTerms}>Terms and Conditions</Text>
          <Text style={styles.rakasBankDetails}>This is an electronically generated document, no signature is required.</Text>
        </View>

        <View style={styles.rakasPageFooter}>
          <Text style={styles.rakasFooterDetails}>Page 1 of 2</Text>
          <Text style={styles.rakasPageNumber}>Invoice No: 00218</Text>
        </View>

        <View style={styles.rakasNote}>
          <Text>Note: The pricing is valid for 30 days from the date of quotation.</Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePDF;
