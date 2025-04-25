const blogPosts = [
  {
      id: 1,
      title: "Bún bò Huế - Vị đậm đà miền Trung",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1sH4Ix233Ey6f0cFX33YpNYVjQ5w29JnLA&s",
      content: `
        <h2 class="text-2xl font-semibold mb-4">Giới thiệu</h2>
        <p>Bún bò Huế là một trong những món ăn đặc trưng của miền Trung Việt Nam, nổi bật với nước dùng cay nồng, thơm mùi sả, mắm ruốc, ăn kèm rau sống tươi mát. Đây là món ăn không thể thiếu trong các dịp lễ, Tết của người Huế.</p>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Nguyên liệu</h2>
        <ul class="list-disc list-inside">
          <li>1kg xương bò</li>
          <li>500g giò heo</li>
          <li>300g thịt bắp bò</li>
          <li>Chả Huế (tùy chọn)</li>
          <li>2 cây sả</li>
          <li>2 thìa canh mắm ruốc Huế</li>
          <li>Ớt bột, dầu điều, hành tím, tỏi</li>
          <li>Bún sợi to</li>
          <li>Rau sống: bắp chuối bào, xà lách, giá, rau thơm</li>
        </ul>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Cách làm</h2>
        <ol class="list-decimal list-inside space-y-2">
          <li>Hầm xương bò và giò heo với sả đập dập khoảng 1-2 tiếng để lấy nước dùng ngọt.</li>
          <li>Pha mắm ruốc với nước, lọc lấy phần nước trong cho vào nồi nước dùng.</li>
          <li>Phi hành tỏi, cho ớt bột và dầu điều để tạo màu, sau đó cho vào nồi nước dùng.</li>
          <li>Luộc bắp bò riêng rồi thái lát mỏng.</li>
          <li>Chần bún qua nước sôi, cho vào tô cùng thịt, giò, chả, chan nước dùng nóng lên và thêm rau sống.</li>
        </ol>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Mẹo vặt</h2>
        <ul class="list-disc list-inside">
          <li>Chọn mắm ruốc Huế chính gốc để hương vị chuẩn nhất.</li>
          <li>Giò heo nên chọn phần móng trước, ít mỡ, nhiều da và gân.</li>
          <li>Nước dùng có thể thêm một ít gừng đập dập để khử mùi bò.</li>
          <li>Không nên nêm nước mắm trực tiếp vào nước lèo khi đang sôi để tránh bị gắt mùi.</li>
        </ul>
      `
    },
    
    {
      id: 2,
      title: "Gỏi đu đủ - Món khai vị thanh mát",
      image: "https://www.lorca.vn/wp-content/uploads/2024/06/Thnhphm11-1686458076-6150-1686458078.jpg",
      content: `
        <h2 class="text-2xl font-semibold mb-4">Giới thiệu</h2>
        <p>Gỏi đu đủ tôm thịt là món ăn chống ngán cực kỳ phù hợp cho ngày hè nóng bức. Với vị chua ngọt hài hòa, nguyên liệu dễ tìm, cách làm nhanh gọn.</p>
        <h2 class="text-2xl font-semibold mt-8 mb-4">Nguyên liệu</h2>
        <ul class="list-disc list-inside">
          <li>Đu đủ xanh: 500g</li>
          <li>Tôm: 200g, Thịt ba chỉ: 150g</li>
          <li>Rau răm, đậu phộng rang</li>
          <li>Nước mắm, đường, chanh, tỏi, ớt</li>
        </ul>
        <h2 class="text-2xl font-semibold mt-8 mb-4">Cách làm</h2>
        <ol class="list-decimal list-inside space-y-2">
          <li>Gọt vỏ đu đủ, bào sợi, ngâm nước đá cho giòn.</li>
          <li>Luộc tôm, thịt rồi thái nhỏ.</li>
          <li>Pha nước trộn gỏi từ nước mắm, đường, chanh, tỏi, ớt.</li>
          <li>Trộn tất cả với rau răm, rắc đậu phộng.</li>
        </ol>
        <h2 class="text-2xl font-semibold mt-8 mb-4">Mẹo vặt</h2>
        <ul class="list-disc list-inside">
          <li>Ngâm đu đủ trong nước đá 10 phút giúp giữ độ giòn lâu.</li>
          <li>Có thể thêm xoài xanh hoặc cà rốt để tăng vị.</li>
        </ul>
      `
    },
    {
      id: 3,
      title: "Bánh bò hấp mềm xốp",
      image: "https://dvpmarket.com/resources/uploads/images/2018/08/Banh-bo-trang-mem-xop.jpg",
      content: `
        <h2 class="text-2xl font-semibold mb-4">Giới thiệu</h2>
        <p>Bánh bò hấp là món bánh truyền thống Việt Nam có độ xốp tự nhiên nhờ men, thơm dịu mùi nước cốt dừa, rất phù hợp làm món tráng miệng.</p>
        <h2 class="text-2xl font-semibold mt-8 mb-4">Nguyên liệu</h2>
        <ul class="list-disc list-inside">
          <li>Bột gạo: 250g</li>
          <li>Nước cốt dừa: 200ml</li>
          <li>Đường: 150g, Men nở: 5g</li>
          <li>Nước lọc, muối</li>
        </ul>
        <h2 class="text-2xl font-semibold mt-8 mb-4">Cách làm</h2>
        <ol class="list-decimal list-inside space-y-2">
          <li>Trộn bột với nước, đường và men nở, ủ 4–6 tiếng.</li>
          <li>Thêm nước cốt dừa và muối, trộn đều.</li>
          <li>Cho vào khuôn nhỏ, hấp 15 phút lửa lớn.</li>
        </ol>
        <h2 class="text-2xl font-semibold mt-8 mb-4">Mẹo vặt</h2>
        <ul class="list-disc list-inside">
          <li>Ủ bột đủ thời gian giúp bánh nở xốp hơn.</li>
          <li>Hấp nhớ mở nắp 1–2 lần để tránh đọng nước làm nhão bánh.</li>
        </ul>
      `
    },
    {
      id: 4,
      title: "Cá kho tộ - Đậm đà hương quê",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaumkNQhAetqw5uz8hrlZPtFjghbib-RbO3Q&s",
      content: `
        <h2 class="text-2xl font-semibold mb-4">Giới thiệu</h2>
        <p>Cá kho tộ là món ăn dân dã, quen thuộc trong bữa cơm gia đình Việt, đặc biệt ở miền Nam. Vị mặn ngọt hài hòa thấm đẫm từng thớ cá, kết hợp với cơm trắng thì không gì sánh bằng.</p>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Nguyên liệu</h2>
        <ul class="list-disc list-inside">
          <li>500g cá basa hoặc cá hú (cắt khúc)</li>
          <li>3 muỗng canh nước mắm</li>
          <li>2 muỗng cà phê đường</li>
          <li>1 muỗng cà phê tiêu</li>
          <li>Hành tím, tỏi, ớt, tiêu xanh</li>
          <li>Dầu ăn, nước màu</li>
        </ul>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Cách làm</h2>
        <ol class="list-decimal list-inside space-y-2">
          <li>Ướp cá với nước mắm, đường, tiêu, hành tỏi băm và nước màu trong 30 phút.</li>
          <li>Cho cá vào nồi đất (tộ), đun lửa lớn đến khi sôi.</li>
          <li>Hạ nhỏ lửa, kho liu riu khoảng 40–60 phút đến khi cá thấm và nước sánh lại.</li>
        </ol>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Mẹo vặt</h2>
        <ul class="list-disc list-inside">
          <li>Dùng nồi đất kho cá giúp món ăn thơm và giữ nhiệt tốt hơn.</li>
          <li>Có thể cho thêm tiêu xanh và tóp mỡ để tăng hương vị.</li>
        </ul>
      `
    },
    {
      id: 5,
      title: "Bánh xèo vàng giòn",
      image: "https://cdn.24h.com.vn/upload/1-2025/images/2025-03-08/1741413192-bx1-18411-width640height400.jpg",
      content: `
        <h2 class="text-2xl font-semibold mb-4">Giới thiệu</h2>
        <p>Bánh xèo là món ăn vặt, món chính lẫn món nhậu nổi tiếng ở miền Nam. Vỏ bánh vàng giòn, nhân thịt tôm đậm đà ăn kèm rau sống và nước mắm chua ngọt tạo nên hương vị không thể cưỡng lại.</p>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Nguyên liệu</h2>
        <ul class="list-disc list-inside">
          <li>200g bột bánh xèo</li>
          <li>300ml nước + nước cốt dừa</li>
          <li>100g tôm tươi, 100g thịt ba chỉ</li>
          <li>Giá đỗ, hành lá, rau sống</li>
          <li>Nước mắm pha, tỏi, ớt</li>
        </ul>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Cách làm</h2>
        <ol class="list-decimal list-inside space-y-2">
          <li>Trộn bột bánh xèo với nước và nước cốt dừa, để bột nghỉ 30 phút.</li>
          <li>Phi hành tỏi, xào sơ tôm và thịt.</li>
          <li>Cho dầu vào chảo, đổ bột vào tráng mỏng, thêm nhân và giá.</li>
          <li>Đậy nắp, rán vàng đều hai mặt cho giòn.</li>
        </ol>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Mẹo vặt</h2>
        <ul class="list-disc list-inside">
          <li>Cho nước cốt dừa vào bột giúp bánh béo và thơm hơn.</li>
          <li>Dùng chảo chống dính để bánh dễ gỡ và giòn lâu.</li>
        </ul>
      `
    },
    {
      id: 6,
      title: "Phở bò truyền thống",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzd12MXcETlsrwbUfD64ynLkhGanyJ-frqZw&s",
      content: `
        <h2 class="text-2xl font-semibold mb-4">Giới thiệu</h2>
        <p>Phở bò là một món ăn quốc dân của Việt Nam, nổi tiếng với nước dùng trong, hương vị đậm đà từ xương và gia vị. Một tô phở nóng hổi vào buổi sáng là món ăn lý tưởng để bắt đầu ngày mới.</p>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Nguyên liệu</h2>
        <ul class="list-disc list-inside">
          <li>500g xương bò (nạm, gân, đuôi bò)</li>
          <li>300g thịt bò (bắp, gầu hoặc tái)</li>
          <li>Gia vị: hành, gừng, quế, hoa hồi, thảo quả</li>
          <li>Bánh phở, giá đỗ, rau thơm (húng quế, ngò gai)</li>
          <li>Chanh, ớt, nước mắm</li>
        </ul>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Cách làm</h2>
        <ol class="list-decimal list-inside space-y-2">
          <li>Luộc xương bò trong nước sôi để làm sạch, sau đó ninh xương với gia vị trong khoảng 2-3 giờ để lấy nước dùng.</li>
          <li>Thịt bò thái mỏng, trụng qua nước sôi.</li>
          <li>Chần bánh phở qua nước sôi, cho vào tô, thêm thịt bò tái, rau thơm và giá đỗ.</li>
          <li>Đổ nước dùng nóng vào tô và thêm gia vị như chanh, ớt, và nước mắm tùy khẩu vị.</li>
        </ol>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Mẹo vặt</h2>
        <ul class="list-disc list-inside">
          <li>Để nước dùng trong, hãy vớt bọt liên tục trong khi ninh.</li>
          <li>Thêm chút nước mắm và chanh giúp nước dùng thêm phần đậm đà.</li>
        </ul>
      `
    },
    {
      id: 7,
      title: "Bánh mì kẹp thịt Việt Nam",
      image: "https://daotaobeptruong.vn/wp-content/uploads/2021/01/banh-mi-viet-nam.jpg",
      content: `
        <h2 class="text-2xl font-semibold mb-4">Giới thiệu</h2>
        <p>Bánh mì kẹp thịt là món ăn đường phố nổi tiếng của Việt Nam, với sự kết hợp hoàn hảo giữa bánh mì giòn, nhân thịt nướng thơm ngon, cùng các loại rau và nước sốt đặc biệt.</p>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Nguyên liệu</h2>
        <ul class="list-disc list-inside">
          <li>1 ổ bánh mì (loại dài, giòn)</li>
          <li>200g thịt heo nướng hoặc thịt bò nướng</li>
          <li>Rau sống: dưa leo, ngò, húng quế</li>
          <li>Ớt, chanh, tương ớt, mayonnaise</li>
        </ul>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Cách làm</h2>
        <ol class="list-decimal list-inside space-y-2">
          <li>Rang thịt heo/bò với gia vị, sau đó nướng trên bếp than hoặc lò nướng cho thơm.</li>
          <li>Chẻ bánh mì theo chiều dọc, cho nhân thịt đã nướng vào giữa, thêm rau sống và các loại gia vị như tương ớt và mayonnaise.</li>
          <li>Chút nước chanh lên trên để tăng thêm vị tươi mát.</li>
        </ol>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Mẹo vặt</h2>
        <ul class="list-disc list-inside">
          <li>Nếu không có lò nướng, có thể dùng chảo để nướng thịt và bánh mì.</li>
          <li>Thêm chút dưa leo và cà rốt ngâm chua để bánh mì thêm phần hấp dẫn.</li>
        </ul>
      `
    },
    {
      id: 8,
      title: "Chè ba màu mát lạnh",
      image: "https://bizweb.dktcdn.net/100/004/714/articles/che-ba-mau-cach-lam-ngon-mieng-dep-mat-ngay-tai-nha.png?v=1592454972940",
      content: `
        <h2 class="text-2xl font-semibold mb-4">Giới thiệu</h2>
        <p>Chè ba màu là món tráng miệng mát lạnh, đẹp mắt và ngọt dịu, được nhiều người yêu thích trong mùa hè. Món chè này được làm từ ba lớp với màu sắc bắt mắt từ đậu xanh, đậu đỏ và thạch.</p>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Nguyên liệu</h2>
        <ul class="list-disc list-inside">
          <li>100g đậu xanh</li>
          <li>100g đậu đỏ</li>
          <li>100g thạch dừa</li>
          <li>200g đường trắng, 1 ít bột agar (nếu cần)</li>
          <li>Đá bào</li>
        </ul>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Cách làm</h2>
        <ol class="list-decimal list-inside space-y-2">
          <li>Ngâm đậu xanh và đậu đỏ qua đêm, sau đó luộc cho chín mềm.</li>
          <li>Đun đường và nước để tạo thành sirô ngọt, chia ra làm 3 phần để tạo màu sắc cho chè.</li>
          <li>Làm thạch dừa, cắt thành từng miếng nhỏ.</li>
          <li>Chế chè vào ly, xếp đậu xanh, đậu đỏ, thạch dừa theo các lớp màu đẹp mắt, cuối cùng cho đá bào lên trên.</li>
        </ol>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Mẹo vặt</h2>
        <ul class="list-disc list-inside">
          <li>Thêm một ít dừa tươi lên trên chè giúp tăng thêm hương vị thơm ngon.</li>
          <li>Chè có thể ăn lạnh hoặc để vào tủ lạnh cho mát, thơm ngon hơn.</li>
        </ul>
      `
    },
    {
      id: 9,
      title: "Trà sữa trân châu đường đen",
      image: "https://lypham.vn/wp-content/uploads/2024/10/cach-nau-tra-sua-tran-chau-duong-den.jpg",
      content: `
        <h2 class="text-2xl font-semibold mb-4">Giới thiệu</h2>
        <p>Trà sữa trân châu đường đen là thức uống nổi bật trong giới trẻ, với vị ngọt béo của trà sữa kết hợp với trân châu dai dai, đặc biệt là phần nước đường đen tạo nên hương vị rất riêng biệt.</p>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Nguyên liệu</h2>
        <ul class="list-disc list-inside">
          <li>100g trân châu</li>
          <li>200ml sữa tươi</li>
          <li>2 túi trà đen</li>
          <li>50g đường nâu</li>
          <li>Đá viên</li>
        </ul>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Cách làm</h2>
        <ol class="list-decimal list-inside space-y-2">
          <li>Luộc trân châu theo hướng dẫn trên bao bì, sau đó ngâm vào nước đường nâu.</li>
          <li>Đun sôi nước, thả túi trà vào và ủ trong 5 phút. Sau đó cho sữa tươi vào khuấy đều.</li>
          <li>Cho trân châu vào cốc, đổ trà sữa lên trên và thêm đá viên cho lạnh.</li>
        </ol>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Mẹo vặt</h2>
        <ul class="list-disc list-inside">
          <li>Trân châu có thể thay bằng thạch hoặc các loại topping khác theo sở thích.</li>
          <li>Để trà sữa thơm ngon hơn, bạn có thể thêm một chút vani hoặc caramel.</li>
        </ul>
      `
    },
    {
      id: 10,
      title: "Cà phê sữa đá chuẩn vị Sài Gòn",
      image: "https://product.hstatic.net/200000745755/product/4_ccceb5085680488b824d1e1308b49921_master.jpg",
      content: `
        <h2 class="text-2xl font-semibold mb-4">Giới thiệu</h2>
        <p>Cà phê sữa đá là một thức uống đặc trưng của Sài Gòn, với hương vị đậm đà của cà phê hòa quyện với sữa đặc thơm béo. Một ly cà phê sữa đá là cách tuyệt vời để bắt đầu ngày mới hoặc thư giãn vào buổi chiều.</p>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Nguyên liệu</h2>
        <ul class="list-disc list-inside">
          <li>2 muỗng cà phê bột cà phê nguyên chất</li>
          <li>2 muỗng sữa đặc</li>
          <li>Đá viên</li>
        </ul>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Cách làm</h2>
        <ol class="list-decimal list-inside space-y-2">
          <li>Phin cà phê: Đặt cà phê vào phin và đổ nước sôi từ từ để pha cà phê.</li>
          <li>Đổ sữa đặc vào cốc, sau đó cho cà phê đã pha vào cốc.</li>
          <li>Thêm đá viên vào và khuấy đều, thưởng thức ngay.</li>
        </ol>
    
        <h2 class="text-2xl font-semibold mt-8 mb-4">Mẹo vặt</h2>
        <ul class="list-disc list-inside">
          <li>Cà phê pha từ phin sẽ có hương vị thơm ngon và đậm đà hơn.</li>
          <li>Để cà phê thêm thơm, có thể sử dụng cà phê rang xay tại nhà.</li>
        </ul>
      `
    }      
];

// Lấy ID từ query string
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// Tìm bài viết
const post = blogPosts.find(p => p.id === id);

// Hiển thị bài viết nếu có
const container = document.getElementById("blog-detail");
if (post) {
  container.innerHTML = `
    <h1 class="text-3xl font-bold mb-6">${post.title}</h1>
    <img src="${post.image}" alt="${post.title}" class="w-full h-96 object-cover rounded-lg mb-6">
    <div class="text-lg leading-relaxed">${post.content}</div>
  `;
} else {
  container.innerHTML = `<p class="text-red-500 text-center">Không tìm thấy bài viết.</p>`;
}
