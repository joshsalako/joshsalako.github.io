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
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-toggle i');
    
    body.classList.toggle('dark-theme');
    
    // Toggle between moon and sun icons
    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    // Save theme preference
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Close side menu when clicking outside
document.addEventListener('click', function(event) {
    const sideNav = document.getElementById('mySidenav');
    const hamburger = document.querySelector('.hamburger');
    
    // If side menu is open and click is outside the menu and not on the hamburger
    if (sideNav.style.width === "250px" && 
        !sideNav.contains(event.target) && 
        !hamburger.contains(event.target)) {
        closeNav();
    }
});

// Check for saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.querySelector('.theme-toggle i');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}); 