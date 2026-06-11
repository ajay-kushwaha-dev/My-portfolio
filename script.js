const myProjects = [
    {
        title: "My-Image-Gallery",
        description: "Interactive Responsive Image Gallery with Lightbox",
        tech: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://my-image-gallery-nine.vercel.app/",
        codeLink: "https://github.com/ajay-kushwaha-dev/My-Image-Gallery.git"
    },
    {
        title: "Calculator",
        description: "A beautiful, fully functional Calculator, and full physical keyboard support.",
        tech: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://code-alpha-calculator-coral.vercel.app/",
        codeLink: "https://github.com/ajay-kushwaha-dev/CodeAlpha_Calculator.git"
    },
    {
        title: "Digital-Clock",
        description: "Show real time and date.",
        tech: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://digital-clock-chi-seven.vercel.app/",
        codeLink: "https://github.com/ajay-kushwaha-dev/digital-clock.git"
    }
];


const projectsContainer = document.getElementById("project-grid");


function displayProjects() {

    projectsContainer.innerHTML = ""; 


    myProjects.forEach(project => {
        const projectCard = `
            <div class="card" style="border: 1px solid #ccc; padding: 15px; margin: 10px; border-radius: 8px;">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p><strong>Built with:</strong> ${project.tech.join(", ")}</p>
                <div class="links">
                    <a href="${project.liveLink}" target="_blank" style="margin-right: 10px; color: white;">Live Demo</a>
                    <a href="${project.codeLink}" target="_blank" style="color: white;">Source Code</a>
                </div>
            </div>
        `;
        

        projectsContainer.innerHTML += projectCard;
    });
}


displayProjects();
