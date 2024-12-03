// Navigation Components
const navigationComponent = `
    <div class="nav-wrapper"></div>
    <span class="hamburger" onclick="openNav()">
        <i class="fas fa-bars"></i>
    </span>

    <div id="mySidenav" class="side-menu">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <h2>Resume</h2>
        <a href="./JOSHUA-SALAKO-AI.pdf" target="_blank">
            <i class="fas fa-file-pdf"></i> AI Resume
        </a>
        <a href="./JOSHUA-SALAKO-MOBILE.pdf" target="_blank">
            <i class="fas fa-file-pdf"></i> Mobile Dev Resume
        </a>
        <a href="./JOSHUA-SALAKO-BACKEND.pdf" target="_blank">
            <i class="fas fa-file-pdf"></i> Backend Resume
        </a>
    </div>

    <nav class="nav-menu">
        <a href="index.html">Home</a>
        <a href="projects.html">Projects</a>
        <a href="certifications.html">Certifications</a>
        <a href="gallery.html">Gallery</a>
    </nav>

    <span class="theme-toggle" onclick="toggleTheme()">
        <i class="fas fa-moon"></i>
    </span>
`;

// Header Component
const headerComponent = `
    <header>
        <div class="header-content">
            <img src="./avatar.png" alt="Joshua Salako" class="profile-img">
            <h1>Joshua Salako</h1>
            <p>AI Researcher | Mobile Developer | Backend Developer</p>
            <div class="social-links">
                <a href="https://x.com/josh_salako" target="_blank" title="Twitter/X">
                    <i class="fab fa-x-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/salakojoshua" target="_blank" title="LinkedIn">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://www.github.com/joshsalako" target="_blank" title="GitHub">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://scholar.google.com/citations?user=fWhDF4cAAAAJ&hl=en" target="_blank" title="Google Scholar">
                    <i class="fas fa-graduation-cap"></i>
                </a>
                <a href="mailto:salakojoshua1234@gmail.com" title="Email">
                    <i class="fas fa-envelope"></i>
                </a>
            </div>
            <div class="about-content">
                <p>
                    I am a highly accomplished AI and Software Engineer with over 5 years of experience in developing
                    innovative solutions. Combining my electrical engineering background with expertise in AI/ML, I
                    specialize in creating scalable applications that drive business growth and enhance user engagement.
                </p>
                <div class="read-more-content">
                    <p>
                        My technical toolkit includes proficiency in TensorFlow, PyTorch, and Keras for AI/ML
                        development, alongside strong programming skills in Python and Dart. I have a proven track record of
                        implementing efficient algorithms and collaborating across teams to deliver impactful solutions.
                    </p>
                    <p>
                        Passionate about leveraging cutting-edge technology to improve lives, I remain committed to
                        staying current with emerging industry trends while focusing on creating meaningful technological
                        advancements that solve real-world problems.
                    </p>
                </div>
                <span class="read-more-btn" onclick="toggleReadMore(this)">Read More</span>
            </div>
        </div>
    </header>
`;

// Function to load navigation
function loadNavigation() {
    // Insert the navigation at the start of the body
    document.body.insertAdjacentHTML('afterbegin', navigationComponent);
}

// Function to load header (for home page only)
function loadHeader() {
    // Insert the header after the navigation
    document.querySelector('.nav-menu').insertAdjacentHTML('afterend', headerComponent);
} 