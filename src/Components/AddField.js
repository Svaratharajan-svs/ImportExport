import React from 'react'
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import { Box,Typography  } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
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
  
export default function AddField(Props) {
    const[open,setOpen]=React.useState(false);
    const [value, setValue] = React.useState('text');
    const [name, setName] = React.useState('');
    function createData(name, type) {
      return { name, type};
    }
    const addfield=()=>{
      Props.setNewfield([...Props.newfield,createData(name,value)])
      console.log(Props.newfield)
      handleClose();
    }
    const handleOpen=()=>{setOpen(true)}
    const handleClose=()=>{setOpen(false)}
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (
        <div>
            <Button color="primary" size='small' onClick={handleOpen} startIcon={<AddIcon/>}>AddField</Button>
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
          <TextField  label="name" variant="outlined" id="name" type="text" onChange={(event)=>setName(event.target.value)} />
          </Typography>
          
          <FormControl component="fieldset">
          <FormLabel component="legend">Field Type</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel value="text" control={<Radio />} label="text" />
            <FormControlLabel value="date" control={<Radio />} label="date" />
            <FormControlLabel value="number" control={<Radio />} label="number" />
            <FormControlLabel value="email" control={<Radio />} label="email" />
          </RadioGroup>
        </FormControl>
          <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
            <span><Button color="primary" size='small' onClick={()=>{addfield()}} >Add</Button></span>
            <span><Button color="primary" size='small' onClick={handleClose} >Cancel</Button></span>
            </div>
        </Box>
  </div>
</Modal>
        </div>
    )
}
