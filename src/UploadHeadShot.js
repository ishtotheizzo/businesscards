import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import * as React from 'react'; 
import { Input } from '@mui/material';
import Button from '@mui/material/Button';


export default function UploadHeadShot(props) {
    const { onClose, imagePath, open } = props;
    const [image, setImage] = React.useState("");

    const handleImage = (event) => {
        setImage(URL.createObjectURL(event.target.files[0])); 
    }

    const handleClose = () => {
      onClose(image);
    };
  
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Upload Image</DialogTitle>
        <div style={{padding: "10px", margin: "0 auto", borderRadius: "10px", fontFamily: "Arial", fontSize: "16px"}}>
        <Input color='primary' name="headshot" type="file" onChange={handleImage}  disableUnderline placeholder='Upload Your Photo'/>
        <br/>
        <p>The size of your headshot will be 298px by 322px. This will automatically crop it from the center of the image. <br/>
        Preview </p>
        <div  style={{width: '298px', height: '322px', backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover'}}> </div>   <p></p>                

        <center><Button variant="contained" onClick={handleClose}>Upload Headshot</Button></center></div>
      </Dialog>
    );
  }


  UploadHeadShot.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    imagePath: PropTypes.string,
  };
  