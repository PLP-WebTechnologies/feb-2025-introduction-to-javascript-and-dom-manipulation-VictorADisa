// Change text content dynamically
function changeText() {
    const text = document.getElementById("dynamic-text");
    text.textContent = "✨ We create websiteeee!";
  }
  
  // Modify CSS style using JS
  function toggleHighlight() {
    const heading = document.getElementById("main-heading");
    heading.classList.toggle("highlight");
  }
  
  // Add a new element to the page
  function addElement() {
    const container = document.getElementById("extra-container");
  
    // Avoid adding duplicates
    if (!document.getElementById("new-paragraph")) {
      const newPara = document.createElement("p");
      newPara.id = "new-paragraph";
      newPara.textContent = "🆕 Thank you so much for taing your time to click this, we love you";
      container.appendChild(newPara);
    }
  }
  
  // Remove the added element
  function removeElement() {
    const element = document.getElementById("new-paragraph");
    if (element) {
      element.remove();
    }
  }
  