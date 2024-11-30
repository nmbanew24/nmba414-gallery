// Initialize Facebook SDK
window.fbAsyncInit = function() {
    FB.init({
        appId: '920147649688628', // You'll need to replace this with your Facebook App ID
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v12.0'
    });
};

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

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    addLoadingAnimation();
    loadFacebookVideos();
});
