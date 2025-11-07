// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize both carousels
    initCarousel('quotations-mobile');
    initCarousel('challenge-rooms-mobile');
    
    function initCarousel(containerClass) {
        const container = document.querySelector(`.${containerClass}`);
        if (!container) {
            console.log(`Container ${containerClass} not found`);
            return;
        }
        
        const track = container.querySelector('.carousel-track');
        const items = container.querySelectorAll('.carousel-item');
        const dots = container.querySelectorAll('.carousel-dot');
        const prevBtn = container.querySelector('.carousel-arrow.prev');
        const nextBtn = container.querySelector('.carousel-arrow.next');
        
        if (!track || items.length === 0) {
            console.log(`Carousel elements not found in ${containerClass}`);
            return;
        }
        
        let currentIndex = 0;
        const totalItems = items.length;
        
        function updateCarousel() {
            // Move the track to show the current item
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Update active dot
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
            
            // Show/hide arrows based on position
            if (prevBtn) {
                prevBtn.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
            }
            if (nextBtn) {
                nextBtn.style.visibility = currentIndex === totalItems - 1 ? 'hidden' : 'visible';
            }
        }
        
        // Event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
        });
        
        // Event listeners for arrows
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                }
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentIndex < totalItems - 1) {
                    currentIndex++;
                    updateCarousel();
                }
            });
        }
        
        // Initialize the carousel
        updateCarousel();
        
        console.log(`Carousel ${containerClass} initialized with ${totalItems} items`);
    }
});


// Nav bar menu for mobile

// Mobile menu functionality
function openNav() {
  document.getElementById("navbar-mobile").classList.add("active");
}

function closeNav() {
  document.getElementById("navbar-mobile").classList.remove("active");
}