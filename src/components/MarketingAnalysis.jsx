import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SendIcon from "@mui/icons-material/Send";
import "../style/MarketAnalysis.css";

const MarketAnalysis = () => {
  const [searchFields, setSearchFields] = useState({
    category: "",
    state: "",
    name: "",
    date: "",
    nextMeetingDate: "",
  });

  const [data, setData] = useState([
    { siNo: 1, date: "2023-11-01", customerName: "Customer A", category: "Tech", state: "NY", contact: "John Doe", contactNumber: "1234567890", remarks: "Follow-up needed", nextMeeting: "2023-11-20" },
    { siNo: 2, date: "2023-11-02", customerName: "Customer B", category: "Retail", state: "CA", contact: "Jane Smith", contactNumber: "0987654321", remarks: "Demo scheduled", nextMeeting: "2023-11-25" },
    // Add more mock data here as needed
  ]);

  const handleInputChange = (e) => {
    setSearchFields({
      ...searchFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    const filtered = data.filter((row) => {
      const isMatch =
        (!searchFields.category || row.category.toLowerCase().includes(searchFields.category.toLowerCase())) &&
        (!searchFields.state || row.state.toLowerCase().includes(searchFields.state.toLowerCase())) &&
        (!searchFields.name || row.customerName.toLowerCase().includes(searchFields.name.toLowerCase())) &&
        (!searchFields.date || row.date.includes(searchFields.date)) &&
        (!searchFields.nextMeetingDate || row.nextMeeting.includes(searchFields.nextMeetingDate));
      return isMatch;
    });
    setData(filtered);
  };

  const handleReset = () => {
    setSearchFields({
      category: "",
      state: "",
      name: "",
      date: "",
      nextMeetingDate: "",
    });
  };

  return (
    <div className="marketAnalysis-container">
      <h3 className="marketAnalysis-title">Market Analysis</h3>
      <div className="marketAnalysis-actions">
        <Button variant="contained" className="marketAnalysis-greeting-btn">Greeting Mail</Button>
        <Button variant="contained" className="marketAnalysis-new-client-btn">+ New Client</Button>
        <Button variant="contained" className="marketAnalysis-export-btn">Export</Button>
      </div>
      <div className="marketAnalysis-search">
        <TextField
          label="Search by Category"
          name="category"
          value={searchFields.category}
          onChange={handleInputChange}
          className="marketAnalysis-searchField"
        />
        <TextField
          label="Search by State"
          name="state"
          value={searchFields.state}
          onChange={handleInputChange}
          className="marketAnalysis-searchField"
        />
        <TextField
          label="Search by Name"
          name="name"
          value={searchFields.name}
          onChange={handleInputChange}
          className="marketAnalysis-searchField"
        />
        <TextField
          label="Search by Date"
          name="date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={searchFields.date}
          onChange={handleInputChange}
          className="marketAnalysis-searchField"
        />
        <TextField
          label="Search by Next Meeting Date"
          name="nextMeetingDate"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={searchFields.nextMeetingDate}
          onChange={handleInputChange}
          className="marketAnalysis-searchField"
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          className="marketAnalysis-search-btn"
        >
          Search
        </Button>
      </div>
      <TableContainer
        component={Paper}
        className="marketAnalysis-tableContainer"
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="marketAnalysis-tableCell">SI NO</TableCell>
              <TableCell className="marketAnalysis-tableCell">Date</TableCell>
              <TableCell className="marketAnalysis-tableCell">
                Customer Name
              </TableCell>
              <TableCell className="marketAnalysis-tableCell">
                Category
              </TableCell>
              <TableCell className="marketAnalysis-tableCell">State</TableCell>
              <TableCell className="marketAnalysis-tableCell">
                Contact Person
              </TableCell>
              <TableCell className="marketAnalysis-tableCell">
                Contact Number
              </TableCell>
              <TableCell className="marketAnalysis-tableCell">Remarks</TableCell>
              <TableCell className="marketAnalysis-tableCell">
                Next Meeting
              </TableCell>
              <TableCell className="marketAnalysis-tableCell">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.siNo}>
                <TableCell>{row.siNo}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.customerName}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.contact}</TableCell>
                <TableCell>{row.contactNumber}</TableCell>
                <TableCell>{row.remarks}</TableCell>
                <TableCell>{row.nextMeeting}</TableCell>
                <TableCell>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <SendIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MarketAnalysis;