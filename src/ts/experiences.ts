export default function listExperiences(experiences: any, experienceListElement: Element) {
  let listExperienceEl = document.querySelector('#experience-list');

  for (let key in experiences) {
    let value = experiences[key];
    listExperienceEl.innerHTML += `
    <ul class="list">
      <li><strong>${value.title} - ${value.company}</strong></li>
      <li>${value.started_at} - ${!value.ended_at ? 'Ongoing' : value.ended_at}</li>
      <li class="li-desc-title"><strong>Description</strong></li>
      <li class="li-desc">${value.description}</li>
    </ul>
    `
  }

};