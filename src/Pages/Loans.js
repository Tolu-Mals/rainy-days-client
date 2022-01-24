import React from "react";

import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { BoxButtonList, BoxButton } from "../Styles/ButtonList.stlyed";
import { LoanContainer } from "../Styles/Loans.styled";

function createData(name, amount, interest, refund, dateTaken, dateRepayed) {
  return {name, amount, interest, refund, dateTaken, dateRepayed};
}

const rows = [
  createData("TRAVEL PALNS", "N500,000", "30.0%", "N650,000", "16 Feb, 2021", "15 Jul, 2021"),
  createData("TRAVEL PALNS", "N500,000", "30.0%", "N650,000", "16 Feb, 2021", "15 Jul, 2021"),
  createData("TRAVEL PALNS", "N500,000", "30.0%", "N650,000", "16 Feb, 2021", "15 Jul, 2021"),
  createData("TRAVEL PALNS", "N500,000", "30.0%", "N650,000", "16 Feb, 2021", "15 Jul, 2021")
];

const Loans = () => {
  return (
    <LoanContainer className="container">
      <BoxButtonList>
        <BoxButton id="new">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 0C5.8318 0 0 5.8318 0 13C0 20.1682 5.8318 26 13 26C20.1682 26 26 20.1682 26 13C26 5.8318 20.1682 0 13 0ZM13 24.5556C6.62827 24.5556 1.44444 19.3717 1.44444 13C1.44444 6.62827 6.62827 1.44444 13 1.44444C19.3717 1.44444 24.5556 6.62827 24.5556 13C24.5556 19.3717 19.3717 24.5556 13 24.5556Z"
              fill="#3779DC"
            />
            <path
              d="M17.3342 12.2786H13.7231V8.66753C13.7231 8.26858 13.3998 7.94531 13.0009 7.94531C12.6019 7.94531 12.2786 8.26858 12.2786 8.66753V12.2786H8.66753C8.26858 12.2786 7.94531 12.6019 7.94531 13.0009C7.94531 13.3998 8.26858 13.7231 8.66753 13.7231H12.2786V17.3342C12.2786 17.7332 12.6019 18.0564 13.0009 18.0564C13.3998 18.0564 13.7231 17.7332 13.7231 17.3342V13.7231H17.3342C17.7332 13.7231 18.0564 13.3998 18.0564 13.0009C18.0564 12.6019 17.7332 12.2786 17.3342 12.2786Z"
              fill="#3779DC"
            />
          </svg>
          Create new loan plan
        </BoxButton>
        <BoxButton className="target-saving target-saving-blue">
          <div>
            <div className="name">House Rent</div>
            <Chip label="APPROVED" color="primary" className="pill" />
          </div>
          <div className="amount">N1,000,000</div>
          <div className="frequency">+30.00% interest</div>
        </BoxButton>
      </BoxButtonList>

      <Typography
        variant="h5"
        component="p"
        sx={{ display: { xs: "none", md: "block" }, color: "#263959", margin: "1rem 0" }}
      >
        Loan History
      </Typography>

      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              {/* <TableRow> */}
                <TableCell>LOAN NAME</TableCell>
                <TableCell align="left">AMOUNT</TableCell>
                <TableCell align="left">INTEREST</TableCell>
                <TableCell align="left">REFUND</TableCell>
                <TableCell align="left">DATE TAKEN</TableCell>
                <TableCell align="left">DATE REPAYED</TableCell>
              {/* </TableRow> */}
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.amount}</TableCell>
                  <TableCell align="left">{row.interest}</TableCell>
                  <TableCell align="left">{row.refund}</TableCell>
                  <TableCell align="left">{row.dateTaken}</TableCell>
                  <TableCell align="left">{row.dateRepayed}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </LoanContainer>
  );
};

export default Loans;
