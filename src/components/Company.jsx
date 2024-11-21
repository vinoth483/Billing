import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import "../style/new.css";

const Company = () => {
  const initialCompanies = [
    {
      siNo: 1,
      companyName: "ABC Corp",
      contactNumber: "1234567890",
      gstin: "22ABCDE1234F1Z5",
      bankDetails: "Bank A, Account No: 12345",
      theme: "Default",
    },
    {
      siNo: 2,
      companyName: "XYZ Ltd",
      contactNumber: "9876543210",
      gstin: "33ABCDE5678G2H5",
      bankDetails: "Bank B, Account No: 67890",
      theme: "Dark",
    },
  ];

  return (
    <div className="company">
      <header className="company-header">
        <h3>Market Analysis</h3>
        <Button
          variant="contained"
          className="company-add-button"
          sx={{
            backgroundColor: " #2b356bd3 ",
            color: "white",
            width: "400px",
           
          }} 
        >
          + Company
        </Button>
      </header>

      <div className="company-search">
        <TextField
          variant="outlined"
          placeholder="Search by Name"
          className="company-search-input"
          size="small"
        />
        <Button
          variant="contained"
          className="company-search-button"
          sx={{
            backgroundColor: " #2b356bd3 ",
            color: "white",
            width: "150px",
            paddingBottom: "10px"
          }} 
        >
          Search
        </Button>
      </div>

      <TableContainer component={Paper} className="company-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SI NO</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>GSTIN</TableCell>
              <TableCell>Bank Details</TableCell>
              <TableCell>Theme Select</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {initialCompanies.map((company) => (
              <TableRow key={company.siNo}>
                <TableCell>{company.siNo}</TableCell>
                <TableCell>{company.companyName}</TableCell>
                <TableCell>{company.contactNumber}</TableCell>
                <TableCell>{company.gstin}</TableCell>
                <TableCell>{company.bankDetails}</TableCell>
                <TableCell>{company.theme}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Company;
