window.addEventListener('load', function() {
  setTimeout(function() {
    document.body.classList.add('is-in');
  }, 50);
});

document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  const body = document.querySelector("body"),
  menuOpenIcon = document.querySelector(".nav__icon-menu"),
  menuCloseIcon = document.querySelector(".nav__icon-close"),
  menuList = document.querySelector(".menu-overlay"),
  btnScrollToTop = document.querySelector(".top"),
  lightDarkToggle = document.querySelector("#light-dark-toggle__checkbox"),
  backgroundEffectToggle = document.querySelector("#background-effect-toggle__checkbox");

  
  function setToggle(toggleCheckbox) {    
    // Find the label for this checkbox
    const label = document.querySelector(`label[for="${toggleCheckbox.id}"]`);
    if (!label) return;
    
    // Toggle icons within the label
    const icons = label.querySelectorAll('.toggle__icon');
    icons.forEach(icon => {
      icon.classList.toggle('on');
    });
  }

  function loadBackgroundIconPreference() {
    const savedIcon = localStorage.getItem('backgroundIcon');
    let icon;
    
    if (savedIcon !== null) icon = savedIcon
    else icon = '♥'

    backgroundEffectToggle.checked = icon != '♥';

    setBackgroundEffect(icon)
    setToggle(backgroundEffectToggle)
    localStorage.setItem('backgroundIcon', icon)
  }

  function setBackgroundEffect(icon) {    
    document.documentElement.style.setProperty('--background-effect-icon', `"${icon}"`);
  }

  if (backgroundEffectToggle) {
    backgroundEffectToggle.addEventListener("change", () => {
      let icon = document.documentElement.style.getPropertyValue('--background-effect-icon');
      icon = icon.replace(/['"]/g, '').trim();
      const newIcon = icon === '♥' ? '☻' : '♥';

      setBackgroundEffect(newIcon);
      setToggle(backgroundEffectToggle)
      localStorage.setItem('backgroundIcon', newIcon)
    });
  }

  loadBackgroundIconPreference();

  function loadThemePreference() {
    // Check if there's a saved preference in localStorage
    const savedTheme = localStorage.getItem("darkMode");
    let isDarkMode;
    
    if (savedTheme !== null) isDarkMode = savedTheme === "true"
    else isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    lightDarkToggle.checked = isDarkMode;

    setTheme(isDarkMode);
    setToggle(lightDarkToggle)
  }

  function setTheme(isDarkMode) {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  if (lightDarkToggle) {
    lightDarkToggle.addEventListener("change", () => {
      const isDarkMode = lightDarkToggle.checked;
      setTheme(isDarkMode);
      setToggle(lightDarkToggle)
      localStorage.setItem('darkMode', isDarkMode)
    });
  }

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    // Only update if user hasn't set a preference
    isDarkMode = e.matches
    setTheme(isDarkMode);
    setThemeToggle(isDarkMode)
  });

  loadThemePreference();

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
  // Animation Load Page
  ======================= */

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


  // =====================
  // Load More Posts
  // =====================
  var load_posts_button = document.querySelector('.load-more-posts');

  load_posts_button&&load_posts_button.addEventListener("click",function(e){e.preventDefault();var o=document.querySelector(".load-more-section"),e=pagination_next_url.split("/page")[0]+"/page/"+pagination_next_page_number+"/";fetch(e).then(function(e){if(e.ok)return e.text()}).then(function(e){var n=document.createElement("div");n.innerHTML=e;for(var t=document.querySelector(".grid"),a=n.querySelectorAll(".grid__post"),i=0;i<a.length;i++)t.appendChild(a.item(i));new LazyLoad({elements_selector:".lazy"});pagination_next_page_number++,pagination_next_page_number>pagination_available_pages_number&&(o.style.display="none")})});

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

});