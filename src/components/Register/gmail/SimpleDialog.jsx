import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni neque iste 
        saepe quod beatae cumque fugit blanditiis debitis, animi porro aspernatur 
        natus, commodi odit! Vitae cumque magni amet ratione quas dolor, quo delectus,
         fuga placeat ipsam molestias. Ab, accusamus quia? Omnis, sequi! Consectetur 
         illum quidem velit quos odit perspiciatis nesciunt corrupti doloribus 
         asperiores, beatae aut. Fuga nihil omnis rerum dignissimos quam at accusantium
          ipsa in. Ad iure libero tempora sint vel fugit vitae nam. Sit itaque 
          repudiandae quae quas quisquam, at ipsa ullam. Delectus suscipit 
          reprehenderit maiores nam ullam quo optio tenetur beatae officia 
          tempora, facere vel architecto! Laborum, sequi.
      </DialogTitle>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <br />
      <Button variant="outlined" onClick={handleClickOpen} className="register-aLink">
      Terms and Conditions
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}