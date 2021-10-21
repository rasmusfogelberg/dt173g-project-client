import "./sass/main.scss";

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

  console.log(path);

  switch (path) {
    case '/':
      // Render work
      console.log('RENDER WORK!');
      console.log('Projects', projects);
      break;
    case '#cv':
      // Render experiences
      console.log('RENDER EXPERIENCES!');
      console.log('Experiences', experiences);
      break;
    case '#education':
      // Render educations
      console.log('RENDER EDUCATIONS!');
      console.log('Educations', educations);
      break;
    default:
      // Render not found
      break;
  }

})();