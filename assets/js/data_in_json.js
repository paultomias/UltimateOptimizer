var food_item = [
	{"name" : "Broccoli" ,"price_per_serving" : 0.16, "serving_size" : 10, "0" : 73.8, "1" : 0, "2" : 0.8, "3" : 68.2, "4" : 13.6, "5" : 8.5, "6" : 8, "7" : 5867.4, "8" : 160.2, "9" : 159, "10" : 2.3},
	{"name" : "Carrots" , "price_per_serving" : 0.07, "serving_size" : 0.5, "0" : 23.7, "1" : 0, "2" : 0.1, "3" : 19.2, "4" : 5.6, "5" : 1.6, "6" : 0.6, "7" : 15471, "8" : 5.1, "9" : 14.9, "10" : 0.3},
	{"name" : "Celery", "price_per_serving" : 0.04, "serving_size" : 1, "0" : 6.4, "1" : 0, "2" : 0.1, "3" : 34.8, "4" : 1.5, "5" : 0.7, "6" : 0.3, "7" : 53.6, "8" : 2.8, "9" : 16, "10" : 0.2},
	{"name" : "Corn", "price_per_serving" : 0.18, "serving_size" : 0.5, "0" : 72.2, "1" : 0, "2" : 0.6, "3" : 2.5, "4" : 17.1, "5" : 2, "6" : 2.5, "7" : 106.6, "8" : 5.2, "9" : 3.3, "10" : 0.3},
	{"name" : "Lettuce", "price_per_serving" : 0.02, "serving_size" : 1, "0" : 2.6, "1" : 0, "2" : 0, "3" : 1.8, "4" : 0.4, "5" : 0.3, "6" : 0.2, "7" : 66, "8" : 0.8, "9" : 3.8, "10" : 0.1},
	{"name" : "Peppers", "price_per_serving" : 0.53, "serving_size" : 1, "0" : 20, "1" : 0, "2" : 0.1, "3" : 1.5, "4" : 4.8, "5" : 1.3, "6" : 0.7, "7" : 467.7, "8" : 66.1, "9" : 6.7, "10" : 0.3},
	{"name" : "Potatoes", "price_per_serving" : 0.06, "serving_size" : 0.5, "0" : 171.5, "1" : 0, "2" : 0.2, "3" : 15.2, "4" : 39.9, "5" : 3.2, "6" : 3.7, "7" : 0, "8" : 15.6, "9" : 22.7, "10" : 4.3},
	{"name" : "Tofu", "price_per_serving" : 0.31, "serving_size" : 0.25, "0" : 88.2, "1" : 0, "2" : 5.5, "3" : 8.1, "4" : 2.2, "5" : 1.4, "6" : 9.4, "7" : 98.6, "8" : 0.1, "9" : 121.8, "10" : 6.2},
	{"name" : "Roasted Chicken", "price_per_serving" : 0.84, "serving_size" : 1, "0" : 277.4, "1" : 129.9, "2" : 10.8, "3" : 125.6, "4" : 0, "5" : 0, "6" : 42.2, "7" : 77.4, "8" : 0, "9" : 21.9, "10" : 1.8},
	{"name" : "Spaghetti", "price_per_serving" : 0.78, "serving_size" : 1.5, "0" : 358.2, "1" : 0, "2" : 12.3, "3" : 1237.1, "4" : 58.3, "5" : 11.6, "6" : 8.2, "7" : 3055.2, "8" : 27.9, "9" : 80.2, "10" : 2.3},
	{"name" : "Tomato", "price_per_serving" : 0.27, "serving_size" : 1, "0" : 25.8, "1" : 0, "2" : 0.4, "3" : 11.1, "4" : 5.7, "5" : 1.4, "6" : 1, "7" : 766.3, "8" : 23.5, "9" : 6.2, "10" : 0.6},
	{"name" : "Apple", "price_per_serving" : 0.24, "serving_size" : 1, "0" : 81.4, "1" : 0, "2" : 0.5, "3" : 0, "4" : 21, "5" : 3.7, "6" : 0.3, "7" : 73.1, "8" : 7.9, "9" : 9.7, "10" : 0.2},
	{"name" : "Banana", "price_per_serving" : 0.15, "serving_size" : 1, "0" : 104.9, "1" : 0, "2" : 0.5, "3" : 1.1, "4" : 26.7, "5" : 2.7, "6" : 1.2, "7" : 92.3, "8" : 10.4, "9" : 6.8, "10" : 0.4},
	{"name" : "Grapes", "price_per_serving" : 0.32, "serving_size" : 10, "0" : 15.1, "1" : 0, "2" : 0.1, "3" : 0.5, "4" : 4.1, "5" : 0.2, "6" : 0.2, "7" : 24, "8" : 1, "9" : 3.4, "10" : 0.1},
	{"name" : "Kiwifruit", "price_per_serving" : 0.49, "serving_size" : 1, "0" : 46.4, "1" : 0, "2" : 0.3, "3" : 3.8, "4" : 11.3, "5" : 2.6, "6" : 0.8, "7" : 133, "8" : 74.5, "9" : 19.8, "10" : 0.3},
	{"name" : "Oranges", "price_per_serving" : 0.15, "serving_size" : 1, "0" : 61.6, "1" : 0, "2" : 0.2, "3" : 0, "4" : 15.4, "5" : 3.1, "6" : 1.2, "7" : 268.6, "8" : 69.7, "9" : 52.4, "10" : 0.1},
	{"name" : "Bagels", "price_per_serving" : 0.16, "serving_size" : 1, "0" : 78, "1" : 0, "2" : 0.5, "3" : 151.4, "4" : 15.1, "5" : 0.6, "6" : 3, "7" : 0, "8" : 0, "9" : 21, "10" : 1},
	{"name" : "Wheat Bread", "price_per_serving" : 0.05, "serving_size" : 1, "0" : 65, "1" : 0, "2" : 1, "3" : 134.5, "4" : 12.4, "5" : 1.3, "6" : 2.2, "7" : 0, "8" : 0, "9" : 10.8, "10" : 0.7},
	{"name" : "White Bread", "price_per_serving" : 0.06, "serving_size" : 1, "0" : 65, "1" : 0, "2" : 1, "3" : 132.5, "4" : 11.8, "5" : 1.1, "6" : 2.3, "7" : 0, "8" : 0, "9" : 26.2, "10" : 0.8},
	{"name" : "Oatmeal Cookies", "price_per_serving" : 0.09, "serving_size" : 1, "0" : 81, "1" : 0, "2" : 3.3, "3" : 68.9, "4" : 12.4, "5" : 0.6, "6" : 1.1, "7" : 2.9, "8" : 0.1, "9" : 6.7, "10" : 0.5},
	{"name" : "Apple Pie", "price_per_serving" : 0.16, "serving_size" : 1, "0" : 67.2, "1" : 0, "2" : 3.1, "3" : 75.4, "4" : 9.6, "5" : 0.5, "6" : 0.5, "7" : 35.2, "8" : 0.9, "9" : 3.1, "10" : 0.1},
	{"name" : "Chocolate Chip Cookies", "price_per_serving" : 0.03, "serving_size" : 1, "0" : 78.1, "1" : 5.1, "2" : 4.5, "3" : 57.8, "4" : 9.3, "5" : 0, "6" : 0.9, "7" : 101.8, "8" : 0, "9" : 6.2, "10" : 0.4},
	{"name" : "Butter", "price_per_serving" : 0.05, "serving_size" : 1, "0" : 35.8, "1" : 10.9, "2" : 4.1, "3" : 41.3, "4" : 0, "5" : 0, "6" : 0, "7" : 152.9, "8" : 0, "9" : 1.2, "10" : 0},
	{"name" : "Cheddar Cheese", "price_per_serving" : 0.25, "serving_size" : 1, "0" : 112.7, "1" : 29.4, "2" : 9.3, "3" : 173.7, "4" : 0.4, "5" : 0, "6" : 7, "7" : 296.5, "8" : 0, "9" : 202, "10" : 0.2},
	{"name" : "Whole Milk", "price_per_serving" : 0.16, "serving_size" : 1, "0" : 149.9, "1" : 33.2, "2" : 8.1, "3" : 119.6, "4" : 11.4, "5" : 0, "6" : 8, "7" : 307.4, "8" : 2.3, "9" : 291.3, "10" : 0.1},
	{"name" : "Lowfat Milk", "price_per_serving" : 0.23, "serving_size" : 1, "0" : 121.2, "1" : 18.3, "2" : 4.7, "3" : 121.8, "4" : 11.7, "5" : 0, "6" : 8.1, "7" : 500.2, "8" : 2.3, "9" : 296.7, "10" : 0.1},
	{"name" : "Skim Milk", "price_per_serving" : 0.13, "serving_size" : 1, "0" : 85.5, "1" : 4.4, "2" : 0.4, "3" : 126.2, "4" : 11.9, "5" : 0, "6" : 8.4, "7" : 499.8, "8" : 2.4, "9" : 302.3, "10" : 0.1},
	{"name" : "Poached Eggs", "price_per_serving" : 0.08, "serving_size" : 1, "0" : 74.5, "1" : 211.5, "2" : 5, "3" : 140, "4" : 0.6, "5" : 0, "6" : 6.2, "7" : 316, "8" : 0, "9" : 24.5, "10" : 0.7},
	{"name" : "Scrambled Eggs", "price_per_serving" : 0.11, "serving_size" : 1, "0" : 99.6, "1" : 211.2, "2" : 7.3, "3" : 168, "4" : 1.3, "5" : 0, "6" : 6.7, "7" : 409.2, "8" : 0.1, "9" : 42.6, "10" : 0.7},
	{"name" : "Bologna, Turkey", "price_per_serving" : 0.15, "serving_size" : 1, "0" : 56.4, "1" : 28.1, "2" : 4.3, "3" : 248.9, "4" : 0.3, "5" : 0, "6" : 3.9, "7" : 0, "8" : 0, "9" : 23.8, "10" : 0.4},
	{"name" : "Frankfurter, Beef", "price_per_serving" : 0.27, "serving_size" : 1, "0" : 141.8, "1" : 27.4, "2" : 12.8, "3" : 461.7, "4" : 0.8, "5" : 0, "6" : 5.4, "7" : 0, "8" : 10.8, "9" : 9, "10" : 0.6},
	{"name" : "Ham, Sliced, Extralean", "price_per_serving" : 0.33, "serving_size" : 1, "0" : 37.1, "1" : 13.3, "2" : 1.4, "3" : 405.1, "4" : 0.3, "5" : 0, "6" : 5.5, "7" : 0, "8" : 7.4, "9" : 2, "10" : 0.2},
	{"name" : "Kielbasa", "price_per_serving" : 0.15, "serving_size" : 1, "0" : 80.66, "1" : 17.4, "2" : 7.1, "3" : 279.8, "4" : 0.6, "5" : 0, "6" : 3.4, "7" : 0, "8" : 5.5, "9" : 11.4, "10" : 0.4},
	{"name" : "Captain Crunch", "price_per_serving" : 0.31, "serving_size" : 1, "0" : 119.6, "1" : 0, "2" : 2.6, "3" : 213.3, "4" : 23, "5" : 0.5, "6" : 1.4, "7" : 40.6, "8" : 0, "9" : 4.8, "10" : 7.5},
	{"name" : "Cheerios", "price_per_serving" : 0.28, "serving_size" : 1, "0" : 111, "1" : 0, "2" : 1.8, "3" : 307.6, "4" : 19.6, "5" : 2, "6" : 4.3, "7" : 1252.2, "8" : 15.1, "9" : 48.6, "10" : 4.5},
	{"name" : "Corn Flakes", "price_per_serving" : 0.28, "serving_size" : 1, "0" : 110.5, "1" : 0, "2" : 0.1, "3" : 290.5, "4" : 24.5, "5" : 0.7, "6" : 2.3, "7" :1252.2 , "8" : 15.1, "9" : 0.9, "10" : 1.8},
	{"name" : "Raisin Brn", "price_per_serving" : 0.34, "serving_size" : 1.3, "0" : 115.1, "1" : 0, "2" : 0.7, "3" : 204.4, "4" : 27.9, "5" : 4, "6" : 4, "7" : 1250.2, "8" : 0, "9" : 12.9, "10" : 16.8},
	{"name" : "Rice Krispies", "price_per_serving" : 0.32, "serving_size" : 1, "0" : 112.2, "1" : 0, "2" : 0.2, "3" : 340.8, "4" : 24.8, "5" : 0.4, "6" : 1.9, "7" : 1252.2, "8" : 15.1, "9" : 4, "10" : 1.8},
	{"name" : "Special K", "price_per_serving" : 0.38, "serving_size" : 1, "0" : 110.8, "1" : 0, "2" : 0.1, "3" : 265.5, "4" : 21.3, "5" : 0.7, "6" : 5.6, "7" : 1252.2, "8" : 15.1 , "9" : 8.2, "10" : 4.5},
	{"name" : "Oatmeal", "price_per_serving" : 0.82, "serving_size" : 1, "0" : 145.1, "1" : 0, "2" : 2.3, "3" : 2.3, "4" : 25.3, "5" : 4, "6" : 6.1, "7" : 37.4, "8" : 0, "9" : 18.7, "10" : 1.6},
	{"name" : "Malt-O-Meal", "price_per_serving" : 0.52, "serving_size" : 1, "0" : 607.2, "1" : 0, "2" : 1.5, "3" : 16.5, "4" : 128.2, "5" : 0, "6" : 17.3, "7" : 0, "8" : 0, "9" : 23.1, "10" : 47.2},
	{"name" : "Pizza with Pepperoni", "price_per_serving" : 0.44, "serving_size" : 1, "0" : 181, "1" : 14.2, "2" : 7, "3" : 267, "4" : 19.9, "5" : 0, "6" : 10.1, "7" : 281.9, "8" : 1.6, "9" : 64.6, "10" : 0.9},
	{"name" : "Taco", "price_per_serving" : 0.59, "serving_size" : 1, "0" : 369.4, "1" : 56.4, "2" : 20.6, "3" : 802, "4" : 26.7, "5" : 0, "6" : 20.7, "7" : 855, "8" : 2.2, "9" : 220.6, "10" : 2.4},
	{"name" : "Hamburger", "price_per_serving" : 0.83, "serving_size" : 1, "0" : 275, "1" : 42.8, "2" : 10.2, "3" : 563.9, "4" : 32.7, "5" : 0, "6" : 13.6, "7" : 126.3, "8" : 2.6, "9" : 51.4, "10" : 2.5},
	{"name" : "Hotdog", "price_per_serving" : 0.31, "serving_size" : 1, "0" : 242.1, "1" : 44.1, "2" : 14.5, "3" : 670.3, "4" : 18, "5" : 0, "6" : 10.4, "7" : 0, "8" : 0.1, "9" : 23.5, "10" : 2.3},
	{"name" : "Couscous", "price_per_serving" : 0.39, "serving_size" : 0.5, "0" : 100.8, "1" : 0, "2" : 0.1, "3" : 4.5, "4" : 20.9, "5" : 1.3, "6" : 3.4, "7" : 0, "8" : 0, "9" : 7.2, "10" : 0.3},
	{"name" : "White Rice", "price_per_serving" : 0.08, "serving_size" : 0.5, "0" : 102.7, "1" : 0, "2" : 0.2, "3" : 0.8, "4" : 22.3, "5" : 0.3, "6" : 2.1, "7" : 0, "8" : 0, "9" : 7.9, "10" : 0.9},
	{"name" : "Macaroni", "price_per_serving" : 0.17, "serving_size" : 0.5, "0" : 98.7, "1" : 0, "2" : 0.5, "3" : 0.7, "4" : 19.8, "5" : 0.9, "6" : 3.3, "7" : 0, "8" : 0, "9" : 4.9, "10" : 1},
	{"name" : "Peanut Butter", "price_per_serving" : 0.07, "serving_size" : 2, "0" : 188.5, "1" : 0, "2" : 16, "3" : 155.5, "4" : 6.9, "5" : 2.1, "6" : 7.7, "7" : 0, "8" : 0, "9" : 13.1, "10" : 0.6},
	{"name" : "Pork", "price_per_serving" : 0.81, "serving_size" : 4, "0" : 710.8, "1" : 105.1, "2" : 72.2, "3" : 38.4, "4" : 0, "5" : 0, "6" : 13.8, "7" : 14.7, "8" : 0, "9" : 59.9, "10" : 0.4},
	{"name" : "Sardines in Oil", "price_per_serving" : 0.45, "serving_size" : 2, "0" : 49.9, "1" : 34.1, "2" : 2.7, "3" : 121.2, "4" : 0, "5" : 0, "6" : 5.9, "7" : 53.8, "8" : 0, "9" : 91.7, "10" : 0.7},
	{"name" : "White Tuna in Water", "price_per_serving" : 0.69, "serving_size" : 3, "0" : 115.6, "1" : 35.7, "2" : 2.1, "3" : 333.2, "4" : 0, "5" : 0, "6" : 22.7, "7" : 68, "8" : 0, "9" : 3.4, "10" : 0.5},
	{"name" : "Popcorn", "price_per_serving" : 0.04, "serving_size" : 1, "0" : 108.3, "1" : 0, "2" : 1.2, "3" : 1.1, "4" : 22.1, "5" : 4.3, "6" : 3.4, "7" : 55.6, "8" : 0, "9" : 2.8, "10" : 0.8},
	{"name" : "Potato Chips", "price_per_serving" : 0.22, "serving_size" : 1, "0" : 139.2, "1" : 0, "2" : 9.2, "3" : 212.6, "4" : 15, "5" : 1.2, "6" : 2.2, "7" : 61.5, "8" : 9.6, "9" : 14.2, "10" : 0.5},
	{"name" : "Pretzels", "price_per_serving" : 0.12, "serving_size" : 1, "0" : 108, "1" : 0, "2" : 1, "3" : 486.2, "4" : 22.5, "5" : 0.9, "6" : 2.6, "7" : 0, "8" : 0, "9" : 10.2, "10" : 1.2},
	{"name" : "Tortilla Chips", "price_per_serving" : 0.19, "serving_size" : 1, "0" : 142, "1" : 0, "2" : 7.4, "3" : 149.7, "4" : 17.8, "5" : 1.8, "6" : 2, "7" : 55.6, "8" : 0, "9" : 43.7, "10" : 0.4},
	{"name" : "Chicken Noodle Soup", "price_per_serving" : 0.39, "serving_size" : 1, "0" : 150.1, "1" : 12.3, "2" : 4.6, "3" : 1862.2, "4" : 18.7, "5" : 1.5, "6" : 7.9, "7" : 1308.7, "8" : 0, "9" : 27.1, "10" : 1.5},
	{"name" : "Split Pea and Ham Soup", "price_per_serving" : 0.67, "serving_size" : 1, "0" : 184.8, "1" : 7.2, "2" : 4, "3" : 964.8, "4" : 26.8, "5" : 4.1, "6" : 11.1, "7" : 4872, "8" : 7, "9" : 33.6, "10" : 2.1},
	{"name" : "Vegetbeef Soup", "price_per_serving" : 0.71, "serving_size" : 1, "0" : 158.1, "1" : 10, "2" : 3.8, "3" : 1915.1, "4" : 20.4, "5" : 4, "6" : 11.2, "7" : 3785.1, "8" : 4.8, "9" : 32.6, "10" : 2.2},
	{"name" : "New England Clam Chowder", "price_per_serving" : 0.75, "serving_size" : 1, "0" : 175.7, "1" : 10, "2" : 5, "3" : 1864.9, "4" : 21.8, "5" : 1.5, "6" : 10.9, "7" : 20.1, "8" : 4.8, "9" : 82.8, "10" : 2.8},
	{"name" : "Tomato Soup", "price_per_serving" : 0.39, "serving_size" : 1, "0" : 170.7, "1" : 0, "2" : 3.8, "3" : 1744.4, "4" : 33.2, "5" : 1, "6" : 4.1, "7" : 1393, "8" : 133, "9" : 27.6, "10" : 3.5},
	{"name" : "New England Clam Chowder with Milk", "price_per_serving" : 0.99, "serving_size" : 1, "0" : 163.7, "1" : 22.3, "2" : 6.6, "3" : 992, "4" : 16.6, "5" : 1.5, "6" : 9.5, "7" : 163.7, "8" : 3.5, "9" : 186, "10" : 1.5},
	{"name" : "Cream of Mushroom Soup with Milk", "price_per_serving" : 0.65, "serving_size" : 1, "0" : 203.4, "1" : 19.8, "2" : 13.6, "3" : 1076.3, "4" : 15, "5" : 0.5, "6" : 6.1, "7" : 153.8, "8" : 2.2, "9" : 178.6, "10" : 0.6},
	{"name" : "Beanbacn Soup With Water", "price_per_serving" : 0.67, "serving_size" : 1, "0" : 172, "1" : 2.5, "2" : 5.9, "3" : 951.3, "4" : 22.8, "5" : 8.6, "6" : 7.9, "7" : 888, "8" : 1.5, "9" : 81, "10" : 2}
];