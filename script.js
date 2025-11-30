// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // 1. Populate Content from data.js
    populateContent();

    // 2. Initialize Event Listeners
    initNavigation();
    initModal();

    // 3. Set Current Year
    document.getElementById('year').textContent = new Date().getFullYear();
});

function populateContent() {
    const data = portfolioData;

    // --- Hero Section ---
    document.getElementById('hero-name').textContent = data.hero.name;
    document.getElementById('hero-title').textContent = data.hero.title;
    document.getElementById('hero-tagline').textContent = data.hero.tagline;
    document.getElementById('hero-image').src = data.hero.image;
    document.getElementById('hero-resume').href = data.hero.resumeLink;

    const socialContainer = document.getElementById('hero-socials');
    socialContainer.innerHTML = ''; // Clear existing
    data.hero.socialLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = "_blank";
        a.innerHTML = `<i class="${link.icon}"></i>`;
        socialContainer.appendChild(a);
    });

    // --- About Section ---
    document.getElementById('about-title').textContent = data.about.title;
    document.getElementById('about-description').innerHTML = data.about.description;

    // --- Experience Section ---
    document.getElementById('experience-title').textContent = data.experience.title;
    const experienceList = document.getElementById('experience-list');
    experienceList.innerHTML = '';
    data.experience.jobs.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-card';

        // Handle description as array or string
        let descHtml = '';
        if (Array.isArray(job.description)) {
            descHtml = '<ul>' + job.description.map(item => `<li>${item}</li>`).join('') + '</ul>';
        } else {
            descHtml = `<p>${job.description}</p>`;
        }

        card.innerHTML = `
            <h3>${job.role}</h3>
            <h4>${job.company}</h4>
            <span class="period">${job.period}</span>
            ${descHtml}
        `;
        experienceList.appendChild(card);
    });

    // --- Projects Section ---
    document.getElementById('projects-title').textContent = data.projects.title;
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    data.projects.items.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.index = index; // Store index for modal

        // Create tech tags
        const techTags = project.technologies.map(tech =>
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        // Use shortDescription for the card
        const desc = project.shortDescription || project.description;

        // Remove image from card if you want a cleaner look, or keep it.
        // We will keep it but maybe smaller or just text if no image.
        // For now, let's keep the card structure similar but make it clickable.

        card.innerHTML = `
            <div class="project-info">
                <h3>${project.title}</h3>
                <div class="tech-stack">${techTags}</div>
                <p>${desc}</p>
            <div>
            </div>
                <span class="btn secondary-btn" style="padding: 8px 20px; font-size: 0.9rem;">View Details</span>
            </div>
        `;
        projectsGrid.appendChild(card);
    });

    // --- Skills Section ---
    document.getElementById('skills-title').textContent = data.skills.title;
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = '';
    data.skills.categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';

        const skillItems = category.items.map(item =>
            `<span class="skill-item">${item}</span>`
        ).join('');

        categoryDiv.innerHTML = `
            <h3>${category.name}</h3>
            <div class="skill-list">${skillItems}</div>
        `;
        skillsContainer.appendChild(categoryDiv);
    });

    // --- Contact Section ---
    document.getElementById('contact-title').textContent = data.contact.title;
    document.getElementById('contact-description').textContent = data.contact.description;
    document.getElementById('contact-email').href = `mailto:${data.contact.email}`;

    const phoneBtn = document.getElementById('contact-phone');
    if (data.contact.phone) {
        phoneBtn.href = `tel:${data.contact.phone.replace(/\s+/g, '')}`;
        phoneBtn.style.display = 'inline-flex';
    } else {
        phoneBtn.style.display = 'none';
    }
}

function initNavigation() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });
}

// Scroll Event for Active Links & Back to Top
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const backToTop = document.getElementById('back-to-top');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });

    // Back to Top Visibility
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

function initModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');
    const projectCards = document.querySelectorAll('.project-card');

    // Open Modal
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const index = card.dataset.index;
            const project = portfolioData.projects.items[index];
            openModal(project);
        });
    });

    // Close Modal
    closeBtn.addEventListener('click', () => {
        closeModal();
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

function openModal(project) {
    const modal = document.getElementById('project-modal');

    // Populate Data
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.longDescription || project.description;

    // Tech Stack
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = project.technologies.map(tech =>
        `<span class="tech-tag">${tech}</span>`
    ).join('');

    // Features
    const featuresContainer = document.getElementById('modal-features');
    const featuresWrapper = document.getElementById('modal-features-container');

    if (project.features && project.features.length > 0) {
        featuresWrapper.style.display = 'block';
        featuresContainer.innerHTML = project.features.map(feature =>
            `<li>${feature}</li>`
        ).join('');
    } else {
        featuresWrapper.style.display = 'none';
    }

    // Image
    const img = document.getElementById('modal-image');
    if (project.image && !project.image.includes('placeholder')) {
        img.src = project.image;
        img.style.display = 'block';
    } else {
        img.style.display = 'none';
    }

    // Links
    document.getElementById('modal-live').href = project.liveLink;
    document.getElementById('modal-repo').href = project.repoLink;

    // Show Modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Restore scrolling
}
