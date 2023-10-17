import logo from './logo.svg';
import './style.css';
import Card from './Card';
import *  as React from 'react'; 
import Welcome from './Welcome'; 
import { Button } from '@mui/material';
import html2canvas from 'html2canvas';





function App() {

  let width, height; 

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


  return ( <>
      <Welcome></Welcome>
      <div style={{width: '430px', height: '932px', marginBottom: '150px'}} id="toDownload">
        <Card style={{marginBottom: '100px'}} />
      </div>

    <center><Button variant='contained' onClick={handleDownload}>Save As</Button> </center>
    </>
  );
}

export default App;
