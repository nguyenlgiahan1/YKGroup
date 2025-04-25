const recipeList = document.getElementById("recipe-list");

const recipes = [
  {
    title: "Phở Bò Truyền Thống",
    desc: "Nước dùng trong, thịt bò mềm và đậm đà.",
    img: "https://i.pinimg.com/736x/77/d0/81/77d0811eac73cbb8e6a37b6e38d948e6.jpg",
    link: "phobo.html"
  },
  {
    title: "Gỏi Cuốn Tôm Thịt",
    desc: "Tươi mát, ăn kèm nước mắm chua ngọt.",
    img: "https://i.pinimg.com/736x/dd/c8/05/ddc80537f071ff77bd14ffd3e055e186.jpg",
    link: "goicuontomthit.html"
  },
  {
    title: "Bún Thịt Nướng",
    desc: "Thịt nướng thơm, rau sống và nước mắm.",
    img: "https://i.pinimg.com/736x/05/94/2f/05942f1eb1bfc71513723575993e4d70.jpg",
    link: "congthuc3.html"
  },
  {
    title: "Bánh Mì Thịt",
    desc: "Ổ bánh giòn kẹp thịt, pate và rau.",
    img: "https://i.pinimg.com/736x/4f/11/36/4f1136a1af5fbca73d02f6fc6f2b23ac.jpg",
    link: "congthuc4.html"
  },
  {
    title: "Cơm Tấm Sườn Bì",
    desc: "Sườn nướng, bì chả trứng và mắm ngon.",
    img: "https://i-giadinh.vnecdn.net/2024/03/07/7Honthinthnhphm1-1709800144-8583-1709800424.jpg",
    link: "congthuc5.html"
  },
  {
    title: "Cháo Gà Hành Lá",
    desc: "Cháo mềm thơm với thịt gà xé và tiêu.",
    img: "https://i.ex-cdn.com/giadinhonline.vn/files/content/2019/11/27/chao-ga-don-gian-1556.jpg",
    link: "congthuc6.html"
  },
  {
    title: "Lẩu Thái Chua Cay",
    desc: "Đậm vị chua cay với hải sản và rau.",
    img: "https://i-giadinh.vnecdn.net/2022/12/17/Thanh-pham-1-1-5372-1671269525.jpg",
    link: "congthuc7.html"
  },
  {
    title: "Bánh Xèo Miền Tây",
    desc: "Vỏ bánh giòn, nhân tôm thịt hấp dẫn.",
    img: "https://i-giadinh.vnecdn.net/2023/09/19/Buoc-10-Thanh-pham-1-1-5225-1695107554.jpg",
    link: "congthuc8.html"
  },
  {
    title: "Chè Ba Màu",
    desc: "Ngọt mát, đẹp mắt với đậu và rau câu.",
    img: "https://bizweb.dktcdn.net/100/004/714/articles/che-ba-mau-cach-lam-ngon-mieng-dep-mat-ngay-tai-nha.png?v=1592454972940",
    link: "congthuc9.html"
  },
  {
    title: "Bún Bò Huế",
    desc: "Món ăn cay nồng đặc trưng miền Trung.",
    img: "https://i.ytimg.com/vi/CSI9ildGX9s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCxhRIyoYY7k9ZuxY0YOC9jNFLapg",
    link: "congthuc10.html"
  },
  {
    title: "Hủ Tiếu Nam Vang",
    desc: "Sợi dai, nước dùng ngọt thanh từ xương.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFVV1POzVrY4BDwScGgZvJAnD6UA9DfK2M9Q&s",
    link: "congthuc11.html"
  },
  {
    title: "Bánh Cuốn Nóng",
    desc: "Bánh mềm mịn, nhân thịt nấm và hành phi.",
    img: "https://thoccongtu.com/wp-content/uploads/2019/03/Nguy%C3%AAn-li%E1%BB%87u-c%E1%BA%A7n-chu%E1%BA%A9n-b%E1%BB%8B-%C4%91%E1%BB%83-l%C3%A0m-b%C3%A1nh-cu%E1%BB%91n-n%C3%B3ng-%C4%91%E1%BB%83-b%C3%A1n-1024x682.jpg",
    link: "congthuc12.html"
  },
  {
    title: "Mì Quảng",
    desc: "Sợi mì vàng nghệ, ăn kèm bánh tráng.",
    img: "https://hoiana.com/wp-content/uploads/2024/12/mi-quang-hoi-an-5.webp",
    link: "congthuc13.html"
  },
  {
    title: "Canh Chua Cá",
    desc: "Cá nấu với me chua, rau thơm tươi ngon.",
    img: "https://i-giadinh.vnecdn.net/2021/03/19/ca2-1616122035-2163-1616122469.jpg",
    link: "congthuc14.html"
  },
  {
    title: "Bò Kho",
    desc: "Bò ninh mềm ăn với bánh mì hoặc hủ tiếu.",
    img: "https://i-giadinh.vnecdn.net/2022/09/30/-1940-1664522303.jpg",
    link: "congthuc15.html"
  },
  {
    title: "Xôi Gà",
    desc: "Xôi nếp dẻo, thịt gà chiên giòn thơm lừng.",
    img: "https://img-global.cpcdn.com/recipes/423da42e336b0a84/1200x630cq70/photo.jpg",
    link: "congthuc16.html"
  },
  {
    title: "Chả Giò",
    desc: "Cuốn giòn tan nhân thịt rau củ hấp dẫn.",
    img: "https://i-giadinh.vnecdn.net/2022/08/10/Thanh-pham-1-1-8938-1660102960.jpg",
    link: "congthuc17.html"
  },
  {
    title: "Cà Ri Gà",
    desc: "Vị thơm cay nhẹ, ăn kèm bánh mì hoặc cơm.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMrvrB3QXiABGXTQQcMD-CUX-OxiSLo1QIw&s",
    link: "congthuc18.html"
  },
  {
    title: "Nem Nướng",
    desc: "Thịt nướng cuốn bánh tráng rau sống.",
    img: "https://cdn.tgdd.vn/2021/09/CookDish/cach-lam-nem-nuong-nha-trang-bang-noi-chien-khong-dau-thom-avt-1200x676.jpg",
    link: "congthuc19.html"
  },
  {
    title: "Bánh Canh Cua",
    desc: "Sợi to dai, nước dùng đậm đà thịt cua.",
    img: "https://cdn.tgdd.vn/Files/2019/07/01/1176655/banh-canh-cua-dong-1.jpg",
    link: "congthuc20.html"
  }
];

recipes.forEach(recipe => {
  const card = document.createElement("div");
  card.className = "bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition";

  card.innerHTML = `
    <img src="${recipe.img}" alt="${recipe.title}" class="w-full h-48 object-cover">
    <div class="p-4">
      <h2 class="text-xl font-semibold text-gray-800">${recipe.title}</h2>
      <p class="text-gray-500 mt-2 mb-4">${recipe.desc}</p>
      <a href="${recipe.link}" class="text-orange-500 font-medium hover:underline">Xem công thức →</a>
    </div>
  `;
  recipeList.appendChild(card);
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
