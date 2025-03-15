// JavaScript: script.js

// Get elements
const colorInput = document.getElementById('colorInput');
const changeColorBtn = document.getElementById('changeColorBtn');

// Function to change CSS variables dynamically
function changeColor() {
  const hexColor = colorInput.value.trim();

  // Validate the hex color code
  if (/^#[0-9A-F]{6}$/i.test(hexColor)) {
    // Change the CSS variables
    document.documentElement.style.setProperty('--color', hexColor);
    // Optionally, change other colors as well
    // document.documentElement.style.setProperty('--secondary-color', hexColor);
    // document.documentElement.style.setProperty('--background-color', hexColor);
  } else {
    alert('Please enter a valid hex color code (e.g., #3498db)');
  }
}

// Event listener for the button
changeColorBtn.addEventListener('click', changeColor);