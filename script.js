// Initialize Facebook SDK
window.fbAsyncInit = function() {
    FB.init({
        appId: '920147649688628', // You'll need to replace this with your Facebook App ID
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v12.0'
    });

    // Parse Facebook videos after SDK is loaded
    FB.XFBML.parse();
};

// Load Facebook SDK
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Refresh Facebook embeds when needed
function refreshFacebookEmbeds() {
    if (window.FB) {
        FB.XFBML.parse();
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Add loading animation
function addLoadingAnimation() {
    const elements = document.querySelectorAll('.neon-text, .neon-box');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.animation = `fadeIn 0.5s ease forwards ${index * 0.2}s`;
    });
}

// Custom cursor effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    document.body.appendChild(cursor);

    setTimeout(() => {
        cursor.remove();
    }, 1000);
});

// Add this CSS to your styles.css
const style = document.createElement('style');
style.textContent = `
    .cursor-trail {
        width: 10px;
        height: 10px;
        background: var(--neon-color);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        animation: trail 1s linear forwards;
    }

    @keyframes trail {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.1);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Load Facebook videos
function loadFacebookVideos() {
    const videoContainer = document.getElementById('videoContainer');
    
    // Add your Facebook video URLs here
    const videoUrls = [
        'https://www.facebook.com/NMBA414/videos/2245173122534355/',
        'https://www.facebook.com/NMBA414/videos/524709340555983/',
        'https://www.facebook.com/NMBA414/videos/933494362172029/',
        'https://www.facebook.com/NMBA414/videos/914182260649317/',
        'https://www.facebook.com/NMBA414/videos/1685612562295619/',
        'https://www.facebook.com/NMBA414/videos/1901804176964704/',
        'https://www.facebook.com/NMBA414/videos/839087814747422/'
        // Add more video URLs as needed
    ];

    videoUrls.forEach(url => {
        const videoWrapper = document.createElement('div');
        videoWrapper.className = 'video-container';
        
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false`;
        iframe.setAttribute('allowfullscreen', 'true');
        iframe.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media; picture-in-picture');
        
        videoWrapper.appendChild(iframe);
        videoContainer.appendChild(videoWrapper);
    });
}

// Theme Management
const themes = [
    {
        primary: 'rgb(66, 247, 21)',
        secondary: 'rgb(15, 255, 7)',
        accent: 'rgb(107, 0, 179)'
    },
    {
        primary: '#0ff',
        secondary: '#08f',
        accent: '#f0f'
    },
    {
        primary: '#ff3d00',
        secondary: '#ff9100',
        accent: '#ffea00'
    }
];

let currentTheme = 0;

function changeTheme() {
    currentTheme = (currentTheme + 1) % themes.length;
    const theme = themes[currentTheme];
    
    document.documentElement.style.setProperty('--neon-color', theme.primary);
    document.documentElement.style.setProperty('--neon-border', theme.secondary);
    document.documentElement.style.setProperty('--neon-hover', theme.accent);
}

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loading-screen').classList.add('hidden');
    }, 1500);
});

// Mobile Menu
const menuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

menuBtn?.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuBtn?.contains(e.target) && !mobileNav?.contains(e.target)) {
        menuBtn?.classList.remove('active');
        mobileNav?.classList.remove('active');
    }
});

// Video Modal
const modal = document.querySelector('.video-modal');
const modalClose = document.querySelector('.modal-close');
const modalVideoContainer = document.querySelector('.modal-video-container');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');

function openModal(videoUrl, title, description) {
    modalVideoContainer.innerHTML = `<iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    modalVideoContainer.innerHTML = '';
    document.body.style.overflow = '';
}

modalClose?.addEventListener('click', closeModal);
modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Theme Toggle
const themeBtn = document.querySelector('.theme-btn');
themeBtn?.addEventListener('click', changeTheme);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            menuBtn?.classList.remove('active');
            mobileNav?.classList.remove('active');
        }
    });
});

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    addLoadingAnimation();
    loadFacebookVideos();

    // Add loading animation for videos
    const videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach(container => {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
    });

    // Fade in videos with delay
    setTimeout(() => {
        videoContainers.forEach((container, index) => {
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 500);
});
