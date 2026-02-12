document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeInUp 0.6s ease forwards`;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

document.getElementById('applyForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        position: document.getElementById('position').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };

    let applications = JSON.parse(localStorage.getItem('applications')) || [];
    applications.push(formData);
    localStorage.setItem('applications', JSON.stringify(applications));

    this.style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';

    console.log('Application submitted:', formData);

    setTimeout(() => {
        this.style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
        this.reset();
    }, 3000);
});

document.querySelector('.cta-button').addEventListener('click', function() {
    const scrollTarget = document.getElementById('info');
    scrollTarget.scrollIntoView({ behavior: 'smooth' });
});

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 0 12px rgba(217, 70, 239, 0.3)';
    } else {
        navbar.style.boxShadow = '0 0 8px rgba(217, 70, 239, 0.2)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

document.querySelectorAll('.glowing-text').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.textShadow = `
            0 0 8px var(--neon-purple),
            0 0 15px rgba(168, 85, 247, 0.5)
        `;
    });

    element.addEventListener('mouseleave', function() {
        this.style.textShadow = '';
    });
});

function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', createRipple);
});

window.addEventListener('scroll', function() {
    const scrollY = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `0 ${scrollY * 0.5}px`;
    }
});

document.querySelectorAll('.info-card, .server-card, .staff-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.animation = 'fadeIn 0.5s ease';
});

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: rippleAnimation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes rippleAnimation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', function() {
        const platform = this.classList[1];
        alert(`Download for ${platform.charAt(0).toUpperCase() + platform.slice(1)} starting...\n\n(This is a demo - implement actual download links as needed)`);
    });
});

document.querySelectorAll('.join-btn').forEach(button => {
    button.addEventListener('click', function() {
        const serverName = this.parentElement.querySelector('h3').textContent;
        alert(`Connecting to ${serverName}...\n\n(This is a demo - implement actual server connection as needed)`);
    });
});

function updateScrollIndicator() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.pageYOffset / scrollHeight) * 100;
}

window.addEventListener('scroll', updateScrollIndicator);

// Countdown Timer
function updateCountdown() {
    const targetDate = new Date('2026-04-27T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
        const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.querySelectorAll('.countdown-item').forEach((item, index) => {
            const value = item.querySelector('.countdown-value');
            const values = [weeks, days, hours, minutes, seconds];
            value.textContent = values[index];
        });
    } else {
        document.querySelector('.countdown-title').textContent = 'Luminescent Launch - Out of beta. LIVE NOW!';
        document.querySelectorAll('.countdown-item').forEach(item => {
            item.querySelector('.countdown-value').textContent = '0';
        });
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);

console.log('%c✨ Welcome to Luminescent Network ✨', 'color: #d946ef; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #a855f7;');
console.log('%cPowered by neon purple aesthetics and smooth animations', 'color: #a855f7; font-size: 14px;');
