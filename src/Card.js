import * as React from 'react'; 
import './style.css'; 
import { Input } from '@mui/material';
import Logo from '../src/logo.png';
import Button from '@mui/material/Button';
import UploadHeadShot from './UploadHeadShot';
import UploadQRCode from './UploadQRCode';
import html2canvas from 'html2canvas';


export default function Card(){

    const [imagePath, setImagePath] = React.useState(""); 
    const [qrCode, setQrCode] = React.useState(""); 
    const [open, setOpen] = React.useState(false); 
    const [openQR, setOpenQR] = React.useState(false); 

      const handleDownload = async () => {
            const element = document.getElementById('toDownload'),
            canvas = await html2canvas(element),
            data = canvas.toDataURL('image/jpg'),
            link = document.createElement('a');

        
            link.href = data;
            link.download = 'downloaded-image.jpg';
        
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

  }



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



    return(<>

        <div class="businesscard" id="toDownload">
            <div class="header">
                <div id="logo"><center><img src={Logo}/></center></div>
            </div>
            <div class="inputImage"  style={{width: '298px', height: '322px', backgroundImage: `url(${imagePath})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover'}}>                    
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
              <center>
                
                <Input type='text'  
                multiline maxRows={2} 
                placeholder='Name' 
                disableUnderline 
                style={{width: '400px',  textAlign: 'center', alignContent: 'center' ,background: 'rgba(255, 198, 39, 1)', fontFamily: 'Arial', color: 'rgba(0,0,0,1)', fontSize: '37px', fontWeight: 'bolder', lineHeight: '38px', wordWrap: 'break-word', padding: '2px 5px 1px 5px', textAlign: 'center', marginBottom: '12px', minWidth: '10px' }}/><br/>
              
              
              
              
               <Input type='text'  
               multiline maxRows={3}  
               placeholder='Title'
                disableUnderline 
                style={{ background: 'rgba(1, 1, 1, 1)', fontFamily: 'Arial', color: 'rgba(255,255,255,1)', fontSize: '29px', fontWeight: 'bold', lineHeight: '29px', wordWrap: 'break-word', padding: '2px 5px 1px 5px', textAlign: 'center', marginBottom: '28px' }}/> <br/></center>

               <div id="qrcode" style={{width: '245px', height: '245px', backgroundImage: `url(${qrCode})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover'}}> 

               <Button variant="text" onClick={handleQROpen} style={qrCode === '' ? {padding: '122.5px 0', display: 'block', marginRight: "auto", marginLeft: "auto"} :  {display:'none'}}> Upload QR code</Button>
      <UploadQRCode
        qrCode={qrCode}
        open={openQR}
        onClose={handleCloseQR}
        style={{padding: 20, marginBottom: '28px'}}
      />


            </div>
        </div>

        </div>

        <center><Button variant='contained' onClick={handleDownload}>Download Business Card</Button></center></>
              
    )
}