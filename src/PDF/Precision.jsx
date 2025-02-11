import React from "react";
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 20, backgroundColor: "#fff" },
  header: { textAlign: "center", borderBottomWidth: 2, borderColor: "#000", paddingBottom: 10, marginBottom: 20 },
  title: { fontSize: 18, fontWeight: "bold" },
  subtitle: { fontSize: 14, marginTop: 5 },
  logo: { width: 60, height: 60, alignSelf: "center", marginBottom: 10 },
  details: { fontSize: 12, marginBottom: 10 },
  tableContainer: { marginTop: 10, borderWidth: 1, borderColor: "#000", width: "100%" },
  tableHeader: { flexDirection: "row", backgroundColor: "#000", padding: 5 },
  tableHeaderText: { flex: 1, fontSize: 10, textAlign: "center", fontWeight: "bold", color: "#fff" },
  tableRow: { flexDirection: "row", borderBottomWidth: 1, borderColor: "#000", padding: 5 },
  tableCell: { flex: 1, fontSize: 10, textAlign: "center" },
  footer: { textAlign: "center", fontSize: 10, marginTop: 20, borderTopWidth: 1, paddingTop: 10 },
});

const QuotationPDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Image src="/logo.png" style={styles.logo} />
          <Text style={styles.title}>The Precision Scientific Co.</Text>
          <Text style={styles.subtitle}>Quotation</Text>
        </View>

        {/* Quotation Details */}
        <View style={styles.details}>
          <Text>QTN No. 101</Text>
          <Text>Date: 21.11.2020</Text>
          <Text>To: Penna Cement Industries Ltd</Text>
          <Text>Karaikal Port, Karaikal - 609 605</Text>
          <Text>Cell No. 9384697460</Text>
        </View>

        {/* Table */}
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Sl.no</Text>
            <Text style={styles.tableHeaderText}>Chemical Name</Text>
            <Text style={styles.tableHeaderText}>Pack</Text>
            <Text style={styles.tableHeaderText}>Rate</Text>
            <Text style={styles.tableHeaderText}>Amount</Text>
            <Text style={styles.tableHeaderText}>Dis %</Text>
            <Text style={styles.tableHeaderText}>Dis.Amount</Text>
            <Text style={styles.tableHeaderText}>Qty.Amount</Text>
            <Text style={styles.tableHeaderText}>GST 18%</Text>
            <Text style={styles.tableHeaderText}>Total</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>1</Text>
            <Text style={styles.tableCell}>Di-ammonium Oxalate GR</Text>
            <Text style={styles.tableCell}>500 gm</Text>
            <Text style={styles.tableCell}>570.00</Text>
            <Text style={styles.tableCell}>570.00</Text>
            <Text style={styles.tableCell}>40%</Text>
            <Text style={styles.tableCell}>342.00</Text>
            <Text style={styles.tableCell}>342</Text>
            <Text style={styles.tableCell}>61.56</Text>
            <Text style={styles.tableCell}>403.56</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>TERMS AND CONDITIONS</Text>
          <Text>PAYMENT: 30%</Text>
          <Text>DELIVERY: AT YOUR PLACE</Text>
          <Text>PACKING AND FORWARD: EXTRA CHARGES</Text>
        </View>
      </Page>
    </Document>
  );
};

export default QuotationPDF;
