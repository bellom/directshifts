import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import ModalDialogSignUp from '../component/ModalDialogSignUp';
import ModalDialogSignIn from '../component/ModalDialogSignIn';
import Image from '../img/image.jpg';


const LandingPage = () => {
  const [open, setOpen] = useState(false);
  const [openIn, setOpenIn] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenIn = () => {
    setOpenIn(true);
  };

  const handleCloseIn = () => {
    setOpenIn(false);
  };

  const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        marginTop: "10px",
        paddingRight: "30px"
    }
};

  return (
    <div className="App">
      <Box textAlign='right' style={styles.paperContainer}>
        <div>
          <Button style={{ marginRight: 70, backgroundColor: "#18bdb3"}} variant="contained" color="primary" onClick={handleOpen}>
            Sign Up
          </Button>
          <ModalDialogSignUp open={open} handleClose={handleClose} />
        </div>
        <div>
          <Button style={{ backgroundColor: "#1c8ee1"}} variant="contained" color="secondary" onClick={handleOpenIn}>
            Sign In
          </Button>
          <ModalDialogSignIn openIn={openIn} handleCloseIn={handleCloseIn} />
        </div>
     </Box>
    </div>
  );
};

export default LandingPage;