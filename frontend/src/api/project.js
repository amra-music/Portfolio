import axios from 'axios';
import { githubUrl, githubOwner } from './common';

export const getProject = async (projectName) => {
    return (await axios.get(githubUrl + '/repos/' + githubOwner + '/' + projectName)).data;
    //return (await axios.get(`${githubUrl}/repos/${githubOwner}/${projectName}`)).data;
};

export const getProjectLanguages = async (projectName) => {
    return Object.entries((await axios.get(githubUrl + '/repos/' + githubOwner + '/' + projectName + '/languages')).data);
};

export const getProjectReadme = async (projectName) => {
    return (await axios.get(githubUrl + '/repos/' + githubOwner + '/' + projectName + '/readme')).data.content;
};

export const getAllProjects = async () => {
    return (await axios.get(githubUrl + '/users/' + githubOwner + '/repos')).data;
};
