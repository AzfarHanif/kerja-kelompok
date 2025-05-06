document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const nav = document.getElementById('mainNavbar');
    nav.classList.toggle('navbar-light');
    nav.classList.toggle('navbar-dark');
    nav.classList.toggle('bg-light');
    nav.classList.toggle('bg-dark');
  });