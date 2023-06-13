import * as React from 'react'; 
import './style.css'; 
import { Input } from '@mui/material';
import Logo from '../src/logo.png';
import Button from '@mui/material/Button';
import UploadHeadShot from './UploadHeadShot';
import UploadQRCode from './UploadQRCode';


export default function Card(){

    const [imagePath, setImagePath] = React.useState(""); 
    const [qrCode, setQrCode] = React.useState(""); 
    const [open, setOpen] = React.useState(false); 
    const [openQR, setOpenQR] = React.useState(false); 


    const handleImage = (event) => {
        setImagePath(URL.createObjectURL(event.target.files[0])); 
        console.log(imagePath)
    }
    const handleClickOpen = () => {
        setOpen(true);
        console.log(open)
      };
    
      const handleClose = (value) => {
        setOpen(false);
        setImagePath(value);
        console.log(open)
      };

      const handleCloseQR = (value) => { 
        setOpenQR(false); 
        setQrCode(value); 
      }

     const handleQROpen = () => {

        setOpenQR(true); 
     }



    return(

        <div class="businesscard">
            <div class="header">
                <div id="logo"><center><img src={Logo}/></center></div>
            </div>
            <div class="inputImage" style={{width: '298px', height: '322px', backgroundImage: `url(${imagePath})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover'}}>                    
            <Button variant="text" onClick={handleClickOpen} style={imagePath === '' ? {padding: '149px 0', display: 'block', marginRight: "auto", marginLeft: "auto"} :  {display:'none'}}> Upload Headshot</Button>
      <UploadHeadShot
        imagePath={imagePath}
        open={open}
        onClose={handleClose}
        style={{padding: 20}}
      />

          </div>
                    <br/>

          
            <div class="about">
               <Input type='text'  multiline maxRows={2} placeholder='Your Name Here' disableUnderline style={{ background: 'rgba(255, 198, 39, 1)', width: '320px', fontFamily: 'Arial', color: 'rgba(0,0,0,1)', fontSize: '37px', fontWeight: 'bolder', lineHeight: '38px', wordWrap: 'break-word', padding: '2px 5px 1px 5px', textAlign: 'center', marginBottom: '1px' }}/><br/>
               <Input type='text'  multiline maxRows={3} placeholder='Your Title Here' disableUnderline style={{ background: 'rgba(1, 1, 1, 1)', width: '350px', fontFamily: 'Arial', color: 'rgba(255,255,255,1)', fontSize: '29px', fontWeight: 'bold', lineHeight: '29px', wordWrap: 'break-word', padding: '2px 5px 1px 5px', textAlign: 'center', marginBottom: '28px' }}/> <br/>

               <div id="qrcode" style={{width: '245px', height: '245px', backgroundImage: `url(${qrCode})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover'}}> 

               <Button variant="text" onClick={handleQROpen} style={qrCode === '' ? {padding: '122.5px 0', display: 'block', marginRight: "auto", marginLeft: "auto"} :  {display:'none'}}> Upload QR code</Button>
      <UploadQRCode
        qrCode={qrCode}
        open={openQR}
        onClose={handleCloseQR}
        style={{padding: 20}}
      />


            </div>
        </div>

        </div>

              
    )
}