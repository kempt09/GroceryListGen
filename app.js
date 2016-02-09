var list = {

	items : [

		{ 
			name : 'Beef',
			price : 2.99

		},
		{ 
			name : 'Milk',
			price : 2.99

		},
		{ 
			name : 'Doritos',
			price : 1.75

		},
		{ 
			name : 'Cereal',
			price : 3.30

		},
		{ 
			name : 'Celery',
			price : 0.99

		},
		{ 
			name : 'Peanut Butter',
			price : 5.49

		},
		{
			name : 'Dog Food',
			price : 30.67
		}
	]
};

function createList() {

	'use strict';

	var foodArray = [],
		priceArray = [],
		item;

	for (item in list.items) {
		foodArray.push(list.items[item].name);
		priceArray.push(list.items[item].price);
	}

	foodArray.forEach(function(e){

	var foodList = document.getElementById('food'),
		items = document.createElement('li');
	foodList.appendChild(items);
	items.innerHTML = e;

	});

	priceArray.forEach(function(e){

	var priceList = document.getElementById('price'),
		items = document.createElement('li'),
		total = document.getElementById('total'),
		totalPrice = e + e;
	priceList.appendChild(items);
	items.innerHTML = e;
	total.innerHTML = 'Total: ' + totalPrice;

	});
}
createList();


