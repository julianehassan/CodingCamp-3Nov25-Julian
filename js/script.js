// Wait for the DOM to be fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function() {

    // --- Requirement #4: Welcoming Speech ---
    // We check if the 'user-name' element exists to run this only on the home page
    const userNameElement = document.getElementById("user-name");
    
    if (userNameElement) {
        // Ask for the user's name
        let userName = prompt("Please enter your name:", "Guest");
        
        // If the user clicks "Cancel" or enters nothing, keep it as "Guest"
        if (userName === null || userName.trim() === "") {
            userName = "Guest";
        }
        
        // Set the name in the H1 tag
        userNameElement.textContent = userName;
    }


    // --- Requirement #5: Validate Form & Show Value ---
    // We check if the 'message-form' element exists to run this only on the home page
    const messageForm = document.getElementById("message-form");
    
    if (messageForm) {
        // Add a submit event listener to the form
        messageForm.addEventListener("submit", function(event) {
            // Prevent the form from actually submitting (reloading the page)
            event.preventDefault();

            // 1. Get values from the form
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const message = document.getElementById("message").value;

            // 2. Validate Form
            if (name === "" || email === "" || phone === "" || message === "") {
                alert("All fields are required! Please fill out the entire form.");
                return; // Stop the function if validation fails
            }

            // 3. Show value on the HTML (in the output box)
            const outputElement = document.getElementById("form-output");
            const currentTime = new Date().toLocaleString("en-GB"); // Format as DD/MM/YYYY, HH:MM:SS

            outputElement.innerHTML = `
                <p><strong>Current time:</strong> ${currentTime}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phone}</p>
                <p><strong>Message:</strong> ${message}</p>
            `;
            
            // Optional: Clear the form fields after successful submission
            messageForm.reset();
        });
    }

});
