import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import FormSignUp from '../container/FormSignUp';

const ModalDialogSignUp = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <FormSignUp handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialogSignUp;
