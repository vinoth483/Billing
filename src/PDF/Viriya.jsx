import React from "react";
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";

// Corrected and properly structured PDF Styles
const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: "#ffe9e2", // Light background
  },

  // Header Section
  header: {
    textAlign: "center",
    borderBottomWidth: 2,
    borderColor: "#2c6536",
    borderStyle: "solid",
    paddingBottom: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textTransform: "uppercase",
    color: "#2c6536",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginTop: 5,
    textTransform: "uppercase",
    color: "#2c6536",
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  logo: {
    width: 60,
    height: 60,
  },

  // Invoice Details Section
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 14,
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: "#2c6536",
    borderStyle: "solid",
  },

  // Table Section
  tableContainer: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#2c6536",
    borderStyle: "solid",
    width: "100%",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#2c6536",
    paddingVertical: 5,
  },
  tableHeaderText: {
    flex: 1,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    paddingVertical: 5,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#2c6536",
    borderStyle: "solid",
    paddingVertical: 5,
  },
  tableCell: {
    flex: 1,
    fontSize: 12,
    textAlign: "center",
  },

  // Total Section
  totalSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
    padding: 5,
    borderWidth: 2,
    borderColor: "#2c6536",
    borderStyle: "solid",
    fontSize: 16,
    fontWeight: "bold",
  },

  // Footer Section
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 2,
    borderColor: "#2c6536",
    borderStyle: "solid",
    paddingTop: 10,
    marginTop: 20,
    fontSize: 12,
  },
  footerText: {
    fontSize: 12,
  },
  footerDivider: {
    height: "100%",
    width: 2,
    backgroundColor: "#2c6536",
    marginHorizontal: 20,
  },

  // Thank You Section
  thankYou: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
    marginTop: 10,
  },
  thankYouLine: {
    width: "100%",
    height: 2,
    backgroundColor: "#2c6536",
    marginTop: 5,
  },
});

const CashInvoice = ({
  companyName = "VIRIYA SCIENTIFIC COMPANY",
  invoiceTo = "Client XYZ",
  date = "02-Feb-2025",
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>{companyName}</Text>
          <Text style={styles.subtitle}>CASH INVOICE</Text>
          <View style={styles.logoContainer}>
            <Image src="../assets/logo8111.png" style={styles.logo} />
          </View>
        </View>

        {/* Invoice Details */}
        <View style={styles.details}>
          <Text>Invoice To: {invoiceTo}</Text>
          <Text>Date: {date}</Text>
        </View>

        {/* Table Section */}
        <View style={styles.tableContainer}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>S.No</Text>
            <Text style={styles.tableHeaderText}>Description</Text>
            <Text style={styles.tableHeaderText}>Qty</Text>
            <Text style={styles.tableHeaderText}>Rate</Text>
            <Text style={styles.tableHeaderText}>Price</Text>
          </View>
          {/* Table Rows (Dynamic Data) */}
          {[1, 2].map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{index + 1}</Text>
              <Text style={styles.tableCell}>Item {index + 1}</Text>
              <Text style={styles.tableCell}>1</Text>
              <Text style={styles.tableCell}>100</Text>
              <Text style={styles.tableCell}>100</Text>
            </View>
          ))}
        </View>

        {/* Total Section */}
        <View style={styles.totalSection}>
          <Text>Total: 200</Text>
        </View>

        {/* Thank You Section */}
        <View>
          <Text style={styles.thankYou}>Thank You!</Text>
          <View style={styles.thankYouLine} />
        </View>

        {/* Footer Section */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Address: No.7, Balaji Nagar, Chennai - 600070</Text>
          <View style={styles.footerDivider} />
          <Text style={styles.footerText}>Contact: vscompany20@gmail.com</Text>
        </View>
      </Page>
    </Document>
  );
};

export default CashInvoice;
