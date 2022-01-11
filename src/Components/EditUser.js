import React from 'react'
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import { Box,Typography  } from '@material-ui/core';
//import { keys } from '@material-ui/core/styles/createBreakpoints';
//import { keys } from '@material-ui/core/styles/createBreakpoints';
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
  
export default function EditUser(Props) {
    const[open,setOpen]=React.useState(false);
    const handleOpen=()=>{setOpen(true)}
    //const[nfields,setNfields]=React.useState({});
    const[fields,setFields]=React.useState(Props.data);
    const handleChange=(event)=>{
      const name=event.target.id;
      fields[name]=event.target.value;
      setFields({...fields})
      
    }
  
    const handleClose=()=>{setOpen(false)}
    const Keys=Object.keys(Props.data );
    //const Keys2=Object.keys(Props.data["extrafield"]);
    const save=()=>{
       console.log(fields)
       handleClose()
    }
   // const[newdata,setNewdata]=React.useState(Props.data);
    return (
        <div>
            <Button color="primary" size='small' onClick={handleOpen} startIcon={<EditIcon/>}>Edit</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
  <div>
  <Box sx={style}>
            
            <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
            <span></span>
            <span><Button color="primary" size='small' onClick={handleClose} startIcon={<CloseIcon/>}>Close</Button></span>
            </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {Keys.map((key)=>{ if(key!="extrafield"){ return (<div key={key}>
            <div style={{padding:'10px'}}>
            <TextField label={key} variant="outlined" id={key} defaultValue={Props.data[key]} onChange={handleChange}/>
            </div>
          </div>)
          
        }
        else{
          return(<div key={key}>
          </div>)
        }
        
        
        })}
          </Typography>
          <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
            <span><Button color="primary" size='small' onClick={save} >Save</Button></span>
            <span><Button color="primary" size='small' onClick={handleClose} >Cancel</Button></span>
            </div>
        </Box>
  </div>
</Modal>
        </div>
    )
}
