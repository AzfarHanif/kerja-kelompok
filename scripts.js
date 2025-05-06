const icon = document.getElementById('toggle-icon');

document.getElementById('toggle-dark-mode').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  const nav = document.getElementById('mainNavbar');
  nav.classList.toggle('navbar-light');
  nav.classList.toggle('navbar-dark');
  nav.classList.toggle('bg-light');
  nav.classList.toggle('bg-dark');

  // Ganti gambar ikon
  if (document.body.classList.contains('dark-mode')) {
    icon.src = 'assets/icons/dark-mode.png';
  } else {
    icon.src = 'assets/icons/light_mode.png';
  }
});
