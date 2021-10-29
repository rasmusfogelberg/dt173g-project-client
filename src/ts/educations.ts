export default function listEducations(educations: any, educationListElement: Element) {
  let listEducationEl = document.querySelector('#education-list');

  for (let key in educations) {
    let value = educations[key];
    listEducationEl.innerHTML += `
    <ul class="list">
      <li><strong>${value.name} - ${value.institution}</strong></li>
      <li>${value.started_at} - ${!value.ended_at ? 'Ongoing' : value.ended_at}</li>
      <li class="li-desc-title"><strong>Description</strong></li>
      <li class="li-desc">${value.description}</li>
    </ul>
    `
  }

}; 