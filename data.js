/**
 * PORTFOLIO DATA
 * 
 * Update this file to change the content of your website.
 * No need to edit HTML/CSS for content changes.
 */

const portfolioData = {
    // Hero Section
    hero: {
        name: "Veeru Pal",
        title: "Senior Salesforce Developer",
        tagline: "5X Certified Salesforce Developer | Building scalable solutions on the Salesforce Platform.",
        // Use the path to your image. If you move the file, update this path.
        image: "./utility/Veeru Photo1.jpg",
        resumeLink: "./utility/VEERU PAL Resume.pdf",
        socialLinks: [
            { platform: "GitHub", url: "https://github.com/veerupal", icon: "fab fa-github" },
            { platform: "LinkedIn", url: "https://linkedin.com/in/veerupal2323", icon: "fab fa-linkedin" },
            { platform: "Email", url: "mailto:veerupal2323@gmail.com", icon: "fas fa-envelope" }
        ]
    },

    // About Section
    about: {
        title: "About Me",
        description: `
            <p>I am a Senior Salesforce Developer with over 4 years of experience in designing and implementing robust solutions on the Salesforce platform. I am 5X Salesforce Certified, demonstrating my commitment to excellence and continuous learning.</p>
            <p>My expertise spans across the entire Salesforce ecosystem, including Apex, Lightning Web Components (LWC), Aura Components, and Visualforce. I have a strong background in Computer Science and a passion for solving complex business problems through code.</p>
            <p><strong>Education:</strong><br>
            B.Tech in Computer Science Engineering (2021)<br>
            United College of Engineering and Management, Naini</p>
        `
    },

    // Work Experience Section
    experience: {
        title: "Work Experience",
        jobs: [
            {
                company: "Metacube Software Pvt. Ltd.",
                role: "Senior Salesforce Developer",
                period: "July 2021 - Present",
                // Use an array for bullet points
                description: [
                    "Developing and maintaining complex Salesforce applications using Apex, LWC, and Aura components.",
                    "Specializing in Service Cloud implementation, including Legacy Routing and Agentforce configurations.",
                    "Refactoring legacy Visualforce pages into modern Lightning Web Components (LWC) for improved performance.",
                    "Collaborating with cross-functional teams to deliver high-quality features and ensure code quality."
                ]
            }
        ]
    },

    // Projects Section
    projects: {
        title: "Featured Projects",
        items: [
            {
                title: "Service Cloud Implementation",
                shortDescription: "Implemented Service Cloud solutions including Legacy Routing and Agentforce configurations.",
                // Detailed description for the modal
                longDescription: "Led the end-to-end implementation of Salesforce Service Cloud for a major client. This involved configuring complex routing logic using Legacy Routing and setting up Agentforce for automated customer support. The solution significantly reduced case resolution time and improved agent productivity.",
                features: [
                    "Automated Case Routing",
                    "Agentforce Configuration",
                    "Omni-Channel Setup",
                    "Custom LWC Dashboards"
                ],
                technologies: ["Salesforce", "Service Cloud", "Apex", "LWC"],
                image: "https://via.placeholder.com/600x400/1a1a1a/333333?text=Service+Cloud",
                liveLink: "#",
                repoLink: "#"
            },
            {
                title: "Component Modernization",
                shortDescription: "Refactored legacy Visualforce pages into modern Lightning Web Components (LWC).",
                longDescription: "Undertook a major initiative to modernize the legacy codebase. Migrated over 20 complex Visualforce pages to Lightning Web Components (LWC), resulting in a 40% improvement in page load times and a more responsive user interface.",
                features: [
                    "Visualforce to LWC Migration",
                    "Performance Optimization",
                    "Responsive Design",
                    "Reusable Component Library"
                ],
                technologies: ["LWC", "JavaScript", "HTML/CSS", "SLDS"],
                image: "https://via.placeholder.com/600x400/1a1a1a/333333?text=LWC+Migration",
                liveLink: "#",
                repoLink: "#"
            },
            {
                title: "Salesforce Automation Suite",
                shortDescription: "Automated business processes using Apex Triggers, Flows, and Batch Classes.",
                longDescription: "Designed and built a comprehensive automation suite to streamline business operations. Utilized Apex Triggers for complex logic, Flows for user-guided processes, and Batch Apex for high-volume data processing.",
                features: [
                    "Complex Apex Triggers",
                    "Flow Builder Automation",
                    "Batch Data Processing",
                    "Scheduled Jobs"
                ],
                technologies: ["Apex", "Flows", "SOQL", "Unit Testing"],
                image: "https://via.placeholder.com/600x400/1a1a1a/333333?text=Automation",
                liveLink: "#",
                repoLink: "#"
            }
        ]
    },

    // Skills Section
    skills: {
        title: "Skills",
        categories: [
            {
                name: "Salesforce",
                items: ["Apex", "LWC", "Aura Components", "Visualforce", "SOQL/SOSL", "Flows", "Service Cloud", "Agentforce"]
            },
            {
                name: "Languages",
                items: ["Java", "C", "C++", "JavaScript", "HTML", "CSS"]
            },
            {
                name: "Certifications",
                items: ["Platform Developer II", "Platform Developer I", "Administrator", "Agentforce Specialist", "AI Associate"]
            }
        ]
    },

    // Contact Section
    contact: {
        title: "Get In Touch",
        description: "I'm currently open to new opportunities in the Salesforce ecosystem. Feel free to reach out!",
        email: "veerupal2323@gmail.com",
        phone: "+91 98765 43210" // Update this with your real number
    }
};
