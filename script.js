document.addEventListener("DOMContentLoaded", function () {
    let homeSection = document.getElementById("Home"); // Get the Home section
    let colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a8", "#f3ff33"]; // Background colors list
    let index = 0;

    function changeBackgroundColor() {
        homeSection.style.background = colors[index]; // Change background color
        index = (index + 1) % colors.length; // Loop through colors
    }

    changeBackgroundColor(); // Set first color
    setInterval(changeBackgroundColor, 3000); // Change every 3 seconds
});
