function getRecipeIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id"));
}

async function fetchRecipes() {
  try {
    const response = await fetch('../../../static/data/congthuc.json'); 
    return await response.json();
  } catch (error) {
    console.error("Lỗi tải công thức:", error);
    alert("Không thể tải dữ liệu công thức!");
    return [];
  }
}

function displayRecipe(recipe) {
  document.getElementById("title").textContent = recipe.title;
  document.getElementById("author").innerHTML = `👨‍🍳 Bởi <strong>${recipe.author}</strong>`;
  document.getElementById("time").textContent = `⏱ Thời gian: ${recipe.cook_time}`;
  document.getElementById("serving").textContent = `🍽 Khẩu phần: ${recipe.servings}`;
  document.getElementById("category").textContent = `🍜 Danh mục: ${recipe.category}`;

  const videoContainer = document.getElementById("video-container");
  const videoUrl = recipe.video;
  const videoId = getYouTubeVideoId(videoUrl);

  if (videoId) {
    videoContainer.innerHTML = `
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
    `;
  } else {
    videoContainer.innerHTML = "<p>Video không hợp lệ</p>";
  }

  document.getElementById("description").textContent = recipe.description;

  const ingredientsList = document.getElementById("ingredients");
  ingredientsList.innerHTML = "";
  recipe.ingredients.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ingredientsList.appendChild(li);
  });

  const stepsList = document.getElementById("steps");
  stepsList.innerHTML = "";
  recipe.instructions.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    stepsList.appendChild(li);
  });

  const nutritionList = document.getElementById("nutrition");
  nutritionList.innerHTML = "";
  for (const key in recipe.nutrition) {
    const li = document.createElement("li");
    li.textContent = `${key}: ${recipe.nutrition[key]}`;
    nutritionList.appendChild(li);
  }
}

function getYouTubeVideoId(url) {
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function displaySuggestions(recipes, currentRecipe) {
  const suggested = document.getElementById("suggested");
  suggested.innerHTML = "";

  const sameCategoryRecipes = recipes.filter(r => 
    r.category === currentRecipe.category && r.id !== currentRecipe.id
  );

  const differentCategoryRecipes = recipes.filter(r => 
    r.category !== currentRecipe.category && r.id !== currentRecipe.id
  );

  let selectedSuggestions = [];

  if (sameCategoryRecipes.length >= 3) {
    selectedSuggestions = shuffleArray(sameCategoryRecipes).slice(0, 3);
  } else {
    selectedSuggestions = shuffleArray(sameCategoryRecipes);
    const missing = 3 - selectedSuggestions.length;
    selectedSuggestions = selectedSuggestions.concat(shuffleArray(differentCategoryRecipes).slice(0, missing));
  }

  selectedSuggestions.forEach(recipe => {
    const div = document.createElement("div");
    div.className = "flex gap-3";

    div.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" class="w-20 h-20 object-cover rounded">
      <div>
        <h4 class="font-semibold text-base">${recipe.title}</h4>
        <a href="detail.html?id=${recipe.id}" class="text-orange-500 text-sm hover:underline">Xem chi tiết</a>
      </div>
    `;
    suggested.appendChild(div);
  });
}

(async () => {
  const id = getRecipeIdFromURL();
  if (!id) {
    alert("Không tìm thấy món ăn!");
    return;
  }

  const recipes = await fetchRecipes();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    alert("Món ăn không tồn tại!");
    return;
  }

  displayRecipe(recipe);
  displaySuggestions(recipes, recipe);
})();
