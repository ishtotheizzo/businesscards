import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Decision Theater Business Card Generator"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Welcome to the Decision Theater Business Card Generator.  

            <p><b>How Does This Work?</b></p>
            <ol>
              <li>Upload your headshot or your preferred image</li>
              <li>Enter your name and your preferred title</li>
              <li>Upload a QR Code. <a href="https://forms.gle/EVik1KkwozzSd6mm8" target="_blank">Don't have one? Request one</a></li>
            </ol>


          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}