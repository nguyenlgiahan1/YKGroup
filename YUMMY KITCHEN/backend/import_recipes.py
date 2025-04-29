import json
import pyodbc
import os
import traceback

server = 'LAPTOP-5BLJANV6' 
database = 'YummyKitchen'
connection_string = f'DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={server};DATABASE={database};Trusted_Connection=yes;'

try:
    conn = pyodbc.connect(connection_string)
    cursor = conn.cursor()
    print("Kết nối tới cơ sở dữ liệu thành công!")
except Exception as e:
    print(f"Không thể kết nối tới cơ sở dữ liệu: {e}")
    exit()


data_path = os.path.join(os.path.dirname(__file__), 'congthuc.json')  

try:
    with open(data_path, 'r', encoding='utf-8') as file:
        recipes = json.load(file)
    print(f"Đọc dữ liệu JSON thành công, có {len(recipes)} công thức.")
except Exception as e:
    print(f"Lỗi khi đọc file JSON: {e}")
    exit()

try:
    for recipe in recipes:
        
        cursor.execute(''' 
            INSERT INTO Recipes (id, title, author, cook_time, servings, category, image, description, video)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            recipe['id'],
            recipe['title'],
            recipe['author'],
            recipe['cook_time'],
            recipe['servings'],
            recipe['category'],
            recipe['image'],
            recipe['description'],
            recipe['video']
        ))
        print(f"Đã chèn công thức '{recipe['title']}' vào bảng Recipes.")

        #Ingredients
        ingredients = [(recipe['id'], ingredient) for ingredient in recipe.get('ingredients', [])]
        if ingredients:
            cursor.executemany('''
                INSERT INTO Ingredients (recipe_id, ingredient)
                VALUES (?, ?)
            ''', ingredients)
            print(f"Đã chèn {len(ingredients)} nguyên liệu cho công thức '{recipe['title']}'.")

        #Instructions
        instructions = [(recipe['id'], step_number, instruction) for step_number, instruction in enumerate(recipe.get('instructions', []), start=1)]
        if instructions:
            cursor.executemany('''
                INSERT INTO Instructions (recipe_id, step_number, instruction)
                VALUES (?, ?, ?)
            ''', instructions)
            print(f"Đã chèn {len(instructions)} bước thực hiện cho công thức '{recipe['title']}'.")

        #Nutrition
        nutrition = recipe.get('nutrition')
        if nutrition:
            cursor.execute('''
                INSERT INTO Nutrition (recipe_id, calories, protein, carbs, fat)
                VALUES (?, ?, ?, ?, ?)
            ''', (
                recipe['id'],
                nutrition.get('calories', 0),
                nutrition.get('protein', 0),
                nutrition.get('carbs', 0),
                nutrition.get('fat', 0)
            ))
            print(f"Đã chèn thông tin dinh dưỡng cho công thức '{recipe['title']}'.")

    conn.commit()
    print("Dữ liệu đã được lưu thành công vào cơ sở dữ liệu!")

except Exception as e:
    traceback.print_exc()
    print(f"Đã xảy ra lỗi trong quá trình chèn dữ liệu: {e}")
    conn.rollback()  

finally:
    cursor.close()
    conn.close()
    print("Đã đóng kết nối với cơ sở dữ liệu.")