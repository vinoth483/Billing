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
  Select,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../style/Invoice.css";

const Invoice = () => {
  const [open, setOpen] = useState(false);
  const [openExportDialog, setOpenExportDialog] = useState(false);
  const [searchFields, setSearchFields] = useState({
    description: "",
    brand: "",
    hsn: "",
    rate: "",
    category: "",
    gst: "",
    company: "",
    type: "",
  });
  const [filteredData, setFilteredData] = useState([]);
  const [companyOptions, setCompanyOptions] = useState([]);
  const [typeOptions, setTypeOptions] = useState([]);
  const [newInvoice, setNewInvoice] = useState({
    description: "",
    brand: "",
    qty: "",
    category: "",
    hsn: "",
    gst: "",
    rate: "",
    company: "",
    type: "",
  });
  const [exportOptions, setExportOptions] = useState({
    fromDate: "",
    toDate: "",
    exportType: "csv",
  });

  useEffect(() => {
    // Fetch or initialize company and type options
    setCompanyOptions(["Company 1", "Company 2", "Company 3"]);
    setTypeOptions(["Type 1", "Type 2", "Type 3"]);

    // Initialize your data here
    setFilteredData([
      {
        description: "Product 1",
        brand: "Brand A",
        qty: 10,
        category: "Category 1",
        hsn: "1234",
        gst: "18%",
        rate: "100",
        company: "Company 1",
        type: "Type 1",
      },
      {
        description: "Product 2",
        brand: "Brand B",
        qty: 5,
        category: "Category 2",
        hsn: "5678",
        gst: "12%",
        rate: "150",
        company: "Company 2",
        type: "Type 2",
      },
    ]);
  }, []);

  const handleSearch = () => {
    // Implement search filter logic here
  };

  const handleReset = () => {
    setSearchFields({
      description: "",
      brand: "",
      hsn: "",
      rate: "",
      category: "",
      gst: "",
      company: "",
      type: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchFields({ ...searchFields, [name]: value });
  };

  const handleAddInvoiceClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNewInvoiceChange = (e) => {
    const { name, value } = e.target;
    setNewInvoice({ ...newInvoice, [name]: value });
  };

  const handleSaveInvoice = () => {
    // Implement save logic here
    setOpen(false);
  };

  const handleExportDialogClose = () => {
    setOpenExportDialog(false);
  };

  const handleExportOptionChange = (e) => {
    const { name, value } = e.target;
    setExportOptions({ ...exportOptions, [name]: value });
  };

  const handleInvoiceExport = () => {
    // Implement export logic here
    setOpenExportDialog(false);
  };

  return (
    <div className="invoice-dashboard">
      <h3>Search Invoice</h3>
      <div className="invoice-action-section">
        <div className="invoice-action-buttons">
          <label className="invoice-common-btn invoice-add-material-btn" onClick={handleAddInvoiceClick}>
            + Add Invoice
          </label>
          <label className="invoice-common-btn invoice-add-material-btn" onClick={() => setOpenExportDialog(true)}>
            Export Invoice
          </label>
        </div>

        <div className="search-buttons">
          <IconButton className="backspace-btn" onClick={handleReset} aria-label="back">
            <ArrowBackIcon />
          </IconButton>
          <input
            className="search-input"
            type="text"
            name="description"
            placeholder="Description"
            value={searchFields.description}
            onChange={handleInputChange}
          />
          <input
            className="search-input"
            type="text"
            name="brand"
            placeholder="Brand"
            value={searchFields.brand}
            onChange={handleInputChange}
          />
          <input
            className="search-input"
            type="text"
            name="hsn"
            placeholder="HSN"
            value={searchFields.hsn}
            onChange={handleInputChange}
          />
          <input
            className="search-input"
            type="text"
            name="rate"
            placeholder="Rate"
            value={searchFields.rate}
            onChange={handleInputChange}
          />
          <input
            className="search-input"
            type="text"
            name="category"
            placeholder="Category"
            value={searchFields.category}
            onChange={handleInputChange}
          />
          <input
            className="search-input"
            type="text"
            name="gst"
            placeholder="GST"
            value={searchFields.gst}
            onChange={handleInputChange}
          />
          <button className="main-search-btn" onClick={handleSearch}>Search</button>
        </div>

        <Dialog open={openExportDialog} onClose={handleExportDialogClose}>
          <DialogTitle>Export Options</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              label="From Date"
              type="date"
              name="fromDate"
              value={exportOptions.fromDate}
              onChange={handleExportOptionChange}
              margin="dense"
            />
            <TextField
              fullWidth
              label="To Date"
              type="date"
              name="toDate"
              value={exportOptions.toDate}
              onChange={handleExportOptionChange}
              margin="dense"
            />
            <FormControl fullWidth margin="dense">
              <InputLabel>Export Type</InputLabel>
              <Select name="exportType" value={exportOptions.exportType} onChange={handleExportOptionChange}>
                <MenuItem value="csv">CSV</MenuItem>
                <MenuItem value="pdf">PDF</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleExportDialogClose} color="primary">Cancel</Button>
            <Button onClick={handleInvoiceExport} color="primary">Export</Button>
          </DialogActions>
        </Dialog>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {[
                "SI No",
                "Description",
                "Brand",
                "Qty",
                "Category",
                "HSN",
                "GST",
                "Rate",
                "Company",
                "Type",
              ].map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={index}>
                {Object.values(row).map((value, idx) => (
                  <TableCell key={idx}>{value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Invoice</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={newInvoice.description}
            onChange={handleNewInvoiceChange}
            margin="dense"
          />
          <TextField
            fullWidth
            label="Brand"
            name="brand"
            value={newInvoice.brand}
            onChange={handleNewInvoiceChange}
            margin="dense"
          />
          <TextField
            fullWidth
            label="Quantity"
            name="qty"
            value={newInvoice.qty}
            onChange={handleNewInvoiceChange}
            margin="dense"
          />
          <TextField
            fullWidth
            label="Category"
            name="category"
            value={newInvoice.category}
            onChange={handleNewInvoiceChange}
            margin="dense"
          />
          <TextField
            fullWidth
            label="HSN"
            name="hsn"
            value={newInvoice.hsn}
            onChange={handleNewInvoiceChange}
            margin="dense"
          />
          <TextField
            fullWidth
            label="GST"
            name="gst"
            value={newInvoice.gst}
            onChange={handleNewInvoiceChange}
            margin="dense"
          />
          <TextField
            fullWidth
            label="Rate"
            name="rate"
            value={newInvoice.rate}
            onChange={handleNewInvoiceChange}
            margin="dense"
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Company</InputLabel>
            <Select name="company" value={newInvoice.company} onChange={handleNewInvoiceChange}>
              {companyOptions.map((company) => (
                <MenuItem key={company} value={company}>
                  {company}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel>Type</InputLabel>
            <Select name="type" value={newInvoice.type} onChange={handleNewInvoiceChange}>
              {typeOptions.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleSaveInvoice} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Invoice;
