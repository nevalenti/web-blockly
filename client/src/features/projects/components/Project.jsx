import React, {
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
} from '@mui/material';
import {
  Delete,
  Edit,
  PlayArrow,
  Stop,
} from '@mui/icons-material';

import {
  removeProjectById,
  startProcessOnPort,
  stopProcessOnPort,
} from '../api';

function Project(props) {
  const {
    data, projectNumber, isStartedProp, removeProject,
  } = props;
  const navigate = useNavigate();
  const [isStarted, start] = useState(false);
  const PORT = `900${projectNumber}`;

  useEffect(() => {
    start(isStartedProp);
  }, [isStartedProp]);

  const handleStartProcessClick = async () => {
    await stopProcessOnPort(PORT);
    await startProcessOnPort(PORT);
    start(!isStarted);
  };

  const handleStopProcessClick = async () => {
    await stopProcessOnPort(PORT);
    start(!isStarted);
  };

  const handleEditProjectClick = async () => {
    const projectId = data.id;

    navigate(`/app/blockly/${projectId}`);
  };

  const handleRemoveProjectClick = async () => {
    const projectId = data.id;

    removeProject(projectId);

    await removeProjectById(projectId);

    // window.location.reload();
  };

  return (
    <ListItem
      style={{
        borderTop: '1px',
        borderWidth: (isStarted) ? '1px' : '0px',
        borderColor: (isStarted) ? '#66bb6a' : '#bbbbbb',
        backgroundColor: '#eeeeee',
        borderStyle: 'solid',
        marginTop: '20px',
        borderRadius: '4px',
        padding: (isStarted) ? '11px' : '12px',
      }}
      secondaryAction={(
        <>
          <IconButton
            edge="start"
            aria-label="edit_project"
            style={{
              marginLeft: (isStarted) ? '6px' : '5px',
              marginRight: (isStarted) ? '8px' : '7px',
            }}
            onClick={handleEditProjectClick}
          >
            <Edit />
          </IconButton>
          <IconButton
            edge="start"
            aria-label="delete_project"
            style={{
              marginLeft: (isStarted) ? '4px' : '5px',
              marginRight: (isStarted) ? '6px' : '7px',
            }}
            onClick={handleRemoveProjectClick}
          >
            <Delete />
          </IconButton>
        </>
      )}
    >
      <ListItemAvatar>
        <Avatar>
          { !isStarted ? (
            <IconButton
              edge={false}
              aria-label="run_project"
              style={{ marginLeft: '12px', marginRight: '12px' }}
              onClick={handleStartProcessClick}
            >
              <PlayArrow color="success" fontSize="large" />
            </IconButton>
          ) : (
            <IconButton
              edge={false}
              aria-label="stop_project"
              style={{ marginLeft: '12px', marginRight: '12px' }}
              onClick={handleStopProcessClick}
            >
              <Stop color="error" fontSize="large" />
            </IconButton>
          )}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`${data.name}`}
        secondary={`PORT ${PORT}`}
      />
    </ListItem>
  );
}

export default Project;
