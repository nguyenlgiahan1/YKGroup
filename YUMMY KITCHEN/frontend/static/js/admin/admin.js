document.getElementById('recipeForm').addEventListener('submit', function (event) {
    const fields = [
        'title', 'category', 'description', 'ingredients', 'instructions', 
        'image', 'author', 'cook_time', 'servings', 
        'calories', 'protein', 'carbs', 'fat'
    ];

    for (let field of fields) {
        const value = document.getElementById(field).value;
        if (!value) {
            alert('Vui lòng điền đầy đủ thông tin.');
            event.preventDefault();
            return;
        }
    }

    console.log('Form đã sẵn sàng để gửi.');
});
