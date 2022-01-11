import React from 'react'
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import ImportExportIcon from '@material-ui/icons/ImportExport';
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
  
export default function ImportUser(Props) {
    const[open,setOpen]=React.useState(false);
    const [csvArray, setCsvArray] = React.useState([]);
   const setImportuser=Props.setImportuser;
    const handleOpen=()=>{setOpen(true)}
    const [csvFile, setCsvFile] = React.useState();
    const handleClose=()=>{setOpen(false)}
    const processCSV = (str, delim=';') => {
      const headers = str.slice(0,str.indexOf('\n')).split(delim);
      const rows = str.slice(str.indexOf('\n')+1).split('\n');
      const newArray = rows.map( row => {
          const values = row.split(delim);
          const eachObject = headers.reduce((obj, header, i) => {
              obj[header] = values[i];
              return obj;
          }, {})
          return eachObject;
      })
      setImportuser(newArray)
      setCsvArray(newArray)
  }
    const submit = () => {
      const file = csvFile;
      const reader = new FileReader();

      reader.onload = function(e) {
          const text = e.target.result;
          processCSV(text) // plugged in here
          //setImportuser(csvArray)
          Props.setselect(csvArray)
      }
      
      reader.readAsText(file);
  }

    return (
        <div>
            <Button color="primary" size='small' onClick={handleOpen} startIcon={<ImportExportIcon/>}>Import</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
  <div>
  <Box sx={style}>
            
                <Typography>Do You Want Import File</Typography>
                <form id='csv-form'>
            <input
                type='file'
                accept='.csv'
                id='csvFile'
                onChange={(e) => {
                    setCsvFile(e.target.files[0])
                }}
            >
            </input>
            <br/>
            <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
            <span><Button color="primary" size='small' onClick={(e) => {
                    e.preventDefault()
                    if(csvFile)submit()
                    handleClose()
                }} >Submit</Button></span>
            <span><Button color="primary" size='small' onClick={handleClose} >Cancel</Button></span>
            </div>
        </form>
            
          
          
        </Box>
  </div>
</Modal>
        </div>
    )
}
