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
