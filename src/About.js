import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from 'react-textarea-autosize';
import { Input } from '@mui/material';

export default function About() {
  return (
    <div style={{marginBottom: '28px'}}>
      <span contentEditable  style={{background: 'rgba(255, 198, 39, 1)', fontFamily: 'Arial', color: 'rgba(0,0,0,1)', fontSize: '37px', fontWeight: 'bolder', padding: '2px', lineHeight: '40px', wordBreak: 'break-word'}} role='textarea'>Enter Name</span>
      <br></br><span style={{height: '1px'}}/><br></br><br></br>
      <br></br><br></br><span contentEditable   style={{ background: 'rgba(1, 1, 1, 1)', fontFamily: 'Arial', color: 'rgba(255,255,255,1)', fontSize: '29px', fontWeight: 'bold', padding: '2px', lineHeight: '32px',wordBreak: 'break-word' }} role='textarea'>Enter Title</span>

      </div>
  );
}