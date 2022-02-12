//SlideShow
const handleSlide = (id) => {
    const slides = document.getElementsByClassName('Slider-list')[0].children;
    switch (id) {
        case "Slide-element-1":
            slides[0].style.opacity = "1";
            slides[1].style.opacity = "0";
            slides[2].style.opacity = "0";
            break;
        case "Slide-element-2":
            slides[0].style.opacity = "0";
            slides[1].style.opacity = "1";
            slides[2].style.opacity = "0";
            break;
        case "Slide-element-3":
            slides[0].style.opacity = "0";
            slides[1].style.opacity = "0";
            slides[2].style.opacity = "1";
            break;
        default:
            break;
    }
}

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
        smallBar[0].innerText = '';
    } else {
        const progress = skills.techSkills.filter(skill => skill.name === parentClass)[0].progress;
        smallBar[0].style.width = progress + "%";
        smallBar[0].innerText = `${progress}%`;
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

//Contact Me Section
const handleSubmit = () => {
    const format = /^[A-Za-z]+$/;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log((format.test(name)));
    if ((name === "") || (email === "") || (message === "")) {
        alert('Debe introducir todos los datos requeridos')
    } else if (!(format.test(name))) {
        alert("Su nombre no debe contener caracteres especiales")
    }
    else if (!email.includes('@')) {
        alert('Debe escribir un correo válido')
    }
    else {
        alert('Su solicitud ha sido enviada')
        console.log(`
Nombre: ${name}
Correo: ${email}
Mensaje: ${message}`);
    }
}