(function() {
  // Get theme preference with fallback to system preference
  const savedTheme = localStorage.getItem("darkMode");
  let isDarkMode;
  
  if (savedTheme !== null) {
    isDarkMode = savedTheme === "true";
  } else {
    // Check system preference
    isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  
  // Immediately apply theme class to prevent flash
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  }
})();

document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  const body = document.querySelector("body"),
  menuOpenIcon = document.querySelector(".nav__icon-menu"),
  menuCloseIcon = document.querySelector(".nav__icon-close"),
  menuList = document.querySelector(".menu-overlay"),
  btnScrollToTop = document.querySelector(".top");
  
  // Add a small delay to ensure elements are fully rendered
  initThemeToggle();
  initBackgroundToggle();

  /* =======================
  // Menu
  ======================= */
  if (menuOpenIcon){
    menuOpenIcon.addEventListener("click", () => {
      menuOpen();
    });  
  }
  
  if (menuCloseIcon){
    menuCloseIcon.addEventListener("click", () => {
      menuClose();
    });  
  }

  function menuOpen() {
    menuList.classList.add("is-open");
  }

  function menuClose() {
    menuList.classList.remove("is-open");
  }

  /* =======================
  // LazyLoad Images
  ======================= */
  var lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy'
  })

  /* =======================
  // Responsive Videos
  ======================= */
  reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)");


  /* =======================
  // Scroll Top Button
  ======================= */
  window.addEventListener("scroll", function () {
  window.scrollY > window.innerHeight ? btnScrollToTop.classList.add("is-active") : btnScrollToTop.classList.remove("is-active");
  });

  btnScrollToTop.addEventListener("click", function () {
    if (window.scrollY != 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    }
  });

  /* =======================
  // Contact Form
  ======================= */
  document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('https://api.maya.cloud/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (response.ok) {
        alert('Message sent successfully!');
        this.reset();
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      alert(`${error}`);
    }
  });

});

function updateToggleState(toggleCheckbox, checked) {
  if (!toggleCheckbox) return;
  
  // Update checkbox state without triggering change event
  toggleCheckbox.checked = checked;
  
  // Find the label for this checkbox
  const label = document.querySelector(`label[for="${toggleCheckbox.id}"]`);
  if (!label) return;
  
  // Update toggle icons visibility based on checked state
  const icons = label.querySelectorAll('.toggle__icon');
  icons.forEach(icon => {
    // Remove both classes first to ensure clean state
    icon.classList.remove('on', 'off');
    
    // Add the appropriate class
    if ((icon.classList.contains('toggle__icon--on') && checked) || 
        (icon.classList.contains('toggle__icon--off') && !checked)) {
      icon.classList.add('on');
    } else {
      icon.classList.add('off');
    }
  });
}

/**
 * Background effect toggle functionality
 */
function initBackgroundToggle() {
  // Get the DOM reference when the function is called
  const backgroundEffectToggle = document.getElementById('background-toggle__checkbox');
  if (!backgroundEffectToggle) return;
  
  function setBackgroundEffect(icon) {    
    document.documentElement.style.setProperty('--background-effect-icon', `"${icon}"`);
  }
  
  // Load saved preference with a default
  function loadBackgroundIconPreference() {
    const savedIcon = localStorage.getItem('backgroundIcon') || '♥';
    const isSmile = savedIcon === '☻';
    
    // Set the CSS variable - do this before updating the UI
    setBackgroundEffect(savedIcon);
    
    // Update UI to match actual state
    updateToggleState(backgroundEffectToggle, isSmile);
    
    // Save preference (only if it wasn't already set)
    if (!localStorage.getItem('backgroundIcon')) {
      localStorage.setItem('backgroundIcon', savedIcon);
    }
  }
  
  // Handle toggle change events
  backgroundEffectToggle.addEventListener("change", () => {
    const newIcon = backgroundEffectToggle.checked ? '☻' : '♥';
    setBackgroundEffect(newIcon);
    localStorage.setItem('backgroundIcon', newIcon);
  });
  
  // Initialize on page load
  loadBackgroundIconPreference();
}

/**
 * Light/dark mode toggle functionality
 */
function initThemeToggle() {
  // Get the DOM reference when the function is called
  const lightDarkToggle = document.getElementById('light-dark-toggle__checkbox');
  if (!lightDarkToggle) return;
  
  function setTheme(isDarkMode) {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  
  // Load saved preference or system preference
  function loadThemePreference() {
    // Get preference with fallback to system preference
    const savedTheme = localStorage.getItem("darkMode");
    let isDarkMode;
    
    if (savedTheme !== null) {
      isDarkMode = savedTheme === "true";
    } else {
      isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    
    // Set theme first before updating UI
    setTheme(isDarkMode);
    
    // Then update UI to match
    updateToggleState(lightDarkToggle, isDarkMode);
  }
  
  // Event listener for toggle change
  lightDarkToggle.addEventListener("change", () => {
    const isDarkMode = lightDarkToggle.checked;
    setTheme(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString());
  });
  
  // Listen for system preference changes
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", (e) => {
    // Only update if user hasn't set a preference
    if (localStorage.getItem("darkMode") === null) {
      const isDarkMode = e.matches;
      setTheme(isDarkMode);
      updateToggleState(lightDarkToggle, isDarkMode);
    }
  });
  
  // Initialize on page load
  loadThemePreference();
}