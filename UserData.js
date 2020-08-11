import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function UserData() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(response => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Employee Name</TableCell>
            <TableCell align="right">Employee Salary&nbsp;</TableCell>
            <TableCell align="right">Employee Age&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData && userData.data && userData.data.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="right">{row.employee_name}</TableCell>
              <TableCell align="right">{row.employee_salary}</TableCell>
              <TableCell align="right">{row.employee_age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
