import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import * as React from 'react'; 
import { Input } from '@mui/material';
import Button from '@mui/material/Button';


export default function UploadQRCode(props) {
    const { onClose, qrCode, open } = props;
    const [image, setImage] = React.useState("");

    const handleImage = (event) => {
        setImage(URL.createObjectURL(event.target.files[0])); 
    }

    const handleClose = () => {
      onClose(image);
    };
  
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Upload QR Code</DialogTitle>
        <div style={{padding: "10px", margin: "0 auto", borderRadius: "10px", fontFamily: "Arial", fontSize: "16px"}}>
        <Input color='primary' name="headshot" type="file" onChange={handleImage}  disableUnderline placeholder='Upload Your QR  Code'/>
        <br/>
        <p>Preview</p>
        <div style={{width: '245px', height: '245px', backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover'}}> </div>   <p></p>                

        <center><Button variant="contained" onClick={handleClose}>Upload QR Code</Button></center></div>
      </Dialog>
    );
  }


UploadQRCode.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    qrCode: PropTypes.string,
  };
  