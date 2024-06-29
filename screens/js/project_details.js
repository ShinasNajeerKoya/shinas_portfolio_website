/*==================== project details page - showcasing data from json  ====================*/

document.addEventListener('DOMContentLoaded', async () => {
    // Function to get query parameter by name
    function getQueryParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Function to fetch project data from JSON
    async function fetchProjectData() {
        const response = await fetch('../assets/json/project_details.json');
        const data = await response.json();
        return data.projects;
    }

    // Function to display project details on the page
    function displayProjectDetails(project) {
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-subtitleTwoLines').textContent = project.subtitleTwoLines;
        document.getElementById('project-image').src = `../${project.productImage}`;
        document.getElementById('project-github-linkTop').href = project.projectGithubLink;
        document.getElementById('project-github-linkBottom').href = project.projectGithubLink;

        //for description paragraph
        // Clear existing description content
        const descriptionContainer = document.getElementById('project-description');
        descriptionContainer.innerHTML = '';

        // Add paragraphs to the description container with a line break after each
        project.description.forEach(paragraph => {
            const paragraphElement = document.createElement('p');
            paragraphElement.textContent = paragraph;
            descriptionContainer.appendChild(paragraphElement);
            descriptionContainer.appendChild(document.createElement('br')); // Add a line break after each paragraph
        });

        //for scrollable project snapshots
        const snapshotsContainer = document.getElementById('project-snapshots');
        snapshotsContainer.innerHTML = ''; // Clear existing content

        project.snapshots.forEach(snapshot => {
            const img = document.createElement('img');
            img.src = snapshot;
            img.alt = 'Project Snapshot';
            img.classList.add('project-details__showcase-img');
            snapshotsContainer.appendChild(img);
        });


        //for tools section
        const skillsContainer = document.getElementById('project-skills');
        skillsContainer.innerHTML = ''; // Clear existing content

        project.skills.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.classList.add('skills__skill');
            skillDiv.textContent = skill;
            skillsContainer.appendChild(skillDiv);
        });
    }

    // Main logic
    const projectId = getQueryParameter('id');

    if (!projectId) {
        console.error('No project ID provided');
        // Optionally handle error display or redirect
        return;
    }

    const projects = await fetchProjectData();
    const project = projects.find(p => p.id === projectId);

    if (project) {
        displayProjectDetails(project);
    } else {
        console.error(`Project with ID ${projectId} not found`);
        // Optionally handle error display or redirect
    }
});



/*==================== button function to navigate to backpage(footer)  ====================*/


document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("backButtonBottom");
    backButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "../index.html"; // Replace with your actual index page URL
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("backButtonTop");
    backButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "../index.html";
    });
});







