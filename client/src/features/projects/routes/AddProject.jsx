import React, {
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import {
  Button,
  Typography,
} from '@mui/material';
import { Logout, ArrowBackIosNew } from '@mui/icons-material';

import { useAuth } from '../../../lib/auth';
import { storage } from '../../../helpers/storage';
import { MainLayout, ContentLayout } from '../../../components/Layout';
import { toolbarStyle } from '../../../styles';

export function AddProject() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  useEffect(async () => {
    setEmail(jwtDecode(storage.getToken())?.email || '');
  }, []);

  const handleLogout = async () => logout();

  return (
    <MainLayout>
      <div className="toolbar" style={toolbarStyle}>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{
            margin: '10px',
            marginLeft: '14px',
            float: 'left',
          }}
          onClick={handleLogout}
        >
          <Logout color="default" fontSize="medium" />
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{
            margin: '10px',
            marginLeft: '54px',
            float: 'left',
          }}
          onClick={() => { navigate('/app/dashboard'); }}
        >
          <ArrowBackIosNew color="default" fontSize="medium" />
        </Button>
        <Typography
          color="textSecondary"
          align="right"
          style={{
            marginRight: '0px',
            padding: '15px',
            fontSize: '15px',
          }}
        >
          {email}
        </Typography>
      </div>
      <ContentLayout />
    </MainLayout>
  );
}

export default AddProject;
