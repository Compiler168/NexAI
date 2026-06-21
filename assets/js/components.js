document.addEventListener('DOMContentLoaded', () => {
  // --- Accordion Logic (FAQ) ---
  const accordions = document.querySelectorAll('.accordion');
  
  accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion-header');
    
    header.addEventListener('click', () => {
      // Close other accordions
      accordions.forEach(other => {
        if (other !== accordion && other.classList.contains('active')) {
          other.classList.remove('active');
          const otherBody = other.querySelector('.accordion-body');
          otherBody.style.maxHeight = null;
        }
      });
      
      // Toggle current
      accordion.classList.toggle('active');
      const body = accordion.querySelector('.accordion-body');
      
      if (accordion.classList.contains('active')) {
        body.style.maxHeight = body.scrollHeight + "px";
      } else {
        body.style.maxHeight = null;
      }
    });
  });

  // --- Portfolio Filtering ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterItems = document.querySelectorAll('.filter-item');
  
  if (filterBtns.length > 0 && filterItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        filterItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300); // match transition duration
          }
        });
      });
    });
  }
});
