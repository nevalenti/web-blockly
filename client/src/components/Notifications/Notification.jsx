import React from 'react';
import {
  Alert,
  Fade,
  Snackbar,
  Slide,
} from '@mui/material';

function SlideTransition(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide {...props} direction="up" />;
}

export function Notification(props) {
  const { notificationData, dismissNotification } = props;
  const [state, setState] = React.useState({
    open: true,
    Transition: Fade,
  });

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
    dismissNotification(notificationData?.id || '-1');
  };

  return (
    <div>
      <Snackbar
        open={state.open}
        autoHideDuration={2500}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        TransitionComponent={SlideTransition}
      >
        <Alert
          onClose={handleClose}
          severity={notificationData?.type || 'error'}
          sx={{ width: '100%' }}
        >
          {notificationData?.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Notification;
