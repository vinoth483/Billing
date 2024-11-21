import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "../style/Quotation.css";

const Quotation = () => {
  const initialData = [
    { siNo: 1, quoteNumber: "Q001", company: "Company 1", quoteDate: "2024-11-01", quoteType: "School" },
    { siNo: 2, quoteNumber: "Q002", company: "Company 2", quoteDate: "2024-11-05", quoteType: "College" },
    { siNo: 3, quoteNumber: "Q003", company: "Company 3", quoteDate: "2024-11-10", quoteType: "Company" },
  ];

  const [searchFields, setSearchFields] = useState({
    number: "",
    company: "",
    type: "",
    date: "",
  });

  const [filteredData, setFilteredData] = useState(initialData);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newQuotation, setNewQuotation] = useState({
    quoteNumber: "",
    company: "",
    quoteDate: "",
    quoteType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddQuotationChange = (e) => {
    const { name, value } = e.target;
    setNewQuotation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    const filtered = initialData.filter((row) => {
      return (
        (!searchFields.number || row.quoteNumber.includes(searchFields.number)) &&
        (!searchFields.company || row.company.toLowerCase().includes(searchFields.company.toLowerCase())) &&
        (!searchFields.type || row.quoteType.toLowerCase().includes(searchFields.type.toLowerCase())) &&
        (!searchFields.date || row.quoteDate.includes(searchFields.date))
      );
    });
    setFilteredData(filtered);
  };

  const handleReset = () => {
    setSearchFields({
      number: "",
      company: "",
      type: "",
      date: "",
    });
  };

  const handleAddQuotation = () => {
    const newEntry = {
      siNo: filteredData.length + 1,
      ...newQuotation,
    };
    setFilteredData([...filteredData, newEntry]);
    setOpenAddDialog(false);
    setNewQuotation({ quoteNumber: "", company: "", quoteDate: "", quoteType: "" });
  };

  return (
    <div className="quotation-page">
      <h3>Quotation List</h3>

      <div className="quotation-header-section">
      <div className="quotation-action-buttons">
  <Button
    className="action-btn"
    variant="contained"
    color="primary"
    startIcon={<AddCircleOutlineIcon />}
    onClick={() => setOpenAddDialog(true)}
  >
    Add Quotation
  </Button>
  <Button
    className="action-btn"
    variant="outlined"
    color="secondary"
    onClick={() => alert("Exporting...")}
  >
    Export
  </Button>
</div>


        <div className="quotation-search-section">
          <IconButton className="backspace-btn" onClick={handleReset} aria-label="back">
            <ArrowBackIcon />
          </IconButton>
          <input
            className="search-input"
            type="text"
            name="number"
            placeholder="Quote Number"
            value={searchFields.number}
            onChange={handleInputChange}
          />
          <input
            className="search-input"
            type="text"
            name="company"
            placeholder="Company"
            value={searchFields.company}
            onChange={handleInputChange}
          />
          <input
            className="search-input"
            type="text"
            name="type"
            placeholder="Quote Type"
            value={searchFields.type}
            onChange={handleInputChange}
          />
          <input
            className="search-input"
            type="text"
            name="date"
            placeholder="Quote Date"
            value={searchFields.date}
            onChange={handleInputChange}
          />
          <button className="main-search-btn" onClick={handleSearch}>Search</button>
        </div>
      </div>

      <TableContainer component={Paper} className="quotation-table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sl. No</TableCell>
              <TableCell>Quote Number</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Quote Date</TableCell>
              <TableCell>Quote Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row.siNo}>
                <TableCell>{row.siNo}</TableCell>
                <TableCell>{row.quoteNumber}</TableCell>
                <TableCell>{row.company}</TableCell>
                <TableCell>{row.quoteDate}</TableCell>
                <TableCell>{row.quoteType}</TableCell>
              </TableRow>
            ))}
            {filteredData.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openAddDialog} onClose={() => setOpenAddDialog(false)} className="quotation-dialog">
        <DialogTitle>Add New Quotation</DialogTitle>
        <DialogContent className="quotation-dialog-content">
          <TextField
            label="Quote Number"
            name="quoteNumber"
            value={newQuotation.quoteNumber}
            onChange={handleAddQuotationChange}
            variant="outlined"
            fullWidth
            margin="dense"
          />
          <TextField
            label="Company"
            name="company"
            value={newQuotation.company}
            onChange={handleAddQuotationChange}
            variant="outlined"
            fullWidth
            margin="dense"
          />
          <TextField
            label="Quote Date"
            name="quoteDate"
            value={newQuotation.quoteDate}
            onChange={handleAddQuotationChange}
            variant="outlined"
            fullWidth
            margin="dense"
            type="date"
          />
          <TextField
            label="Quote Type"
            name="quoteType"
            value={newQuotation.quoteType}
            onChange={handleAddQuotationChange}
            variant="outlined"
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddQuotation} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Quotation;