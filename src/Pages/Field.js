import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddField from '../Components/AddField';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, type) {
  return { name, type};
}

const rows = [
  createData('name','text'),
  createData('email','email'),
  createData('telephone','number'),
  createData('routes','text'),
  createData('joindate','date'),
  createData('comments','text')
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function FieldTables(Props) {
  const classes = useStyles();
  const deleteitem=(id)=>{
    const temp=[...Props.newfield]
    temp.splice(id,1)
    return temp
  }
  return (
      <>
      <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
          <span></span>
        <span><AddField newfield={Props.newfield} setNewfield={Props.setNewfield}/></span>
      </div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Field</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"><Button color="primary" disabled size='small' startIcon={<DeleteIcon/>}>Delete</Button></StyledTableCell>
             
            </StyledTableRow>
          ))}
          {Props.newfield.map((row,i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"><Button color="primary" size='small' onClick={()=>Props.setNewfield(deleteitem(i))} startIcon={<DeleteIcon/>}>Delete</Button></StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
