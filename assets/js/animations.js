document.addEventListener('DOMContentLoaded', () => {
  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optional: Stop observing once revealed
        // observer.unobserve(entry.target); 
      }
    });
  };

  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // --- Animated Counters ---
  const counters = document.querySelectorAll('.counter-value');
  
  const counterCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetValue = parseInt(target.getAttribute('data-target'));
        const duration = 2000; // ms
        const increment = targetValue / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
          current += increment;
          if (current < targetValue) {
            target.innerText = Math.ceil(current) + (target.getAttribute('data-suffix') || '');
            requestAnimationFrame(updateCounter);
          } else {
            target.innerText = targetValue + (target.getAttribute('data-suffix') || '');
          }
        };
        
        updateCounter();
        observer.unobserve(target); // Only animate once
      }
    });
  };

  const counterObserver = new IntersectionObserver(counterCallback, { threshold: 0.5 });
  
  counters.forEach(counter => counterObserver.observe(counter));
});
