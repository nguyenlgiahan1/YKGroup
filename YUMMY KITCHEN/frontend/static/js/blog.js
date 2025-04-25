const blogPosts = [
  {
    title: "Bún bò Huế - Vị đậm đà miền Trung",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1sH4Ix233Ey6f0cFX33YpNYVjQ5w29JnLA&s",
    description: "Tô bún bò chuẩn vị Huế với nước dùng cay nồng, thơm ngon.",
    link: "blog_detail.html?id=1"
  },
  {
    title: "Gỏi đu đủ - Món khai vị thanh mát",
    image: "https://www.lorca.vn/wp-content/uploads/2024/06/Thnhphm11-1686458076-6150-1686458078.jpg",
    description: "Chua cay hấp dẫn, giòn giòn, dễ làm và rất bắt cơm.",
    link: "blog_detail.html?id=2"
  },
  {
    title: "Bánh bò hấp mềm xốp",
    image: "https://dvpmarket.com/resources/uploads/images/2018/08/Banh-bo-trang-mem-xop.jpg",
    description: "Thơm mùi nước cốt dừa, mềm dai hấp dẫn, ăn là mê.",
    link: "blog_detail.html?id=3"
  },
  {
    title: "Cá kho tộ - Đậm đà hương quê",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaumkNQhAetqw5uz8hrlZPtFjghbib-RbO3Q&s",
    description: "Món cá kho truyền thống, thấm vị, ngon cơm mỗi ngày.",
    link: "blog_detail.html?id=4"
  },
  {
    title: "Bánh xèo vàng giòn",
    image: "https://cdn.24h.com.vn/upload/1-2025/images/2025-03-08/1741413192-bx1-18411-width640height400.jpg",
    description: "Vỏ bánh giòn tan, nhân thịt tôm thơm lừng khó cưỡng.",
    link: "blog_detail.html?id=5"
  },
  {
    title: "Phở bò truyền thống",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzd12MXcETlsrwbUfD64ynLkhGanyJ-frqZw&s",
    description: "Hương vị Việt Nam đậm đà, nước dùng trong và thơm.",
    link: "blog_detail.html?id=6"
  },
  {
    title: "Bánh mì kẹp thịt Việt Nam",
    image: "https://daotaobeptruong.vn/wp-content/uploads/2021/01/banh-mi-viet-nam.jpg",
    description: "Món ăn đường phố nổi tiếng, dễ ăn, nhanh gọn.",
    link: "blog_detail.html?id=7"
  },
  {
    title: "Chè ba màu mát lạnh",
    image: "https://bizweb.dktcdn.net/100/004/714/articles/che-ba-mau-cach-lam-ngon-mieng-dep-mat-ngay-tai-nha.png?v=1592454972940",
    description: "Món tráng miệng ngọt dịu, đẹp mắt, mát lạnh mùa hè.",
    link: "blog_detail.html?id=8"
  },
  {
    title: "Trà sữa trân châu đường đen",
    image: "https://lypham.vn/wp-content/uploads/2024/10/cach-nau-tra-sua-tran-chau-duong-den.jpg",
    description: "Hương vị ngọt béo, topping giòn dai cực cuốn.",
    link: "blog_detail.html?id=9"
  },
  {
    title: "Cà phê sữa đá chuẩn vị Sài Gòn",
    image: "https://product.hstatic.net/200000745755/product/4_ccceb5085680488b824d1e1308b49921_master.jpg",
    description: "Ly cà phê thơm nồng, sánh quyện sữa đặc thơm béo.",
    link: "blog_detail.html?id=10"
  }
];

const container = document.getElementById("blog-list");

if (container) {
  blogPosts.forEach(post => {
    const article = document.createElement("article");
    article.className = "bg-white rounded-lg shadow hover:shadow-lg overflow-hidden";

    article.innerHTML = `
      <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-2">${post.title}</h3>
        <p class="text-sm text-gray-600">${post.description}</p>
        <a href="${post.link}" class="text-orange-500 text-sm inline-block mt-3 hover:underline">Xem chi tiết</a>
      </div>
    `;

    container.appendChild(article);
  });
} else {
  console.error("Container element with ID 'blog-list' not found.");
}

