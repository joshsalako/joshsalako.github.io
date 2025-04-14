// Cookie management functions
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-toggle i');

    body.classList.toggle('dark-theme');

    // Toggle between moon and sun icons
    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        setCookie('theme', 'dark', 30); // Store theme preference for 30 days
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        setCookie('theme', 'light', 30);
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function toggleReadMore(btn) {
    const content = btn.previousElementSibling;
    content.classList.toggle('show');
    btn.textContent = content.classList.contains('show') ? 'Read Less' : 'Read More';

    // Store read more state
    const contentId = content.getAttribute('id');
    if (contentId) {
        setCookie(`readMore_${contentId}`, content.classList.contains('show') ? 'true' : 'false', 1);
    }
}

// Close side menu when clicking outside
document.addEventListener('click', function (event) {
    const sideNav = document.getElementById('mySidenav');
    const hamburger = document.querySelector('.hamburger');

    if (sideNav.style.width === "250px" &&
        !sideNav.contains(event.target) &&
        !hamburger.contains(event.target)) {
        closeNav();
    }
});

// Initialize page state from cookies
document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme
    const savedTheme = getCookie('theme');
    const themeIcon = document.querySelector('.theme-toggle i');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    // Restore read more states
    document.querySelectorAll('.read-more-content').forEach(content => {
        const contentId = content.getAttribute('id');
        if (contentId) {
            const savedState = getCookie(`readMore_${contentId}`);
            if (savedState === 'true') {
                content.classList.add('show');
                const btn = content.nextElementSibling;
                if (btn) btn.textContent = 'Read Less';
            }
        }
    });
});

// Cache navigation and header components
const cachedComponents = {};

async function loadComponent(name) {
    // Check if component is cached
    const cached = getCookie(`cached_${name}`);
    if (cached) {
        return cached;
    }

    try {
        const response = await fetch(`components/${name}.html`);
        const html = await response.text();
        // Cache for 1 day
        setCookie(`cached_${name}`, html, 1);
        return html;
    } catch (error) {
        console.error(`Error loading ${name}:`, error);
        return null;
    }
}

async function loadNavigation() {
    const navHtml = await loadComponent('navigation');
    if (navHtml) {
        document.body.insertAdjacentHTML('afterbegin', navHtml);
    }
}

async function loadHeader() {
    const headerHtml = await loadComponent('header');
    if (headerHtml) {
        document.querySelector('.container').insertAdjacentHTML('afterbegin', headerHtml);
    }
}

// Redirection configuration
const REDIRECT_CONFIG = {
    // Define redirect rules for different pages
    // You can customize these URLs later
    home: 'https://joshuasalako.vercel.app/',
    projects: 'https://joshuasalako.vercel.app/projects',
    certifications: 'https://joshuasalako.vercel.app/certifications',
    gallery: 'https://joshuasalako.vercel.app/gallery'
};

// Function to handle page-specific redirects
function handleRedirect() {
    // Get the current page path
    const path = window.location.pathname;

    // Determine which page is being visited
    if (path.includes('index.html') || path === '/') {
        window.location.href = REDIRECT_CONFIG.home;
    } else if (path.includes('projects.html')) {
        window.location.href = REDIRECT_CONFIG.projects;
    } else if (path.includes('certifications.html')) {
        window.location.href = REDIRECT_CONFIG.certifications;
    } else if (path.includes('gallery.html')) {
        window.location.href = REDIRECT_CONFIG.gallery;
    }
}

// Add redirect logic to run when the page loads
document.addEventListener('DOMContentLoaded', handleRedirect); 