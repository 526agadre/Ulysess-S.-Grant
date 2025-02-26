// Get all accordion buttons
var acc = document.getElementsByClassName("accordion");

// Add click event listener for each accordion button
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling; // Get the panel associated with the clicked button
       
        // Toggle the panel display (open or close)
        if (panel.style.display === "block") {
            panel.style.display = "none";  // Close the panel
        } else {
            panel.style.display = "block";  // Open the panel
        }
    });
}