//Skill Section
const skills = {
    name: 'Habilidades en tecnología',
    techSkills: [
        {
            name: 'Python',
            progress: 45
        },
        {
            name: 'Java',
            progress: 30
        },
        {
            name: 'JavaScript',
            progress: 50
        },
        {
            name: 'HTML5',
            progress: 65
        },
        {
            name: 'CSS3',
            progress: 50
        },
        {
            name: 'React.js',
            progress: 30
        },
    ]
}

const container = document.getElementById('Skills');
const dinamicBar = (node) => {
    const parentClass = node.className;
    const smallBar = document.getElementsByClassName(`${parentClass}-Smallbar`)
    if (smallBar[0].style.width > 2 + "%") {
        smallBar[0].style.width = 1 + "%";
    } else {
        const progress = skills.techSkills.filter(skill => skill.name === parentClass)[0].progress;
        smallBar[0].style.width = progress + "%";
    }
};

for (skill of skills.techSkills) {
    const skillElement = document.createElement('div');
    skillElement.className = `${skill.name}`;
    const title = document.createElement('p');
    title.innerText = `${skill.name}`;
    const barContainer = document.createElement('div');
    barContainer.className = `${skill.name}-Fullbar`;
    const barSmall = document.createElement('div');
    barSmall.className = `${skill.name}-Smallbar`;
    barContainer.append(barSmall)
    const button = document.createElement('button');
    button.innerText = 'Check Progress';
    button.addEventListener('click', () => dinamicBar(skillElement));
    skillElement.append(title, barContainer, button)
    container.append(skillElement)
}
