import React from 'react'
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Box,Typography} from '@material-ui/core';
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
  
export default function DeleteUser() {
    const[open,setOpen]=React.useState(false);
    const handleOpen=()=>{setOpen(true)}
    const handleClose=()=>{setOpen(false)}
    return (
        <div>
            <Button color="primary" size='small' onClick={handleOpen} startIcon={<DeleteIcon/>}>Delete</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
  <div>
  <Box sx={style}>
            
                <Typography>Do You Want Delete</Typography>
                
            <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
            <span><Button color="primary" size='small' onClick={handleClose} >Conform</Button></span>
            <span><Button color="primary" size='small' onClick={handleClose} >Cancel</Button></span>
            </div>
          
          
        </Box>
  </div>
</Modal>
        </div>
    )
}
