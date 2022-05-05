import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  List,
  Grid,
  ListItem,
  IconButton,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import Project from './Project';

function ProjectList(props) {
  const { projectsData, projectsStatuses, removeProject } = props;
  const navigate = useNavigate();

  return (
    <Grid
      container
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      justifyItems="center"
    >
      <Grid item xs={5}>
        <List>
          <ListItem>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justifyContent="center"
              justifyItems="center"
            >
              <Grid item>
                <Typography
                  variant="h5"
                  color="textPrimary"
                  style={{
                    fontFamily: '\'Julius Sans One\', cursive',
                    marginTop: '16px',
                  }}
                >
                  Projects
                  {' '}
                  {`(${projectsData ? projectsData?.length : 0}/5)`}
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
          {
              projectsData?.map((projectData, index) => (
                <Project
                  key={projectData.id}
                  projectNumber={index + 1}
                  data={projectData}
                  isStartedProp={projectsStatuses[index]?.status}
                  removeProject={removeProject}
                />
              ))
            }
          <ListItem>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justifyContent="center"
              justifyItems="center"
            >
              {
                (projectsData?.length < 5)
                && (
                <Grid item>
                  <IconButton
                    edge={false}
                    aria-label="add_project"
                    style={{ marginTop: '8px' }}
                    onClick={() => {
                      navigate('/app/projects/add');
                    }}
                  >
                    <AddIcon fontSize="large" />
                  </IconButton>
                </Grid>
                )
              }
            </Grid>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

export default ProjectList;
