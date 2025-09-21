//Js
// Splash Screen Animation
document.addEventListener('DOMContentLoaded', function() {
  const splashScreen = document.getElementById('splashScreen');
  const mainContent = document.getElementById('mainContent');
  const letterX = document.getElementById('letterX');
  const letterT = document.getElementById('letterT');
  const letterW = document.getElementById('letterW');

  // Animation sequence: x first, then T and W together
  setTimeout(() => {
    letterX.classList.add('show');
  }, 500);

  setTimeout(() => {
    letterT.classList.add('show');
    letterW.classList.add('show');
  }, 1200);

  // Hide splash screen and show main content
  setTimeout(() => {
    splashScreen.classList.add('fade-out');
    mainContent.classList.add('show');
  }, 2500);

  // Remove splash screen from DOM
  setTimeout(() => {
    splashScreen.style.display = 'none';
  }, 3000);

  // Your Original JavaScript Functionality
  const copyButtons = document.querySelectorAll('.copy-btn');
  
  copyButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Find the description text in the same card
          const card = this.closest('.card');
          const descText = card.querySelector('.desc').textContent;
          
          // Copy to clipboard
          navigator.clipboard.writeText(descText).then(function() {
              // Provide feedback to user
              const originalText = button.textContent;
              button.textContent = 'Copied!';
              button.style.background = '#4CAF50';
              
              // Reset button after 2 seconds
              setTimeout(function() {
                  button.textContent = originalText;
                  button.style.background = '#eee';
              }, 2000);
          }).catch(function() {
              // Fallback for older browsers
              const textArea = document.createElement('textarea');
              textArea.value = descText;
              document.body.appendChild(textArea);
              textArea.select();
              document.execCommand('copy');
              document.body.removeChild(textArea);
              
              // Provide feedback
              const originalText = button.textContent;
              button.textContent = 'Copied!';
              button.style.background = '#4CAF50';
              
              setTimeout(function() {
                  button.textContent = originalText;
                  button.style.background = '#eee';
              }, 2000);
          });
      });
  });
  
  // Add functionality for category buttons if needed
  const categoryButtons = document.querySelectorAll('.categories button');
  
  categoryButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Remove active class from all buttons
          categoryButtons.forEach(btn => btn.classList.remove('active'));
          // Add active class to clicked button
          this.classList.add('active');
      });
  });
});