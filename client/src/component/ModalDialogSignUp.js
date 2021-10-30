import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import FormSignUp from '../container/FormSignUp';

const ModalDialogSignUp = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      {/* form to be created */}
      <FormSignUp handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialogSignUp;
