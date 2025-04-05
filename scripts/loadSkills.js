fetch('./scripts/data/skills.json').then((response) => {
    return response.json();
}).then((data) => {
    const skills = data.skills;
    const skillsList = document.getElementById('skills-list');
    const skillTemplate = document.getElementById('skill-template');

    let skillClone;
    for (let i = 0; i < skills.length; i++) {
        skillClone = skillTemplate.content.cloneNode(true);
        skillClone.querySelector('div').innerText = skills[i];
        skillsList.appendChild(skillClone);
    }
});