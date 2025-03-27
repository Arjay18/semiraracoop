// Mobile Menu JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const closeButton = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const dropdownToggles = document.querySelectorAll('.mobile-nav-item.has-dropdown .dropdown-toggle');

    // Open mobile menu
    menuButton.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close mobile menu
    closeButton.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
        // Close all dropdowns when closing menu
        dropdownToggles.forEach(toggle => {
            const dropdown = toggle.nextElementSibling;
            const icon = toggle.querySelector('.dropdown-icon');
            dropdown.classList.remove('active');
            icon.classList.remove('active');
        });
    });

    // Handle dropdown toggles
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.nextElementSibling;
            const icon = this.querySelector('.dropdown-icon');
            
            // Close other dropdowns
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    const otherDropdown = otherToggle.nextElementSibling;
                    const otherIcon = otherToggle.querySelector('.dropdown-icon');
                    otherDropdown.classList.remove('active');
                    otherIcon.classList.remove('active');
                }
            });

            // Toggle current dropdown
            dropdown.classList.toggle('active');
            icon.classList.toggle('active');
        });
    });
}); 