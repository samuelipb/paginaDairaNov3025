// ============================================
// NAVEGACIÓN ACTIVA
// ============================================
function initNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-btn');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Marcar enlace activo según la página actual
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
        
        // Agregar evento de clic para cambiar estado activo
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// ============================================
// RENDERIZAR FOOTER COMPARTIDO
// ============================================
function renderFooter() {
    const placeholder = document.getElementById('footerPlaceholder');
    
    if (!placeholder) {
        return;
    }

    placeholder.innerHTML = `
        <footer>
            <div class="social-links">
                <span>S&iacute;guenos</span>
                <a href="https://www.instagram.com/raticky.lp" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="S&iacute;guenos en Instagram">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                </a>
                <a href="mailto:ratickycajas@gmail.com" title="Email" aria-label="Env&iacute;anos un email">
                    <svg viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    Email
                </a>
                <a href="tel:+573213403111" title="Tel&eacute;fono" aria-label="Ll&aacute;manos">
                    <svg viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    Tel&eacute;fono
                </a>
            </div>
            <div class="copyright">&copy; 2025 Raticky! Todos los derechos reservados.</div>
        </footer>
    `;
}

const CONFETTI_COLORS = ['#FF6B6B', '#FFBE0B', '#4ECDC4', '#5D5FEF', '#48DBFB', '#F79F1F'];

function initConfetti() {
    if (document.querySelector('.confetti-layer')) {
        return;
    }

    const layer = document.createElement('div');
    layer.className = 'confetti-layer';
    const totalPieces = 90;

    for (let i = 0; i < totalPieces; i++) {
        const piece = document.createElement('span');
        piece.className = 'confetti-piece';
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.animationDelay = `${Math.random() * 8}s`;
        piece.style.animationDuration = `${12 + Math.random() * 10}s`;
        piece.style.backgroundColor = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
        piece.style.width = `${4 + Math.random() * 6}px`;
        piece.style.height = `${8 + Math.random() * 14}px`;
        piece.style.opacity = `${0.5 + Math.random() * 0.5}`;
        piece.style.setProperty('--drift', `${Math.random() * 60 - 30}px`);
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        layer.appendChild(piece);
    }

    document.body.appendChild(layer);
}

// ============================================
// ANIMACIONES AL CARGAR LA PÁGINA
// ============================================
function initAnimations() {
    // Animación para hero section (página inicio)
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroSection.style.transition = 'all 0.6s ease';
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
        }, 100);
    }

    // Animación para tarjetas de contenido (página nosotros y otras)
    const contentCards = document.querySelectorAll('.content-card');
    if (contentCards.length > 0) {
        contentCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * (index + 1));
        });
    }
}

// ============================================
// SCROLL SUAVE PARA ENLACES INTERNOS
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// LAZY LOADING DE IMÁGENES
// ============================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// FORMULARIO DE CONTACTO (para página contacto)
// ============================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener valores del formulario
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Aquí puedes agregar la lógica para enviar el formulario
            console.log('Datos del formulario:', data);
            
            // Mostrar mensaje de éxito
            showMessage('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.', 'success');
            
            // Limpiar formulario
            contactForm.reset();
        });
    }
}

// ============================================
// MOSTRAR MENSAJES (útil para formularios)
// ============================================
function showMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#27ae60' : '#3498db'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
}

// ============================================
// MENÚ MÓVIL (opcional para futuras mejoras)
// ============================================
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
}

// ============================================
// FLIP CARDS - TARJETAS CON EFECTO VOLTEO
// ============================================
function initFlipCards() {
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
}

// ============================================
// VIDEO - CONTROL Y PLACEHOLDER
// ============================================
function initVideo() {
    const video = document.getElementById('mainVideo');
    const placeholder = document.querySelector('.video-placeholder');
    
    if (video && placeholder) {
        // Ocultar placeholder cuando el video carga
        video.addEventListener('loadeddata', () => {
            placeholder.style.display = 'none';
        });
        
        // Mostrar placeholder si hay error
        video.addEventListener('error', () => {
            placeholder.style.display = 'flex';
            placeholder.style.flexDirection = 'column';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
        });
    }
}

// ============================================
// INICIALIZAR TODO AL CARGAR LA PÁGINA
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderFooter();
    initConfetti();
    initNavigation();
    initSmoothScroll();
    initLazyLoading();
    initContactForm();
    initMobileMenu();
    initFlipCards();
    initVideo();
});

// Ejecutar animaciones después de que todo esté cargado
window.addEventListener('load', () => {
    initAnimations();
});

// ============================================
// ANIMACIONES CSS (agregar al CSS si es necesario)
// ============================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
