/****************************************************************
  Get Mobile Toggle Button And Nav Links
****************************************************************/
const mobileToggleBtn = document.querySelector(".mobile-toggle-btn i");
const navLinks = document.querySelector(".nav-links");



/****************************************************************
    Add Click Event On Toggle Buttons to Display Nav Links 
*****************************************************************/
mobileToggleBtn.onclick = function () {


    if (navLinks.style.maxHeight == 0 || navLinks.style.maxHeight == '0px') {
        navLinks.style.maxHeight = navLinks.scrollHeight + 'px';
    }
    else {
        navLinks.style.maxHeight = '0px';
    }

    this.classList.toggle("fa-times");
}