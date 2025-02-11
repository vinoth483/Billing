import React from "react";
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 20, backgroundColor: "#fff" },
  header: { textAlign: "center", borderBottomWidth: 2, borderColor: "#006600", paddingBottom: 10, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "#006600" },
  subtitle: { fontSize: 18, marginTop: 5, color: "#006600" },
  logo: { width: 60, height: 60, marginBottom: 10, alignSelf: "center" },
  details: { fontSize: 14, marginBottom: 10 },
  tableContainer: { marginTop: 10, borderWidth: 1, borderColor: "#000", width: "100%" },
  tableHeader: { flexDirection: "row", backgroundColor: "#006600", padding: 5 },
  tableHeaderText: { flex: 1, fontSize: 14, textAlign: "center", fontWeight: "bold", color: "#fff" },
  tableRow: { flexDirection: "row", borderBottomWidth: 1, borderColor: "#000", padding: 5 },
  tableCell: { flex: 1, fontSize: 12, textAlign: "center" },
  footer: { textAlign: "center", fontSize: 12, marginTop: 20, borderTopWidth: 1, paddingTop: 10 },
});

const QuotationPDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Image src="/logo8111.png" style={styles.logo} />
          <Text style={styles.title}>VIRIYA SCIENTIFIC COMPANY</Text>
          <Text style={styles.subtitle}>Quotation</Text>
        </View>

        {/* Quotation Details */}
        <View style={styles.details}>
          <Text>Ref: VIRIYA/10076</Text>
          <Text>Date: 23-09-2024</Text>
          <Text>To: Dr. Ram Kumar, HOD of Physics Department</Text>
          <Text>C Kandaswami Naidu College, Anna Nagar, Chennai - 600 102</Text>
        </View>

        {/* Table */}
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>S.No</Text>
            <Text style={styles.tableHeaderText}>Product</Text>
            <Text style={styles.tableHeaderText}>Unit Price</Text>
            <Text style={styles.tableHeaderText}>Quantity</Text>
            <Text style={styles.tableHeaderText}>Amount</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>1</Text>
            <Text style={styles.tableCell}>Air Wedge stand</Text>
            <Text style={styles.tableCell}>500</Text>
            <Text style={styles.tableCell}>1 No</Text>
            <Text style={styles.tableCell}>500.00</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>2</Text>
            <Text style={styles.tableCell}>Ammeter</Text>
            <Text style={styles.tableCell}>490</Text>
            <Text style={styles.tableCell}>1 No</Text>
            <Text style={styles.tableCell}>490.00</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>3</Text>
            <Text style={styles.tableCell}>Physical Balance</Text>
            <Text style={styles.tableCell}>7540</Text>
            <Text style={styles.tableCell}>1 No</Text>
            <Text style={styles.tableCell}>7540.00</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>Contact: +91 8124095141 | Email: vscompany20@gmail.com</Text>
        </View>
      </Page>
    </Document>
  );
};

export default QuotationPDF;
