import "./sass/main.scss";
import "./ts/menu";
import listProjects from "./ts/projects";
import listEducations from "./ts/educations";
import listExperiences from "./ts/experiences";

interface Project {
  title: string;
  company: string;
  description: string;
  started_at: Date;
  ended_at: Date | null;
};

interface Education { };
interface Experience { };

const API_URL = `http://localhost/api`;

function getProjects(): Promise<Project[]> {
  return fetch(`${API_URL}/projects`)
    .then(res => res.json())
    .then(res => {
      return res.data as Project[]
    });
}

function getEducations(): Promise<Education[]> {
  return fetch(`${API_URL}/educations`)
    .then(res => res.json())
    .then(res => {
      return res.data as Education[]
    });
}

function getExperiences(): Promise<Experience[]> {
  return fetch(`${API_URL}/experiences`)
    .then(res => res.json())
    .then(res => {
      return res.data as Experience[]
    });
}

(async () => {
  const [educations, experiences, projects] = await Promise.all([getEducations(), getExperiences(), getProjects()]);
  const path = window.location.pathname;

  const projectListElement = document.querySelector('#project-list');
  const educationListElement = document.querySelector('#education-list');
  const experienceListElement = document.querySelector('#experience-list');

  switch (path) {
    case '/':

      listProjects(projects, projectListElement);

      break;
    case '/cv.html':

      listExperiences(experiences, experienceListElement);

      break;
    case '/education.html':

      listEducations(educations, educationListElement);

      break;
    default:
      
      break;
  }

})();