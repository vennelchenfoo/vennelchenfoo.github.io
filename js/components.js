// Portfolio Data - Customize with your information
const portfolioData = {
    skills: [
        { name: 'Python', icon: 'fab fa-python', level: 'Advanced' },
        { name: 'SQL', icon: 'fas fa-database', level: 'Advanced' },
        { name: 'Pandas', icon: 'fas fa-table', level: 'Advanced' },
        { name: 'Tableau', icon: 'fas fa-chart-bar', level: 'Intermediate' },
        { name: 'n8n', icon: 'fas fa-workflow', level: 'Advanced' },
        { name: 'AI Agents', icon: 'fas fa-robot', level: 'Intermediate' },
        { name: 'Git', icon: 'fab fa-git-alt', level: 'Intermediate' },
        { name: 'JavaScript', icon: 'fab fa-js', level: 'Beginner' }
    ],
    projects: [
        {
            title: 'TruBot-IT Slack AI Agent',
            description: 'IT support automation workflow with RAG architecture, featuring 43 nodes for intelligent ticket routing and resolution',
            icon: 'fas fa-robot',
            technologies: ['n8n', 'RAG', 'AI', 'Slack API'],
            liveUrl: '#',
            githubUrl: 'https://github.com/vennelchenfoo/trubot-it'
        },
        {
            title: 'Flip 7 Interactive Scoreboard',
            description: 'React-based mobile-optimized scoreboard for the board game Flip 7 with real-time score tracking',
            icon: 'fas fa-gamepad',
            technologies: ['React', 'JavaScript', 'CSS', 'Mobile-First'],
            liveUrl: '#',
            githubUrl: 'https://github.com/vennelchenfoo/flip7-scoreboard'
        },
        {
            title: 'Multi-Currency Financial Tracker',
            description: 'Automated banking statement processor for German, US, and Philippine accounts with EUR conversion',
            icon: 'fas fa-coins',
            technologies: ['Python', 'Pandas', 'Notion API', 'Claude'],
            liveUrl: '#',
            githubUrl: 'https://github.com/vennelchenfoo/finance-tracker'
        }
    ]
};

// Render Skills
function renderSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = portfolioData.skills.map((skill, index) => `
        <div class="skill-card animate-on-scroll">
            <i class="${skill.icon} skill-icon"></i>
            <h4 class="skill-name">${skill.name}</h4>
            <span class="skill-level">${skill.level}</span>
        </div>
    `).join('');
}

// Render Projects
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = portfolioData.projects.map(project => `
        <div class="project-card animate-on-scroll">
            <div class="project-icon-wrapper">
                <i class="${project.icon} project-icon"></i>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
                <div class="project-links">
                    ${project.liveUrl !== '#' ? 
                        `<a href="${project.liveUrl}" class="project-link" target="_blank">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>` : ''}
                    <a href="${project.githubUrl}" class="project-link" target="_blank">
                        <i class="fab fa-github"></i> Code
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    
    // Re-observe new elements for animations
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});
