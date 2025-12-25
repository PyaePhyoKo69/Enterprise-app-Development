// Navbar active link script
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-link").forEach(link => {
  if(link.getAttribute("href") === currentPage){
    link.classList.add("active");
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

/************************************
 * NAVBAR USERNAME
 ************************************/
document.addEventListener('DOMContentLoaded', () => {
  const adminName = localStorage.getItem('loggedInAdmin');
  const navRegister = document.querySelector('.nav-register');

  if (adminName && navRegister) {
    navRegister.textContent = adminName;
    navRegister.href = 'admin-dashboard.html';
  }
});
