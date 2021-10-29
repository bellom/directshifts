import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import ModalDialogSignUp from './ModalDialogSignUp';
import ModalDialogSignIn from './ModalDialogSignIn';
import Image from '../img/image.jpg';


const App = () => {
  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);
  const [openIn, setOpenIn] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  // function to handle modal open
  const handleOpenIn = () => {
    setOpenIn(true);
  };

  // function to handle modal close
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

export default App;