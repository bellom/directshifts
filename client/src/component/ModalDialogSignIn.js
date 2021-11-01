import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import FormSignIn from '../container/FormSignIn';

const ModalDialogSignIn = ({ openIn, handleCloseIn }) => {
  return (
    <Dialog open={openIn} onClose={handleCloseIn}>
      <FormSignIn handleCloseIn={handleCloseIn} />
    </Dialog>
  );
};

export default ModalDialogSignIn;
