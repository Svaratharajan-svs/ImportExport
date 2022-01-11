import React from 'react'
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import { Box,Typography} from '@material-ui/core';
import { CSVLink } from "react-csv";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
export default function Export(Props) {
    const[open,setOpen]=React.useState(false);
    const[file,setfile]=React.useState('Clue_Mediator_Report.csv');
    const handleOpen=()=>{setOpen(true)}
    const handleClose=()=>{setOpen(false)}
    //prepare data
    const headers=Props.headers.map((key)=>({"label" : key,"key" :  key}))
    const csvReport = {
      data: Props.data,
      headers: headers,
      filename: file
    };
    return (
        <div>
            <Button color="primary" size='small' onClick={handleOpen} startIcon={<ImportExportIcon/>}>Export</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
  <div>
  <Box sx={style}>
            
                <Typography>Do You Want Export Data</Typography>
                <Typography>
                  <input value={file} onChange={(e)=>setfile(e.target.value)}/>
                </Typography>
                
            <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
            <span><CSVLink {...csvReport}><Button color="primary" size='small' onClick={handleClose} >Conform</Button></CSVLink></span>
            <span><Button color="primary" size='small' onClick={handleClose} >Cancel</Button></span>
            </div>
          
          
        </Box>
  </div>
</Modal>
        </div>
    )
}
