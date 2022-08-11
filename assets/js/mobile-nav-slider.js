const navSlide = ()=>{
  const mobileRevealArrow = document.querySelector('.mobile-reveal-menu');
  const navSlider = document.querySelector('.nav__list');
  const navLinks = document.querySelectorAll('.nav--entry');
  const navBar = document.querySelector('.primary__navbar');

  // watch for touch
  mobileRevealArrow.addEventListener('click', () => {
    // animate accordinaly
    navSlider.classList.toggle('active');
    mobileRevealArrow.classList.toggle('active');
    var count = 0 ;
    navLinks.forEach((link, index) => {
      if ( link.style.animation ) {
        link.style.animation = ``
      } else {
        link.style.animation = `navLinksFade 0.25s ease-in forwards ${index / 50 + 0.3 }s`
      }
      count++;
    });
    console.log(navSlider.offsetHeight);

    if (navSlider.style.height ) {
      navSlider.style.height = ``
    } else {
      navSlider.style.height = `${ count * 60 }px`

  }
  });
}

navSlide();
