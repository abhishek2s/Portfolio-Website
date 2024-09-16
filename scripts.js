// document.addEventListener('DOMContentLoaded', () => {
//     const links = document.querySelectorAll('.nav-links a[href^="#"]');
    
//     links.forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault();
//             const targetId = link.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);

//             window.scrollTo({
//                 top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
//                 behavior: 'smooth' 
//             });
//         });
//     });
// });



// JavaScript to toggle the navbar on mobile view
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

