////REALISATIONS 
const projects = {
    project1: {
        title: "Booki",
        image: "./images/booki.png",
        skills: "HTML, CSS, Figma, W3C",
        description: "Booki est une agence de voyage pour laquelle j'étais chargé d'intégrer la page d'accueil du site. Ma mission principale était de travailler sur la version responsive du site. J'ai également ajouté des animations qui n'étaient pas forcémment demandées mais qui venaient compléter le design final du site.",
        github: "https://github.com/MohamedKhorchid/PROJET-3",
    },
    project2: {
        title: "Ohmyfood",
        image: "./images/ohmyfood.png",
        skills: "HTML, SCSS, Figma",
        description: "Ohmyfood est une start-up en pleine expension qui souhaite s'imposer comme leader dans son domaine : la réservation de repas en ligne. Pour aider la société à atteindre ses objectifs, j'ai conçu une interface moderne et dynamique, permettant aux utilisateurs d'utiliser le site sur tous les appraeils de manière optimale.",
        github: "https://github.com/MohamedKhorchid/Projet_4",
    },
    project3: {
        title: "Sophie Bluel",
        image: "./images/sophie.png",
        skills: "JavaScript, CSS, API, Figma",
        description: "Sophie Bluel est une architecte pour laquelle j'ai dynamisé le site (portfolio), en passant d'un contenu statique en HTML, à une interface conçue avec JavaScript. Elle peut maintenant se connecter, se déconnecter, et gérer les projets de sa gallerie facilement, en toute autonomie.",
        github: "https://github.com/MohamedKhorchid/PROJET-6",
    },
    project4: {
        title: "Nina Carducci",
        image: "",
        skills: "SEO, débuggage",
        description: "Nina Carducci est une photographe profesionnelle pour qui j'ai optimisé le site web à l'aide de l'outil LightHouse, afin de lui permettre de trouver plus de clients.",
        github: "https://github.com/MohamedKhorchid/PROJET99",
    },
    project5: {
        title: "Kasa",
        image: "./images/Capture d'écran 2024-06-27 191353.png",
        skills: "JavaScript, React, Figma",
        description: "Kasa est un site proposant des hébergements à la location. J'ai été chargé de créer le site avec React à partir de maquettes fournies par le client. Le rendu final permet de naviguer entre les différentes pages du site et de voir tous les détails liés à un logement en particulier.",
        github: "https://github.com/MohamedKhorchid/PROJET-8",
    },
    project6: {
        title: "Argent Bank",
        image: "./images/argentbank.png",
        skills: "React, Redux, Swagger",
        description: "Argent Bank est une banque en ligne pour laquelle j'ai crée le site web à l'aide de technologies modernes : React et Redux. L'application est entièrement fonctionnelle et permet aux utilisateurs de se connecter et se déconnecter de manière sécurisée, d'accéder à ses comptes en banque, et de changer son nom d'utilisateur.",
        github: "https://github.com/MohamedKhorchid/PROJET-11v2",
    },
}


function createRealisationsModal(title, image, skills, description, github) {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.innerHTML = `<div class="modal__content">
    <button class="modal__close__btn" id="btnModalClose"><i class="fa-solid fa-xl fa-xmark"></i></button>
    <h2 class="modal__title">${title}</h2>
    <div class="modal__skills">${skills}</div>
    <div class="modal__image">
        <img class="modal__image__style" src="${image}">
    </div>
    <div class="modal__info">${description}</div>
    <div class="modal__github">
        <a href="${github}" class="modal__github__link" target="_blank">Lien vers le code du projet</a>
    </div>
    </div>`

    document.body.append(modal)

    const btnClose = document.querySelector('#btnModalClose')
    btnClose.addEventListener('click', () => {
        modal.remove()
    })
}

const realisations = document.querySelectorAll(".realisations__list__icon")

realisations.forEach(realisation => {
    realisation.addEventListener('click', () => {
        const projectId = realisation.getAttribute('data-id') 
        const project = projects[projectId]
        createRealisationsModal(project.title, project.image, project.skills, project.description, project.github)
    })
})




