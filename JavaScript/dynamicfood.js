window.onload = function (){

	function generateFoodHTML(date, myBreakfast, myLunch, myDinner){

		var dayObject = {
			title: date,
			meals: {
				breakfast: {description: myBreakfast[0],
								img: myBreakfast[1],
							},
				lunch: {description: myLunch[0],
								img: myBreakfast[1]
							},
				dinner: {description: myBreakfast[0],
								img: myBreakfast[1]
							}
			}

		};
		return dayObject;
	}

	var juneEighteen = generateFoodHTML(
		"Saturday, June 18",
		["Eggs and pancakes","http://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/image/recipes/ck/00/12/pancakes-ck-222326-x.jpg?itok=MW6FssOg"],
		["Carrots", "https://swflproduce.net/wp-content/uploads/2015/09/carrots-300x300.jpg"],
		["Lobster Press","http://hannaford.gsnrecipes.com/GetImage.aspx?code=66587ovenroastedherbturkeyandhoneyhampanini.jpg&size=300&min=128"]

	)
	var juneNineteen = generateFoodHTML(
		"Sunday, June 19",
		["Eggs and pancakes","http://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/image/recipes/ck/00/12/pancakes-ck-222326-x.jpg?itok=MW6FssOg"],
		["Carrots", "https://swflproduce.net/wp-content/uploads/2015/09/carrots-300x300.jpg"],
		["Lobster Press","http://hannaford.gsnrecipes.com/GetImage.aspx?code=66587ovenroastedherbturkeyandhoneyhampanini.jpg&size=300&min=128"]

	)
	var juneTwenty = generateFoodHTML(
		"Monday, June 20",
		["Eggs and pancakes","http://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/image/recipes/ck/00/12/pancakes-ck-222326-x.jpg?itok=MW6FssOg"],
		["Carrots", "https://swflproduce.net/wp-content/uploads/2015/09/carrots-300x300.jpg"],
		["Lobster Press","http://hannaford.gsnrecipes.com/GetImage.aspx?code=66587ovenroastedherbturkeyandhoneyhampanini.jpg&size=300&min=128"]

	)
	var juneTwentyOne = generateFoodHTML(
		"Tuesday, June 21",
		["Eggs and pancakes","http://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/image/recipes/ck/00/12/pancakes-ck-222326-x.jpg?itok=MW6FssOg"],
		["Carrots", "https://swflproduce.net/wp-content/uploads/2015/09/carrots-300x300.jpg"],
		["Lobster Press","http://hannaford.gsnrecipes.com/GetImage.aspx?code=66587ovenroastedherbturkeyandhoneyhampanini.jpg&size=300&min=128"]

	)
	var juneTwentyTwo = generateFoodHTML(
		"Wednesday, June 22",
		["Eggs and pancakes","http://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/image/recipes/ck/00/12/pancakes-ck-222326-x.jpg?itok=MW6FssOg"],
		["Carrots", "https://swflproduce.net/wp-content/uploads/2015/09/carrots-300x300.jpg"],
		["Lobster Press","http://hannaford.gsnrecipes.com/GetImage.aspx?code=66587ovenroastedherbturkeyandhoneyhampanini.jpg&size=300&min=128"]

	)
	var juneTwentyThree = generateFoodHTML(
		"Thursday, June 23",
		["Eggs and pancakes","http://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/image/recipes/ck/00/12/pancakes-ck-222326-x.jpg?itok=MW6FssOg"],
		["Carrots", "https://swflproduce.net/wp-content/uploads/2015/09/carrots-300x300.jpg"],
		["Lobster Press","http://hannaford.gsnrecipes.com/GetImage.aspx?code=66587ovenroastedherbturkeyandhoneyhampanini.jpg&size=300&min=128"]

	)
	var juneTwentyFour = generateFoodHTML(
		"Friday, June 24",
		["Eggs and pancakes","http://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/image/recipes/ck/00/12/pancakes-ck-222326-x.jpg?itok=MW6FssOg"],
		["Carrots", "https://swflproduce.net/wp-content/uploads/2015/09/carrots-300x300.jpg"],
		["Lobster Press","http://hannaford.gsnrecipes.com/GetImage.aspx?code=66587ovenroastedherbturkeyandhoneyhampanini.jpg&size=300&min=128"]

	)
	var juneTwentyFive = generateFoodHTML(
		"Saturday, June 25",
		["Eggs and pancakes","http://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/image/recipes/ck/00/12/pancakes-ck-222326-x.jpg?itok=MW6FssOg"],
		["Carrots", "https://swflproduce.net/wp-content/uploads/2015/09/carrots-300x300.jpg"],
		["Lobster Press","http://hannaford.gsnrecipes.com/GetImage.aspx?code=66587ovenroastedherbturkeyandhoneyhampanini.jpg&size=300&min=128"]

	)
	var juneTwentySix = generateFoodHTML(
		"Sunday, June 26",
		["Eggs and pancakes","http://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/image/recipes/ck/00/12/pancakes-ck-222326-x.jpg?itok=MW6FssOg"],
		["Carrots", "https://swflproduce.net/wp-content/uploads/2015/09/carrots-300x300.jpg"],
		["Lobster Press","http://hannaford.gsnrecipes.com/GetImage.aspx?code=66587ovenroastedherbturkeyandhoneyhampanini.jpg&size=300&min=128"]
	);

	var daysInBlog = [juneEighteen, juneNineteen, juneTwenty, juneTwentyTwo, juneTwentyTwo, juneTwentyThree, juneTwentyFour, juneTwentyFive, juneTwentySix]

	function makeFoodHTML(date){
		return '<div class="foodDayContainer"> ' +
					'<ul>'+
						'<li>'+
							'<img src="' + date.meals.breakfast.img + '" />'+
							'<span class="mealName">Breakfast</span><br />' + date.meals.breakfast.description + 
						'</li>' +
						'<li>' +
							'<img src="' + date.meals.lunch.img + '" />'+
							'<span class="mealName">Lunch</span><br/ >' + date.meals.lunch.description + 
						'</li>'+
						'<li>'+
							'<img src="' + date.meals.dinner.img +'" />'+
							'<span class="mealName">Dinner</span><br />' + date.meals.dinner.description +
						'</li>'+
					'</ul>'+
				'</div>';
	}

	function makeTitle(day){
		return '<h1>' + day.title + '</h1>';
	}

	function makeHTMLForAllDays(days){

		var dayString = "";

		for(i=0;i<days.length; i++){
			dayString = dayString + makeFoodHTML(days[i]);
		}
		return dayString;
	}

	document.getElementsByClassName("month")[0].innerHTML = makeTitle(daysInBlog[0]);
	document.getElementById("foodContainer").innerHTML = makeHTMLForAllDays(daysInBlog);
}

// var dayDivs = $('foodContainer').children('.foodDayContainer')






















