let slideIndex = 0;

function showSlides(n) {
  let slides = document.querySelectorAll('.slide');
  if (n > slides.length - 1) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? 'flex' : 'none';
  });
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlides(slideIndex); 
});

setInterval(() => {
  changeSlide(1);
}, 3000);
function toggleMenu(id) {
    const menu = document.getElementById(id);
    menu.classList.toggle("hidden");
}
window.addEventListener('click', function (e) {
    const isDropdown = e.target.closest('.group');
    if (!isDropdown) {
        document.getElementById('subMenuCongThuc')?.classList.add('hidden');
        document.getElementById('subMenuTheLoai')?.classList.add('hidden');
    }
});
function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    menu.classList.toggle('hidden');
  }
  window.addEventListener('click', function (e) {
    const menus = ['subMenuCongThuc', 'subMenuTheLoai'];
    menus.forEach(id => {
      const menu = document.getElementById(id);
      if (menu && !menu.contains(e.target) && !e.target.closest(`button[onclick*="${id}"]`)) {
        menu.classList.add('hidden');
      }
    });
  });
