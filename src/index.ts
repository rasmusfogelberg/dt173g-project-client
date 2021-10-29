import "./sass/main.scss";
import "./ts/menu.ts";

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
      // Render projects
      console.log('RENDER PROJECTS!');
      console.log('Projects', projects);

      let listProjects = (projects: any) => {
        let listProjectsEl = document.querySelector('#project-list');

        for (let key in projects) {
          let value = projects[key];
          listProjectsEl.innerHTML += `
          <ul class="list">
            <li><strong>${value.title}</strong></li>
            <li><strong>URL:</strong> <a href="${value.url}" taget="_blank">${value.url}</a></li>
            <li class="li-desc-title"><strong>Description</strong></li>
            <li class="li-desc">${value.description}</li>
          </ul>
          `
        }

      }; 

    listProjects(projects);

      break;
    case '/cv.html':
      // Render experiences
      console.log('RENDER EXPERIENCES!');
      console.log('Experiences', experiences);

      let listExperience = (experiences: any) => {
        let listExperienceEl = document.querySelector('#experience-list');

        for (let key in experiences) {
          let value = experiences[key];
          listExperienceEl.innerHTML += `
          <ul class="list">
            <li><strong>${value.title} - ${value.company}</strong></li>
            <li>${value.started_at} - ${value.ended_at}</li>
            <li class="li-desc-title"><strong>Description</strong></li>
            <li class="li-desc">${value.description}</li>
          </ul>
          `
        }

      }; 

    listExperience(experiences);

      break;
    case '/education.html':
      // Render educations
      console.log('RENDER EDUCATIONS!');
      console.log('Educations', educations);

      let listEducation = (educations: any) => {
        let listEducationEl = document.querySelector('#education-list');

        for (let key in educations) {
          let value = educations[key];
          listEducationEl.innerHTML += `
          <ul class="list">
            <li><strong>${value.name} - ${value.institution}</strong></li>
            <li>${value.started_at} - ${value.ended_at}</li>
            <li class="li-desc-title"><strong>Description</strong></li>
            <li class="li-desc">${value.description}</li>
          </ul>
          `
        }

      }; 

    listEducation(educations);

      break;
    default:
      // Render not found
      break;
  }

})();