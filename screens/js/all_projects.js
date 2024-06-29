/*==================== button function to navigate to backpage(header)  ====================*/


document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("backButton");
    backButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.history.back();
    });
});



/*==================== project info - project container list  ====================*/
/*====================  for href of case study button - String Concatinated = (../)+(project.link) as it is inside the folder  ====================*/




async function loadProjects() {
    try {
        const response = await fetch('../assets/json/project_details.json');
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

function displayProjects(projects, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('projects__row');

        projectElement.innerHTML = `
            <div class="projects__row-img-cont">
                <img src="../${project.productImage}" alt="${project.id}" class="projects__row-img" loading="lazy">
            </div>
            <div class="projects__row-content">
                <h3 class="projects__row-content-title">${project.title}</h3>
                <p class="projects__row-content-desc">${project.subtitleTwoLines}</p>
                <a href="../${project.projectDetailsUrl}?id=${project.id}&projectDetailsUrl=nullForNow" class="btn btn--med btn--theme dynamicBgClr" >
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

