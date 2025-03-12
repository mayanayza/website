document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  const body = document.querySelector("body"),
  menuOpenIcon = document.querySelector(".nav__icon-menu"),
  menuCloseIcon = document.querySelector(".nav__icon-close"),
  menuList = document.querySelector(".menu-overlay"),
  btnScrollToTop = document.querySelector(".top"),
  lightDarkToggle = document.querySelector("#light-dark-toggle__checkbox");

  // Function to set theme based on preference
  function setTheme(isDarkMode) {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function setToggle(isDarkMode) {
    if (lightDarkToggle) {
      lightDarkToggle.checked = isDarkMode;
    }
  }

  // Load theme preference (with fallbacks)
  function loadThemePreference() {
    // Check if there's a saved preference in localStorage
    const savedTheme = localStorage.getItem("darkMode");
    let isDarkMode;
    
    if (savedTheme !== null) isDarkMode = savedTheme === "true"
    else isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    setTheme(isDarkMode);
    setToggle(isDarkMode);
  }

  // Save theme preference
  function saveThemePreference(isDarkMode) {
    localStorage.setItem("darkMode", isDarkMode);
  }

  // Add event listener for the toggle
  if (lightDarkToggle) {
    lightDarkToggle.addEventListener("change", () => {
      const isDarkMode = lightDarkToggle.checked;
      setTheme(isDarkMode);
      setToggle(isDarkMode)
      saveThemePreference(isDarkMode);
    });
  }

  // Also listen for system preference changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    // Only update if user hasn't set a preference
    isDarkMode = e.matches
    setTheme(isDarkMode);
    setToggle(isDarkMode)
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
  setTimeout(function(){
    body.classList.add("is-in");
  },50)


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