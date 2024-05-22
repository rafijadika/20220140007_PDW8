document.addEventListener('DOMContentLoaded', function () {
    const navigationLinks = document.querySelectorAll('.navigation ul li a');
    const sections = document.querySelectorAll('.content');
    const toggleButton = document.querySelector('.topbar .toggle');
    const navigation = document.querySelector('.navigation');
    const contactForm = document.getElementById('contactForm');

    // Navigation link click event
    navigationLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const section = this.getAttribute('data-section');

            // Remove active class from all links
            navigationLinks.forEach(link => link.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');

            // Hide all sections
            sections.forEach(section => section.style.display = 'none');
            // Show the selected section
            document.getElementById(section).style.display = 'block';
        });
    });

    // Toggle button click event
    toggleButton.addEventListener('click', function () {
        this.classList.toggle('active');
        navigation.classList.toggle('active');
    });

    // Contact form submit event
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Show an alert with the form data
        Swal.fire({
            title: 'Form Submitted',
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
            icon: 'success'
        });

        // Reset the form
        contactForm.reset();
    });
});
