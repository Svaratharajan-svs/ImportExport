import React from 'react'
import Modal from '@material-ui/core/Modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Box,Typography  } from '@material-ui/core';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height:550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
export default function ViewUser(Props) {
    const[open,setOpen]=React.useState(false);
    const data=Props.data;
    const Keys=Object.keys(Props.data);
    const handleOpen=()=>{setOpen(true)}
    const handleClose=()=>{setOpen(false)}
    return (
        <div>
            <Button color="primary" size='small' onClick={handleOpen} startIcon={<VisibilityIcon/>}>View</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
  <div>
  <Box sx={style}>
            
            
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div>
            <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
            <span></span>
            <span><Button color="primary" size='small' onClick={handleClose} startIcon={<CloseIcon/>}>Close</Button></span>
            </div>
            <TableContainer component={Paper}>
      <Table  size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>           
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Keys.map((key,i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {key}
              </TableCell>
              <TableCell align="right">{data[key]}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
          </Typography>
          
        </Box>
  </div>
</Modal>
        </div>
    )
}
