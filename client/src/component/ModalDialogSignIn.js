import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import FormSignIn from './FormSignIn';

const ModalDialogSignIn = ({ openIn, handleCloseIn }) => {
  return (
    // props received from App.js
    <Dialog open={openIn} onClose={handleCloseIn}>
      {/* form to be created */}
      <FormSignIn handleCloseIn={handleCloseIn} />
    </Dialog>
  );
};

export default ModalDialogSignIn;
