const categories = [
  { name: "Bữa Sáng", color: "bg-yellow-100", icon: "https://www.svgrepo.com/show/530223/bread.svg" },
  { name: "Bữa Trưa", color: "bg-yellow-200", icon: "https://www.svgrepo.com/show/429381/curry-food-japan.svg" },
  { name: "Bữa Tối", color: "bg-yellow-100", icon: "https://cdn-icons-png.flaticon.com/128/2515/2515189.png" },
  { name: "Món Chay", color: "bg-green-100", icon: "https://www.svgrepo.com/show/356599/salad.svg" },
  { name: "Món Mặn", color: "bg-red-100", icon: "https://www.svgrepo.com/show/356611/chicken.svg" },
  { name: "Tráng Miệng", color: "bg-pink-100", icon: "https://www.svgrepo.com/show/397176/pancakes.svg" },
  { name: "Món Healthy", color: "bg-green-200", icon: "https://www.svgrepo.com/show/396581/green-salad.svg" },
  { name: "Ăn Vặt", color: "bg-orange-100", icon: "https://www.svgrepo.com/show/396661/hot-dog.svg" },
  { name: "Hải Sản", color: "bg-cyan-100", icon: "https://cdn-icons-png.flaticon.com/128/3437/3437520.png" },
  { name: "Đồ Chiên", color: "bg-orange-200", icon: "https://www.svgrepo.com/show/312237/fried-shrimp.svg" },
  { name: "Món Nướng", color: "bg-orange-100", icon: "https://cdn-icons-png.flaticon.com/128/3808/3808804.png" },
  { name: "Món Lẩu", color: "bg-cyan-100", icon: "https://www.svgrepo.com/show/398114/pot-of-food.svg" },
  { name: "Món Hàn", color: "bg-red-100", icon: "https://cdn-icons-png.flaticon.com/128/2276/2276934.png" },
  { name: "Món Nhật", color: "bg-blue-100", icon: "https://www.svgrepo.com/show/398436/sushi.svg" },
  { name: "Món Châu Âu", color: "bg-purple-100", icon: "https://www.svgrepo.com/show/356619/pizza-02.svg" },
  { name: "Nước", color: "bg-sky-100", icon: "https://cdn-icons-png.flaticon.com/128/2738/2738730.png" },
  { name: "Tổng hợp", color: "bg-green-200", icon: "https://cdn-icons-png.flaticon.com/128/1277/1277768.png" },
];

const grid = document.getElementById("category-grid");
function slugify(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .toLowerCase()
            .replace(/\s+/g, "");
}

categories.forEach(cat => {
  const slug = slugify(cat.name); 
  const link = document.createElement("a");
  link.href = `${slug}.html`;
  link.className = `flex flex-col items-center ${cat.color} rounded-xl p-4 hover:shadow transition`;

  link.innerHTML = `
    <img src="${cat.icon}" alt="${cat.name}" class="w-16 h-16 mb-2" />
    <span class="text-sm font-medium">${cat.name}</span>
  `;
  grid.appendChild(link);
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
