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
          <Text style={styles.title}>ANAND SCIENTIFIC COMPANY</Text>
          <Text style={styles.subtitle}>Quotation</Text>
        </View>

        {/* Invoice Details */}
        <View style={styles.details}>
          <Text>Ref: ANAND/RR/2020-21/2569</Text>
          <Text>Date: 07-01-2021</Text>
          <Text>To: The Purchase Manager, M/s Rakas Science House, Karaikkal.</Text>
        </View>

        {/* Table */}
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>S.No</Text>
            <Text style={styles.tableHeaderText}>Particulars</Text>
            <Text style={styles.tableHeaderText}>Price Per Unit</Text>
            <Text style={styles.tableHeaderText}>GST</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>1</Text>
            <Text style={styles.tableCell}>Male Dummy</Text>
            <Text style={styles.tableCell}>5750.00</Text>
            <Text style={styles.tableCell}>18%</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>2</Text>
            <Text style={styles.tableCell}>Patient Coat</Text>
            <Text style={styles.tableCell}>1150.00</Text>
            <Text style={styles.tableCell}>18%</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>No. 123, 1st Main Road, Balamurugan Garden, Thoraipakkam, Chennai - 600 097.</Text>
          <Text>Tele: 044-43331045, 43331196 | Cell No: 98400 15868</Text>
          <Text>Email: anandscientific@yahoo.in | GST No: 33AAIPR0004K1Z0</Text>
        </View>
      </Page>
    </Document>
  );
};

export default QuotationPDF;
