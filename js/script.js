// document.addEventListener("DOMContentLoaded", function(){
//     //DOM is fully loaded
//     window.addEventListener('scroll', function(){
//         const navbar = document.querySelector("#navbarTop");
//         if(window.scrollY > 50){
//             navbar.classList.add('navbar-scrolled');
//         }else {
//             navbar.classList.remove('navbar-scrolled');
//         }
//     })
// })
function userScroll() {
    const navbar = document.querySelector('#navbarTop');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', userScroll);