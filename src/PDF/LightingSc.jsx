import React from "react";
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: "Helvetica",
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
    borderBottomWidth: 2,
    borderColor: "#000",
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  companyInfo: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: "center",
  },
  logo: {
    width: 100,
    height: 50,
    alignSelf: "center",
    marginBottom: 10,
  },
  invoiceDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    fontSize: 12,
  },
  table: {
    width: "100%",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    borderBottomWidth: 1,
    borderColor: "#000",
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  tableCell: {
    flex: 1,
    padding: 5,
    fontSize: 12,
    textAlign: "center",
  },
  footer: {
    marginTop: 20,
    fontSize: 12,
    textAlign: "left",
  },
});

const ProformaInvoice = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>LIGHTNING SCIENTIFIC INDUSTRY</Text>
        <Text style={styles.companyInfo}>
          29/29, Reddy Street, Korattur, Chennai\nEmail: LSI95@outlook.com\nContact No: 8124095141\nGST: 33AAVIPH6182R32W
        </Text>
        <Image style={styles.logo} src="/images/logo.png" />
        <Text style={styles.title}>Proforma Invoice</Text>
      </View>

      <View style={styles.invoiceDetails}>
        <View>
          <Text>Bill to:</Text>
          <Text>Client Name: Brenda Hill</Text>
          <Text>Address Line</Text>
        </View>
        <View>
          <Text>Inv No: LSI0025423</Text>
          <Text>Date: 24/12/2024</Text>
          <Text>P.O. No: 2400585000</Text>
          <Text>Quote No: 0076866698</Text>
        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableCell}>S.No</Text>
          <Text style={styles.tableCell}>Qty</Text>
          <Text style={styles.tableCell}>Item #</Text>
          <Text style={styles.tableCell}>Description</Text>
          <Text style={styles.tableCell}>Unit Price</Text>
          <Text style={styles.tableCell}>Total</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>1</Text>
          <Text style={styles.tableCell}>5</Text>
          <Text style={styles.tableCell}>LSI1234</Text>
          <Text style={styles.tableCell}>Laboratory Microscope</Text>
          <Text style={styles.tableCell}>₹15,000</Text>
          <Text style={styles.tableCell}>₹75,000</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text>Subtotal: ₹2,36,000</Text>
        <Text>GST (18%): ₹42,480</Text>
        <Text><strong>Total: ₹2,78,480</strong></Text>
        <Text>Bank Details:</Text>
        <Text>Name: LIGHTNING SCIENTIFIC INDUSTRY</Text>
        <Text>Bank Name: Kotak Mahindra Bank</Text>
        <Text>A/C: 8124095141</Text>
        <Text>IFSC Code: KKBK0008525</Text>
      </View>
    </Page>
  </Document>
);

export default ProformaInvoice;
