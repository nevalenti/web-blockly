import React, {
  useEffect,
  useState,
} from 'react';
import jwtDecode from 'jwt-decode';

import { storage } from '../../../helpers/storage';
import ProjectList from '../components/ProjectList';
import {
  MainLayout,
  ContentLayout,
} from '../../../components/Layout';
import { Toolbar } from '../components/Toolbar';
import {
  getProjectsData,
  getProjectsStatuses,
} from '../api';

export function Projects() {
  const [email, setEmail] = useState('');
  const [projectsData, setProjectsData] = useState([]);
  const [projectsStatuses, setProjectsStatuses] = useState([]);

  const removeProject = (id) => {
    const newProjectsData = projectsData.filter((project) => project.id !== id);
    setProjectsData(newProjectsData);
  };

  useEffect(async () => {
    const token = JSON.parse(storage.getToken());
    const userId = jwtDecode(token).id;

    setEmail(jwtDecode(token).email || '');

    getProjectsData(userId).then(async (data) => {
      if (data) {
        setProjectsData(data);
        setProjectsStatuses(...projectsStatuses, await getProjectsStatuses(data));

        setInterval(async () => {
          setProjectsStatuses(...projectsStatuses, await getProjectsStatuses(data));
        }, 1000);
      }
    });
  }, []);

  return (
    <MainLayout>
      <Toolbar email={email} />
      <ContentLayout>
        <ProjectList
          projectsData={projectsData}
          projectsStatuses={projectsStatuses}
          removeProject={removeProject}
        />
      </ContentLayout>
    </MainLayout>
  );
}

export default Projects;
