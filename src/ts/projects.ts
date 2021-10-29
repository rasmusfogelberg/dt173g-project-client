
export default function listProjects(projects: any, projectListElement: Element) {
  for (let key in projects) {
    let value = projects[key];
    projectListElement.innerHTML += `
      <ul class="list">
        <li><strong>${value.title}</strong></li>
        <li><strong>URL:</strong> <a href="${value.url}" taget="_blank">${value.url}</a></li>
        <li class="li-desc-title"><strong>Description</strong></li>
        <li class="li-desc">${value.description}</li>
      </ul>
    `
  }
}; 
