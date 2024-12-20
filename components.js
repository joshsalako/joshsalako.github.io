// Navigation Components
const navigationComponent = `
    <div class="background-wrapper"></div>
    <div class="nav-wrapper"></div>
    <span class="hamburger" onclick="openNav()">
        <i class="fas fa-bars"></i>
    </span>

    <div id="mySidenav" class="side-menu">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <h2>Resume</h2>
        <a href="./files/JOSHUA-SALAKO-AI.pdf" target="_blank">
            <i class="fas fa-file-pdf"></i> AI Resume
        </a>
        <a href="./files/JOSHUA-SALAKO-MOBILE.pdf" target="_blank">
            <i class="fas fa-file-pdf"></i> Mobile Dev Resume
        </a>
        <a href="./files/JOSHUA-SALAKO-BACKEND.pdf" target="_blank">
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
            <div class="profile-img-container">
                <div class="orbit"></div>
                <img src="./images/avatar.png" alt="Joshua Salako" class="profile-img">
                <img src="./images/django.png" alt="Django" class="orbit-image orbit-django">
                <img src="./images/flutter.png" alt="Flutter" class="orbit-image orbit-flutter">
                <img src="./images/tensor.png" alt="TensorFlow" class="orbit-image orbit-tensor">
                <img src="./images/pytorch.png" alt="PyTorch" class="orbit-image orbit-pytorch">
            </div>
            <h1>Josh Salako</h1>
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
                    I am a driven AI researcher and software engineer passionate about developing and applying cutting-edge AI solutions to real-world challenges.
                </p>
                <div class="read-more-content">
                    <p>
                        I specializes in machine learning, deep learning, computer vision, and natural language processing. 
                        I am committed to building AI for social good, while focusing on creating accessible and impactful technologies for underserved communities.
                    </p>
                </div>
                <span class="read-more-btn" onclick="toggleReadMore(this)">Read More</span>
            </div>
        </div>
    </header>
`;

// Snowflakes Component
function isHolidaySeason() {
    const today = new Date();
    const month = today.getMonth(); // 0-11
    const day = today.getDate();
    
    // Check if date is between December 1st and January 7th
    return (month === 11) || (month === 0 && day <= 7);
}

function createSnowflakes() {
    if (!isHolidaySeason()) return;

    const snowflakesContainer = document.createElement('div');
    snowflakesContainer.id = 'snowflakes-container';
    document.body.appendChild(snowflakesContainer);

    const snowflakes = '❅❆❄';
    const numberOfSnowflakes = 30;  // Increased for more variety
    const fallPatterns = ['fall-1', 'fall-2', 'fall-3', 'fall-4'];

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake ' + fallPatterns[Math.floor(Math.random() * fallPatterns.length)];
        snowflake.style.left = Math.random() * 100 + '%';
        // Vary the animation duration between 18-25 seconds
        snowflake.style.animationDuration = (18 + Math.random() * 7) + 's';
        // Add a random delay to start
        snowflake.style.animationDelay = (Math.random() * 10) + 's';
        snowflake.innerHTML = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        snowflakesContainer.appendChild(snowflake);
    }
}

function createChristmasTree() {
    if (!isHolidaySeason()) return;

    const tree = document.createElement('div');
    tree.className = 'christmas-tree';
    tree.innerHTML = '🎄';
    tree.title = 'Merry Christmas!';
    
    // Optional: Add click handler for future interactivity
    tree.addEventListener('click', () => {
        // You can add interactive features here later
        tree.style.transform = 'scale(1.2) rotate(10deg)';
        setTimeout(() => {
            tree.style.transform = '';
        }, 300);
    });

    document.body.appendChild(tree);
}

// Function to load navigation
function loadNavigation() {
    // Insert the navigation at the start of the body
    document.body.insertAdjacentHTML('afterbegin', navigationComponent);
    // Add snowflakes if it's holiday season
    createSnowflakes();
    // Add Christmas tree
    createChristmasTree();
}

// Function to load header (for home page only)
function loadHeader() {
    // Insert the header after the navigation
    document.querySelector('.nav-menu').insertAdjacentHTML('afterend', headerComponent);
} 