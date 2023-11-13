function validateEmail(input) {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    const feedback = document.querySelector('.feedback');

    if (emailRegex.test(input.value)) {
        // Email is valid
        feedback.textContent = ''; // Clear any existing feedback
    } else {
        // Email is not valid
        feedback.textContent = 'Enter a valid email address';
    }
}