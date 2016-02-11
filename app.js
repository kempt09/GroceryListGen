//function createList() {
//
//	'use strict';
//
//	var foodArray = [],
//		priceArray = [],
//		item,
//		list = {
//
//	items : [
//
//			{
//				name : 'Beef',
//				price : 2.99
//
//			},
//			{
//				name : 'Milk',
//				price : 2.99
//
//			},
//			{
//				name : 'Doritos',
//				price : 1.75
//
//			},
//			{
//				name : 'Cereal',
//				price : 3.30
//
//			},
//			{
//				name : 'Celery',
//				price : 0.99
//
//			},
//			{
//				name : 'Peanut Butter',
//				price : 5.49
//
//			},
//			{
//				name : 'Dog Food',
//				price : 30.67
//			}
//		]
//	};
//
//	for (item in list.items) {
//		foodArray.push(list.items[item].name);
//		priceArray.push(list.items[item].price);
//	}
//
//	foodArray.forEach(function(e){
//
//		var foodList = document.getElementById('food'),
//			items = document.createElement('li');
//			foodList.appendChild(items);
//			items.innerHTML = e;
//
//	});
//
//	priceArray.forEach(function(e){
//
//		var priceList = document.getElementById('price'),
//			items = document.createElement('li'),
//			total = document.getElementById('total'),
//			totalPrice = e + e;
//			priceList.appendChild(items);
//			items.innerHTML = e;
//			total.innerHTML = 'Total: ' + totalPrice;
//
//	});
//}
//createList();


(function(){

	'use strict';
	var totalPrice = 0;
	var addBtn = document.getElementById('addItems');

	addBtn.addEventListener('click', function(e){
		e.preventDefault();
		addItem();
	});

	function addItem(a, b) {

		a = document.getElementById('foodInput').value;
		b = document.getElementById('priceInput').value;
		b = parseFloat(b);

		var pieceOfFood = a,
			cost = b,
			foodArray = [],
			priceArray = [];

		function pushToStack(pieceOfFood, cost) {
			foodArray.push(pieceOfFood);
			priceArray.push(cost);


			function displayStuff() {

				foodArray.forEach(function (e) {
					var foodList = document.getElementById('food'),
						items = document.createElement('li');
					foodList.appendChild(items);
					items.innerHTML = e;

				});

				priceArray.forEach(function (e) {

					var priceList = document.getElementById('price'),
						items = document.createElement('li'),
						total = document.getElementById('total');

					totalPrice += e;
					priceList.appendChild(items);
					items.innerHTML = e;
					total.innerHTML = totalPrice;

				});
			}

			displayStuff();
		}

		pushToStack(pieceOfFood, cost);

	}

}());

