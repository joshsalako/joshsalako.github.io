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
    <div class="background-wrapper"></div>
    <header>
        <div class="header-content">
            <div class="profile-img-container">
                <div class="orbit"></div>
                <img src="./images/joshua.jpg" alt="Joshua Salako" class="profile-img">
                <img src="./images/django.png" alt="Django" class="orbit-image orbit-django">
                <img src="./images/flutter.png" alt="Flutter" class="orbit-image orbit-flutter">
                <img src="./images/tensor.png" alt="TensorFlow" class="orbit-image orbit-tensor">
                <img src="./images/pytorch.png" alt="PyTorch" class="orbit-image orbit-pytorch">
                <img src="./images/python.png" alt="Python" class="orbit-image orbit-python">
            </div>
            <h1><span class="intro-text">I am  </span><span class="typing-text"></span><span class="cursor">|</span></h1>
            <p style="font-size: 24px;">AI Researcher | Mobile Developer | Backend Developer</p>
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
                    Aspiring PhD student in Electrical and Computer Engineering, dedicated to researching and developing intelligent solutions that address real-world challenges and drive meaningful impact.
                </p>
                <div class="read-more-content">
                    <p>
                        With expertise in machine learning, deep learning, computer vision, and natural language processing, I focus on building efficient, interpretable, and accessible AI systems. My work is guided by a commitment to leveraging technology for social good, empowering underserved communities, and advancing sustainable development through innovative applications of artificial intelligence.
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
    const month = today.getMonth();
    const day = today.getDate();
    return (month === 11) || (month === 0 && day <= 7);
}

function createSnowflakes() {
    if (!isHolidaySeason()) return;

    const snowContainer = document.createElement('div');
    snowContainer.className = 'snow-container';
    document.body.appendChild(snowContainer);

    const particlesPerThousandPixels = 0.1;
    const fallSpeed = 1.25;
    const maxSnowflakes = 200;
    const snowflakes = [];

    let snowflakeInterval;
    let isTabActive = true;

    function resetSnowflake(snowflake) {
        const size = Math.random() * 5 + 1;
        const viewportWidth = window.innerWidth - size;
        const viewportHeight = window.innerHeight;

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * viewportWidth}px`;
        snowflake.style.top = `-${size}px`;

        const animationDuration = (Math.random() * 3 + 2) / fallSpeed;
        snowflake.style.animationDuration = `${animationDuration}s`;
        snowflake.style.animationTimingFunction = 'linear';
        snowflake.style.animationName = Math.random() < 0.5 ? 'fall' : 'diagonal-fall';

        setTimeout(() => {
            if (parseInt(snowflake.style.top, 10) < viewportHeight) {
                resetSnowflake(snowflake);
            } else {
                snowflake.remove();
                const index = snowflakes.indexOf(snowflake);
                if (index > -1) snowflakes.splice(index, 1);
            }
        }, animationDuration * 1000);
    }

    function createSnowflake() {
        if (snowflakes.length < maxSnowflakes) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflakes.push(snowflake);
            snowContainer.appendChild(snowflake);
            resetSnowflake(snowflake);
        }
    }

    function generateSnowflakes() {
        const numberOfParticles = Math.ceil((window.innerWidth * window.innerHeight) / 1000) * particlesPerThousandPixels;
        const interval = 5000 / numberOfParticles;

        clearInterval(snowflakeInterval);
        snowflakeInterval = setInterval(() => {
            if (isTabActive && snowflakes.length < maxSnowflakes) {
                requestAnimationFrame(createSnowflake);
            }
        }, interval);
    }

    function handleVisibilityChange() {
        isTabActive = !document.hidden;
        if (isTabActive) {
            generateSnowflakes();
        } else {
            clearInterval(snowflakeInterval);
        }
    }

    generateSnowflakes();

    window.addEventListener('resize', () => {
        clearInterval(snowflakeInterval);
        setTimeout(generateSnowflakes, 1000);
    });

    document.addEventListener('visibilitychange', handleVisibilityChange);
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
    const headerContainer = document.querySelector('.container');
    if (headerContainer) {
        headerContainer.insertAdjacentHTML('afterbegin', headerComponent);
        setTimeout(initTypewriter, 500);
    }
}

// Add this function to initialize the typing animation
function initTypewriter() {
    const text = "Josh Salako";
    const typingText = document.querySelector('.typing-text');
    const cursor = document.querySelector('.cursor');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        } else {
            // After typing is complete, wait 5 seconds then remove the blinking animation
            setTimeout(() => {
                cursor.style.animation = 'none';
                cursor.style.opacity = '0';
            }, 5000);
        }
    }

    if (typingText) {
        typingText.textContent = '';
        typeWriter();
    }
}

// Add this to the bottom of components.js
document.addEventListener('DOMContentLoaded', function () {
    const text = "Josh Salako";
    const typingText = document.querySelector('.typing-text');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150); // Adjust speed of typing here
        }
    }

    typeWriter();
}); 