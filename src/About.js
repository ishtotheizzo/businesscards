import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from 'react-textarea-autosize';
import { Input } from '@mui/material';

export default function About() {
  return (
    <div>
        <Input type='text'  
        multiline maxRows={4} 
        placeholder='Name' 
        disableUnderline 
        style={{width: '400px',background: 'rgba(255, 198, 39, 1)', fontFamily: 'Arial', color: 'rgba(0,0,0,1)', fontSize: '37px', fontWeight: 'bolder', padding: '2px' }}/><br/>
      
      
      
      
       <Input type='text'  
       multiline maxRows={3}  
       placeholder='Title'
        disableUnderline 
        style={{ background: 'rgba(1, 1, 1, 1)', fontFamily: 'Arial', color: 'rgba(255,255,255,1)', fontSize: '29px', fontWeight: 'bold', padding: '2px'}}/> <br/>
   {/* <TextareaAutosize minRows={1} id="name"/> */}
    </div>
  );
}