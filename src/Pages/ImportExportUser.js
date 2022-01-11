import React from 'react';
import ImportUser from '../Components/ImportUser';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

import Export from '../Components/Export';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:"grey",
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
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
export default function ImportExportUser(Props) {
  const classes = useStyles();
  var Keys=  Object.keys(Props.importuser[0] || [])
  const [state, setState] = React.useState([]);
  const[isslect,setselect]=React.useState([{}]);
  //const Keys=Object.keys(Props.importuser[0] | []);


  //handlechange
  const handleChange = (event) => {
    if(event.target.checked){
    setState([...state, event.target.name ]);}
    else{
      const temp=state.filter((value)=>value!=event.target.name)
      setState(temp)
    }
  };
  return (
    
    <div>
      <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
    <span></span>
    <span  style={{display:'flex'}}>
      <span style={{paddingRight:'20px'}}><ImportUser isslect={isslect} setselect={setselect} importuser={Props.importuser} setImportuser={Props.setImportuser}/></span>
      <span style={{paddingRight:'20px'}}><Export headers={state}  data={Props.importuser}/></span>
  </span>
    </div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow styles={{}}>
            
            {Keys.map((key,i)=>(<StyledTableCell align="right" key={i}>{key}<Checkbox onChange={handleChange} name={key}/></StyledTableCell>))}
          </TableRow>
        </TableHead>
        <TableBody>
        {Props.importuser.map((row,i)=>(<StyledTableRow key={i}>
          {Keys.map((k,a)=>(<StyledTableCell align="right" key={a}>{row[k]}</StyledTableCell>))}
            
            </StyledTableRow>))}
            
      
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
