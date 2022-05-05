import React from 'react';
import {
  Button,
  Typography,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import { useAuth } from '../../../lib/auth';
import { toolbarStyle } from '../../../styles/toolbar';

export function Toolbar(props) {
  const { email } = props;
  const { logout } = useAuth();

  const handleLogout = async () => logout();

  return (
    <div className="toolbar" style={toolbarStyle}>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        sx={{
          margin: '10px',
          marginLeft: '14px',
          float: 'left',
        }}
        onClick={handleLogout}
      >
        <LogoutIcon color="default" fontSize="medium" />
      </Button>
      <Typography
        color="textSecondary"
        align="right"
        sx={{
          marginRight: '0px',
          padding: '15px',
          fontSize: '15px',
        }}
      >
        {email}
      </Typography>
    </div>
  );
}

export default Toolbar;
