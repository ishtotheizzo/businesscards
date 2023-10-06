import * as React from 'react'; 
import './style.css'; 
import { Input } from '@mui/material';
import Logo from '../src/logo.png';
import Button from '@mui/material/Button';
import UploadHeadShot from './UploadHeadShot';
import UploadQRCode from './UploadQRCode';
import About from './About';
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
      console.log(data)


      link.href = data;
      link.download = 'downloaded-image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

}

const handleReset = () => {
  setImagePath(''); 
  setQrCode(''); 
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



    return(

      <>

      <div id='toDownload'>
        <div className="businesscard">

          



            <div class="header">
                <div className='logo' style={{alignContent: 'center', margin: '0 auto', textAlign: 'center'}}><img src={Logo}/></div>
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
              <div style={{marginBottom: '28px'}}>
      <span contentEditable  style={{background: 'rgba(255, 198, 39, 1)', fontFamily: 'Arial', color: 'rgba(0,0,0,1)', fontSize: '37px', fontWeight: 'bolder', padding: '2px', lineHeight: '40px', wordBreak: 'break-word'}} role='textarea'>Enter Name</span>
      <br></br><span style={{height: '1px'}}/><br></br><br></br>
      <br></br><br></br><br/><span contentEditable   style={{ background: 'rgba(1, 1, 1, 1)', fontFamily: 'Arial', color: 'rgba(255,255,255,1)', fontSize: '29px', fontWeight: 'bold', padding: '2px', lineHeight: '32px',wordBreak: 'break-word' }} role='textarea'>Enter Title</span>

      </div>
                </center>

               <div id="qrcode" style={{backgroundImage: `url(${qrCode})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover'}}> 

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
        
        </div>

        <center><Button variant='contained' onClick={handleDownload} style={{marginRight: '12px'}}>Download Business Card</Button> 
        <Button variant='outlined' onClick={handleReset}>Reset or Make Another</Button></center>



</>

              
    )
}