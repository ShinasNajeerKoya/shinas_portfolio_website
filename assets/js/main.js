/*====================  menu for mobile ====================*/
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
    '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
    if (smallMenu.classList.contains('header__sm-menu--active')) {
        smallMenu.classList.remove('header__sm-menu--active')
    } else {
        smallMenu.classList.add('header__sm-menu--active')
    }
    if (headerHamMenuBtn.classList.contains('d-none')) {
        headerHamMenuBtn.classList.remove('d-none')
        headerHamMenuCloseBtn.classList.add('d-none')
    } else {
        headerHamMenuBtn.classList.add('d-none')
        headerHamMenuCloseBtn.classList.remove('d-none')
    }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
    headerSmallMenuLinks[i].addEventListener('click', () => {
        smallMenu.classList.remove('header__sm-menu--active')
        headerHamMenuBtn.classList.remove('d-none')
        headerHamMenuCloseBtn.classList.add('d-none')
    })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
    location.href = '/'
})



/*==================== project category - project container list  ====================*/
/*==================== for href of case study button - keep it as it is for (project.link), but in other pages, contactinate with (../)  ====================*/
const MAX_PROJECTS_HOMEPAGE = 3;

async function loadProjects() {
    try {
        const response = await fetch('assets/json/project_details.json');
        if (!response.ok) {
            throw new Error('Failed to fetch project data');
        }
        const data = await response.json();
        return data.projects;
    } catch (error) {
        console.error('Error loading projects:', error.message);
        return [];
    }
}

function displayProjects(projects, containerId, maxProjects = MAX_PROJECTS_HOMEPAGE) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    projects.slice(0, maxProjects).forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('projects__row');

        projectElement.innerHTML = `
            <div class="projects__row-img-cont">
                <img src="${project.productImage}" alt="${project.id}" class="projects__row-img" loading="lazy">
            </div>
            <div class="projects__row-content">
                <h3 class="projects__row-content-title">${project.title}</h3>
                <p class="projects__row-content-desc">${project.subtitleTwoLines}</p>
                <a href="${project.projectDetailsUrl}?id=${project.id}&projectDetailsUrl=nullForNow" class="btn btn--med btn--theme dynamicBgClr" >
                    Case Study
                </a>
            </div>
        `;

        container.appendChild(projectElement);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    const projects = await loadProjects();
    displayProjects(projects, 'portfolioContainer');
});







/*==================== project category - show all button  ====================*/
// Initialize Swiper with manual navigation
document.addEventListener("DOMContentLoaded", function() {
    // Find the Show All Projects button
    const showAllProjectsButton = document.querySelector('.show-all-projects .button');

    // Add a click event listener to the button
    showAllProjectsButton.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();

        // Navigate to all_projects.html
        window.location.href = 'screens/all_projects.html';
    });
});











