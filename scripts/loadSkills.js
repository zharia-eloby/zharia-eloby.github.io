const skills = [
    "Python",
    "Java",
    "HTML",
    "CSS/Sass",
    "JavaScript",
    "Bootstrap",
    "SQL",
    "React",
    "Unity",
    "Git/GitHub"
];
function loadSkills() {
    const skillsList = document.getElementById('skills-list');
    const skillTemplate = document.getElementById('skill-template');

    let skillClone;
    for (let i = 0; i < skills.length; i++) {
        skillClone = skillTemplate.content.cloneNode(true);
        skillClone.querySelector('div').innerText = skills[i];
        skillsList.appendChild(skillClone);
    }
}