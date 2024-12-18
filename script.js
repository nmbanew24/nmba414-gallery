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
    js = d.createElement(s);
    js.id = id;
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
const themes = [{
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

menuBtn ? .addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuBtn ? .contains(e.target) && !mobileNav ? .contains(e.target)) {
        menuBtn ? .classList.remove('active');
        mobileNav ? .classList.remove('active');
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

modalClose ? .addEventListener('click', closeModal);
modal ? .addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Theme Toggle
const themeBtn = document.querySelector('.theme-btn');
themeBtn ? .addEventListener('click', changeTheme);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            menuBtn ? .classList.remove('active');
            mobileNav ? .classList.remove('active');
        }
    });
});

// Quick Navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.scroll;
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// View Switching
const viewBtns = document.querySelectorAll('.view-btn');
const videoGrid = document.querySelector('.video-grid');

viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        viewBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (view === 'list') {
            videoGrid.style.gridTemplateColumns = '1fr';
            #09ff00eoGrid.style.maxWidth = '800px';
            videoGrid.style.margin = '0 auto';
            document.querySelectorAll('.video-container').forEach(container => {
                container.style.maxWidth = '100%';
                container.style.display = 'flex';
                container.style.gap = '1rem';
                container.style.alignItems = 'center';
            });
        } else {
            videoGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))';
            videoGrid.style.maxWidth = 'none';
            videoGrid.style.margin = '0';
            document.querySelectorAll('.video-container').forEach(container => {
                container.style.maxWidth = '250px';
                container.style.display = 'block';
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.video-container').forEach(container => {
    observer.observe(container);
});

// Theme color cycling
let currentThemeIndex = 0;
const themes = [{
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

function cycleTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const theme = themes[currentThemeIndex];
    document.documentElement.style.setProperty('--neon-text', theme.primary);
    document.documentElement.style.setProperty('--neon-border', theme.secondary);
    document.documentElement.style.setProperty('--neon-glow', theme.accent);
}

// Auto cycle theme every 30 seconds
setInterval(cycleTheme, 30000);

// Mouse trail effect
const trail = document.createElement('div');
trail.className = 'mouse-trail';
document.body.appendChild(trail);

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    trail.style.left = mouseX + 'px';
    trail.style.top = mouseY + 'px';
});

// Interactive Background
const bgCanvas = document.getElementById('bgCanvas');
const bgCtx = bgCanvas.getContext('2d');
const particles = [];

function initBackground() {
    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;

    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * bgCanvas.width,
            y: Math.random() * bgCanvas.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 2 - 1,
            color: getComputedStyle(document.documentElement).getPropertyValue('--neon-glow')
        });
    }
}

function animateBackground() {
    bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    
    particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0 || particle.x > bgCanvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > bgCanvas.height) particle.speedY *= -1;
        
        bgCtx.beginPath();
        bgCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        bgCtx.fillStyle = particle.color;
        bgCtx.fill();
    });
    
    requestAnimationFrame(animateBackground);
}

// Music Visualizer
const visualizer = document.getElementById('visualizer');
const visualizerCtx = visualizer.getContext('2d');
let audioContext;
let analyser;
let dataArray;
let isPlaying = false;

function initVisualizer() {
    visualizer.width = 200;
    visualizer.height = 40;
    
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 128;
    
    dataArray = new Uint8Array(analyser.frequencyBinCount);
}

function drawVisualizer() {
    const barWidth = visualizer.width / analyser.frequencyBinCount;
    const barGap = 2;
    
    visualizerCtx.clearRect(0, 0, visualizer.width, visualizer.height);
    
    analyser.getByteFrequencyData(dataArray);
    
    dataArray.forEach((value, index) => {
        const barHeight = (value / 255) * visualizer.height;
        const x = index * (barWidth + barGap);
        const y = visualizer.height - barHeight;
        
        const gradient = visualizerCtx.createLinearGradient(0, y, 0, visualizer.height);
        gradient.addColorStop(0, getComputedStyle(document.documentElement).getPropertyValue('--neon-text'));
        gradient.addColorStop(1, getComputedStyle(document.documentElement).getPropertyValue('--neon-glow'));
        
        visualizerCtx.fillStyle = gradient;
        visualizerCtx.fillRect(x, y, barWidth, barHeight);
    });
    
    requestAnimationFrame(drawVisualizer);
}

// Preview Functionality
const previewModal = document.querySelector('.preview-modal');
const previewVideo = document.querySelector('.preview-video');
const previewTitle = document.querySelector('.preview-title');
const previewDescription = document.querySelector('.preview-description');

document.querySelectorAll('.video-container').forEach(container => {
    container.addEventListener('mouseenter', e => {
        const rect = container.getBoundingClientRect();
        container.style.setProperty('--mouse-x', e.clientX - rect.left + 'px');
        container.style.setProperty('--mouse-y', e.clientY - rect.top + 'px');
    });
    
    container.addEventListener('mousemove', e => {
        const rect = container.getBoundingClientRect();
        container.style.setProperty('--mouse-x', e.clientX - rect.left + 'px');
        container.style.setProperty('--mouse-y', e.clientY - rect.top + 'px');
    });
    
    container.addEventListener('click', () => {
        const videoUrl = container.querySelector('.fb-video').dataset.href;
        const title = container.querySelector('.video-title').textContent;
        
        previewVideo.innerHTML = `
            <div class="fb-video" 
                 data-href="${videoUrl}"
                 data-width="auto"
                 data-show-text="false">
            </div>`;
        
        previewTitle.textContent = title;
        previewDescription.textContent = 'Experience the rhythm and energy of NMBA414 in this captivating performance.';
        
        previewModal.style.display = 'flex';
        FB.XFBML.parse(previewVideo);
    });
});

document.querySelector('.preview-close').addEventListener('click', () => {
    previewModal.style.display = 'none';
    previewVideo.innerHTML = '';
});

// Floating Controls
document.querySelector('.theme-btn').addEventListener('click', cycleTheme);

document.querySelector('.effect-btn').addEventListener('click', () => {
    document.body.classList.toggle('effects-disabled');
});

document.querySelector('.fullscreen-btn').addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

// Initialize Everything
window.addEventListener('load', () => {
    initBackground();
    animateBackground();
    initVisualizer();
    drawVisualizer();
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

window.addEventListener('resize', () => {
    initBackground();
});