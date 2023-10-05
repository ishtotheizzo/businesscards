import * as React from 'react'; 
import './style.css'; 
import { Input } from '@mui/material';
import Logo from '../src/logo.png';
import Button from '@mui/material/Button';
import UploadHeadShot from './UploadHeadShot';
import UploadQRCode from './UploadQRCode';
import * as htmlToImage from 'html-to-image';
import About from './About';


export default function Card(){

    const [imagePath, setImagePath] = React.useState(""); 
    const [qrCode, setQrCode] = React.useState(""); 
    const [open, setOpen] = React.useState(false); 
    const [openQR, setOpenQR] = React.useState(false); 

      const handleDownload = (event) => {
        htmlToImage.toPng(document.getElementById('toDownload'))
        .then(function (dataUrl) {
          const createEl = document.createElement('a');
          createEl.href = dataUrl;
          createEl.download = "download-this-canvas";
          createEl.click();
          createEl.remove();
        });
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

        <div className="businesscard" id="toDownload">

          {/*this is the header section the image showing the DT logo*/}
            <div class="header">
                <div id="logo"><center><img src={Logo}/></center></div>
            </div>
          <div style={{display: 'block', marginRight: 'auto', marginLeft: 'auto', width: '68%'}}><div className="inputImage"  style={{backgroundImage: `url(${imagePath})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover'}}>                    
            <Button variant="text" onClick={handleClickOpen} style={imagePath === '' ? {padding: '149px 0', display: 'block', marginRight: "auto", marginLeft: "auto"} :  {display:'none'}}> Upload Headshot</Button>
      <UploadHeadShot
        imagePath={imagePath}
        open={open}
        onClose={handleClose}
        style={{padding: 20}}
      />

          </div></div>
                    <br/>

          
            <div className="about">
              <center>
                <About style={{marginBottom: "28px"}}/>
                </center>

               <div id="qrcode" style={{width: '245px', height: '245px', backgroundImage: `url(${qrCode})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover'}}> 

               <Button variant="text" onClick={handleQROpen} style={qrCode === '' ? {padding: '122.5px 0', display: 'block', marginRight: "auto", marginLeft: "auto"} :  {display:'none'}}> Upload QR code</Button>
        <UploadQRCode
          qrCode={qrCode}
          open={openQR}
          onClose={handleCloseQR}
          style={{padding: 20, marginBottom: '28px'}}
        />
        <center><Button variant='contained' onClick={handleDownload}>Download Business Card</Button></center>


            </div>
        </div>

        </div>

              
    </>)
}