document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar a');

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      alert(`"${link.textContent}" bağlantısına tıkladınız!`);
    });
  });

  const footer = document.querySelector('.footer');
  const year = new Date().getFullYear();
  const p = document.createElement('p');
  p.textContent = `© ${year} Tüm hakları saklıdır.`;
  footer.appendChild(p);
});