////TECHNOLOGIES
const softwares = {
    software1: {
        title: "HTML 5",
        description: "HTML est un langage descriptif permettant de créer des pages web simples et statiques. Il est le langage fondammental pour la création de site web.",
    },
    software2: {
        title: "CSS 3",
        description: "CSS, langage complémentaire à HTML, permet de styliser le contenu créé. Du simple ajout de couleurs à l'ajout d'animations avancées, tout est possible avec le CSS !",
    },
    software3: {
        title: "JavaScript",
        description: "JavaScript est une langage de programmation permettant de créer des pages web dynamiques, où les différents éléments peuvent changer de comportement en fonction des interractions avec l'utilisateur.",
    },
    software4: {
        title: "SASS",
        description: "SASS est un préprocesseur de CSS. Autrement dit, c'est une façon d'écrire du CSS de manière condensée, ce qui facilite grandement le travail des développeurs.",
    },
    software5: {
        title: "React",
        description: "React est un framework de JavaScript. Son utilisation est très populaire et permet de créer facilement de nombreuses pages qui présentent les mêmes éléments grâce à la notion de composants réutilisables et personnalisables.",
    },
    software6: {
        title: "GitHub",
        description: "GitHub est une plateforme, qui, associée à Git, permet de versionner du code (c'est-à-dire d'en conserver les versions antérieures), et de le partager entre développeurs.",
    },
    software7: {
        title: "Redux",
        description: "Redux est un autre framework de JavScript. Il permet de gérer, suivre et propager un état à travers toute une application grâce au concept de store, des actions et des reducers. Utilisé avec React, il offre la possibilité de créer de grandes et solides applications.",
    },
    software8: {
        title: "Figma",
        description: "Figma est un outil indispensable au travail de l'intégrateur web. C'est une plateforme qui fait le lien entre graphiste et développeurs puisqu'elle permet de créer des maquettes et de savoir exactemeent quoi développer et comment le faire pour obtenir un résultat conforme aux attentes des clients.",
    },
}


function createTechnologiesModal(title, description) {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.innerHTML = `<div class="modal__content">
    <button class="modal__close__btn" id="btnModalClose"><i class="fa-solid fa-xl fa-xmark"></i></button>
    <h2 class="modal__title">${title}</h2>
    <div class="modal__info">${description}</div>
    </div>`

    document.body.append(modal)

    const btnClose = document.querySelector('#btnModalClose')
    btnClose.addEventListener('click', () => {
        modal.remove()
    })
}

const technologies = document.querySelectorAll(".technologies__list__icon")

technologies.forEach(technologie => {
    technologie.addEventListener('click', () => {
        const softwareId = technologie.getAttribute('data-id')
        const software = softwares[softwareId]
        createTechnologiesModal(software.title, software.description)
    })
})







////SERVICES
const works = {
    work1: {
        title: "Création de sites web sur-mesure",
        description: "Vous souhaitez créer un site web de A à Z ? Je peux vous aider ! Grâce à mes compétences je suis en mesure de vous construire un site web responsive correspondant à vos attentes en terme de visuel et de fonctionnalité, de la planification à la mise en ligne.",
    },
    work2: {
        title: "Création de sites wordpress clés en main personnalisés",
        description: "Vous avez besoin d'un site rapidement et facile à prendre en main ? WordPress est une solution idéale pour répondre à votre besoin. Il s'agit d'un CMS (content manager system) qui faicilite la maintenance et la mise à jour du contenu d'un site, ce qui vous permet de garder la main sur votre application.",
    },
    work3: {
        title: "Optimisation SEO et débuggage de sites",
        description: "Vous avez un site mais ce dernier ne vous apporte que peu de visibilité ? Ou bien, il présente de nombreux bugs rendant son utilisation difficile ? Un travail d'optimisation SEO et de débuggage peut être fait pour rendre votre site plus attrayant et performant et ainsi vous permettre d'obtenir plus de trafic.",
    },
}


function createServiceModal(title, description) {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.innerHTML = `<div class="modal__content">
    <button class="modal__close__btn" id="btnModalClose"><i class="fa-solid fa-xl fa-xmark"></i></button>
    <h2 class="modal__title">${title}</h2>
    <div class="modal__info">${description}</div>
    </div>`

    document.body.append(modal)

    const btnClose = document.querySelector('#btnModalClose')
    btnClose.addEventListener('click', () => {
        modal.remove()
    })
}

const services = document.querySelectorAll(".services__list__item")

services.forEach(service => {
    service.addEventListener('click', () => {
        const workId = service.getAttribute('data-id')
        const work = works[workId]
        createServiceModal(work.title, work.description)
    })
})