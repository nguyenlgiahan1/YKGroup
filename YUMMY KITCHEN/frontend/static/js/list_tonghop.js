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

window.onload = function () {
  fetch('../../static/data/congthuc.json')
  .then(response => response.json())
    .then(data => {
      const recipeList = document.getElementById('recipe-list');
      data.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('bg-white', 'border', 'rounded-lg', 'shadow-lg', 'overflow-hidden', 'transition', 'transform', 'hover:scale-105');
        
        recipeCard.innerHTML = `
          <img src="../images/${recipe.image}" alt="${recipe.title}" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800">${recipe.title}</h3>
            <p class="text-gray-600 mt-2">${recipe.description}</p>
            <a href="../Home/Tong_hop_mon/detail.html?id=${recipe.id}" class="text-orange-500 mt-4 inline-block">Xem Chi Tiết</a>
          </div>
        `;
        
        recipeList.appendChild(recipeCard);
      });
    })
    .catch(error => console.error('Error loading recipe data:', error));
};
