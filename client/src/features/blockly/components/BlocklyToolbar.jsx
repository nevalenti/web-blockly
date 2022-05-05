import React from 'react';
import { useNavigate } from 'react-router-dom';
import cookies from 'js-cookie';
import { Button } from '@mui/material';
import {
  ArrowBackIosNew,
  DeleteForever,
  Logout,
  Save,
} from '@mui/icons-material';

import { useAuth } from '../../../lib/auth';
import { toolbarStyle } from '../../../styles/toolbar';

export function BlocklyToolbar(props) {
  const {
    codeRef,
    generateCode,
    workspaceToXmlString,
  } = props;
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => logout();

  const handleGoBack = async () => navigate('/app/dashboard');

  const handleSpaceClick = () => {
    codeRef.current = generateCode();
    // eslint-disable-next-line no-alert
    alert(workspaceToXmlString());
  };

  const handleCodeClick = () => {
    codeRef.current = generateCode();
    // eslint-disable-next-line no-alert
    alert(codeRef.current);
  };

  const handleDeleteClick = () => {
    cookies.set('initialXml', '');
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
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
        onClick={handleGoBack}
      >
        <ArrowBackIosNew color="default" fontSize="medium" />
      </Button>
      <Button
        variant="contained"
        color="error"
        size="small"
        style={{
          margin: '10px',
          marginLeft: '0px',
          float: 'right',
        }}
        onClick={handleDeleteClick}
      >
        <DeleteForever color="default" fontSize="medium" />
      </Button>
      <Button
        variant="contained"
        color="success"
        size="small"
        style={{
          margin: '10px',
          marginLeft: '0px',
          float: 'right',
        }}
        onClick={() => {
          cookies.set('initialXml', workspaceToXmlString());
        }}
      >
        <Save color="default" fontSize="medium" />
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{
          margin: '10px',
          marginLeft: '0px',
          float: 'right',
        }}
        onClick={handleSpaceClick}
      >
        space
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{
          margin: '10px',
          marginLeft: '0px',
          float: 'right',
        }}
        onClick={handleCodeClick}
      >
        code
      </Button>
    </div>
  );
}

export default BlocklyToolbar;
