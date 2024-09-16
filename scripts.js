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
// const hamburger = document.querySelector(".hamburger");
// const navbar = document.querySelector(".navbar");
// const navLinks = document.querySelector(".nav-links");

// hamburger.addEventListener("click", () => {
//     navbar.classList.toggle("active");
// });

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
});

// For enhanced UX, hide nav on link click (mobile only)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        hamburger.classList.remove('active');
    });
});