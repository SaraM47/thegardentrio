"use strict";

// Function to filter the products in shop.html by adding event listeners on category links
document.addEventListener("DOMContentLoaded", () => {
    const categoryLinks = document.querySelectorAll(".sidebar-content a"); // All links in the list menu
    const productCards = document.querySelectorAll(".product-card"); // Select all product cards

    categoryLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent the default link behavior (page jumping)
            const category = link.getAttribute("data-category"); // Get the category

            productCards.forEach(card => {
                // Show all products if "all" is selected, otherwise filter by category
                if (category === "all" || card.classList.contains(category)) {
                    card.style.display = ""; // Reset to CSS default display
                } else {
                    card.style.display = "none"; 
                }
            });
        });
    });
});


// Function for the mobile menu
document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuIcon = document.getElementById("mobile-menu");
    const mobileLinks = document.getElementById("mobile-links");

   // Toggle the mobile menu on click
    mobileMenuIcon.addEventListener("click", () => {
        mobileLinks.classList.toggle("active");
        mobileMenuIcon.classList.toggle("active");
    });

   // Listen for screen size changes
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 935) {
            mobileLinks.classList.remove("active"); // Hides the mobile menu
            mobileMenuIcon.classList.remove("active"); // Reset the hamburger icon
        }
    });
});

// Function for the individual product pages to-cart button 
// Get the button and add a "click" event
document.addEventListener("DOMContentLoaded", () => {
    const toCartButton = document.getElementById('toCartButton');

    if (toCartButton) { // Controlls if the element exists 
        toCartButton.addEventListener('click', function() {
            window.location.href = 'shop-cart-checkout.html'; // Link to the To Cart-page
        });
    }
});


// Function for "Commission-page"
// Function to save and display the selected deadline date
function saveDeadline() {
    // Get the value of the selected date from the input field
    const deadlineDate = document.getElementById("deadline-date").value;

    // Get the element where the output message will be displayed
    const outputElement = document.getElementById("deadline-output");

    // Check if a deadline date has been selected
    if (deadlineDate) {
        // If a date is selected, display a chosen date of confirmation message 
        outputElement.innerHTML = `You have selected ${deadlineDate} as your deadline.`;
        
        // Change the text color to green for a message
        outputElement.style.color = "#048776"; 
    } else {
        // If no date is selected, display a warning message 
        outputElement.innerHTML = "Please select a deadline date.";
        
        // Change the text color to red to highlight the error message
        outputElement.style.color = "red"; 
    }
}