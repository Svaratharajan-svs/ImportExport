import React from 'react'
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import { Box,Typography  } from '@material-ui/core';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
     width: 600,
    minHeight:550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
export default function AddUser(Props) {
    const[open,setOpen]=React.useState(false);
    const handleOpen=()=>{setOpen(true)}
    const[fields,setFields]=React.useState({"name":"","email":"","telephone":"","routes":"","joindate":"","comments":""
  });
    const[nfields,setNfields]=React.useState({});
    //var oldfields=fields;
    const data=Props.newfield;
    //const Keys=Object.keys(Props.data);
    const handleClose=()=>{setOpen(false)}
    const handleChange=(event)=>{
      const name=event.target.id;
      fields[name]=event.target.value;
      setFields({...fields})
    }
    const handleChange2=(event)=>{
      const name=event.target.id;
      nfields[name]=event.target.value;
      setNfields({...nfields})
    }
    const save=()=>{
      fields["extrafield"]=nfields
      console.log(fields)
    }
    return (
        <div>
            <Button color="primary" size='small' onClick={handleOpen} startIcon={<AddIcon/>}>AddUser</Button>
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
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form  noValidate autoComplete="off" style={{display:'flex',flexDirection:'column'}}>
            
            <div style={{padding:'10px',width:'400px'}}>
              <TextField  label="name" variant="outlined" id="name" type="text" onChange={handleChange}/>
            </div>
            <div style={{padding:'10px'}}>
              <TextField  label="email" variant="outlined" id="email" type="text"  onChange={handleChange}/>
            </div>
            <div style={{padding:'10px'}}>
              <TextField  label="telephone" variant="outlined" id="telephone" type="text" onChange={handleChange} />
            </div>
            <div style={{padding:'10px'}}>
              <TextField  label="routes" variant="outlined" id="routes" type="text" onChange={handleChange} />
            </div>
            <div style={{padding:'10px'}}>
              <TextField  label="Joindate" variant="outlined" id="joindate" type="date" onChange={handleChange}/>
            </div>
            <div style={{padding:'10px'}}>
              <TextField  label="Comments" variant="outlined" id="comments" type="text" onChange={handleChange}/>
            </div>
            {
              data.map((field,key)=>(<div key={key}>
                <div style={{padding:'10px'}}>
              <TextField  label={field["name"]} id={field["name"]} type={field["type"]} variant="outlined" onChange={handleChange2}/>
            </div>
              </div>))
            }
          </form>
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
