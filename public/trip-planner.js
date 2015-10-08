


//hotel-itinerary-item

// $('#hotel-add').on('click', function(){
// 	var hotelPick = $('#selected-hotel').val();
// 	console.log("HotelPick is: ", hotelPick);
// 	// console.log($('.hotel .itinerary-item .title'));
// 	$('.hotel .itinerary-item .title').text(hotelPick);
// });

$('.hotel .btn').on('click', function(){
	$('.hotel .title').text("");
});


var Day = function(){
	this.hotel = ''
	this.restaurants = [];
	this.activities = [];
}

Day.prototype.setHotel = function(hotel){
	this.hotel = hotel
}

Day.prototype.setRestaurant = function(restaurant){
	this.restaurants.push(restaurant);
}

Day.prototype.setActivity = function(activity){
	this.activities.push(activity);
}


// var day1 = {
// 	hotel: hotelPick,
// 	restaurants: [rest1, rest2, rest3],
// 	activities: [activities]
// }

var days = [new Day()];
var currentDay = 0;

console.log('days empty:', days);


var setCurrentDay = function(){
	$('.days-buttons').empty();
	days.forEach(function(day, i){
		if (i + 1 === currentDay){
			$('.days-buttons').append('<button class="btn btn-circle day-btn current-day">' + (i+1) + '</button>');
		} else {
			$('.days-buttons').append('<button class="btn btn-circle day-btn">' + (i+1) + '</button>');
		}
	})

	$('.days-buttons .day-btn').on('click', displayCurrentDay);
}




// ADD DAY
$('.day-buttons .add-day').on('click', function(){
	days.push(new Day());
	currentDay = days.length;
	setCurrentDay();
	console.log('days:', days);
})



var displayCurrentDay = function(){
	console.log("this:", this, 'jthis:', $(this));
	$('.days-buttons .current-day').removeClass('current-day');
	currentDay = $(this)[0].innerHTML
	$(this).addClass('current-day');
	$('.hotel .title').text(days[currentDay-1].hotel);
	$('.restaurant1 .title').text(days[currentDay-1].restaurants[0] || '');
	$('.restaurant2 .title').text(days[currentDay-1].restaurants[1] || '');
	$('.restaurant3 .title').text(days[currentDay-1].restaurants[2] || '');
	console.log("jquery restaurant #1", $('.restaurant1 .title'))
	console.log("its restaurant #1", days[currentDay-1].restaurants[0])
}


// ADD HOTEL
$('#hotel-add').on('click', function(){
	var hotelPick = $('#selected-hotel').val();
	// console.log("HotelPick is: ", hotelPick);
	// console.log($('.hotel-itinerary-item .title'));
	days[currentDay-1].hotel = hotelPick;
	$('.hotel .title').text(days[currentDay-1].hotel);
});


// ADD RESTAURANTS
$('#restaurant-add').on('click', function(){
	var restaurantPick = $('#selected-restaurant').val();
	console.log("RestaurantPick is: ", restaurantPick);
	days[currentDay-1].restaurants.push(restaurantPick);

	// console.log($('.restaurant1 .title').text());
	var restaurant1 = $('.restaurant1 .title').text();
	var restaurant2 = $('.restaurant2 .title').text();
	var restaurant3 = $('.restaurant3 .title').text();
	
	// console.log($('.hotel-itinerary-item .title'));
	if(!restaurant1){
		$('.restaurant1 .title').text(days[currentDay-1].restaurants[0]);
	} else if (!restaurant2) {
		$('.restaurant2 .title').text(days[currentDay-1].restaurants[1]);
	} else if (!restaurant3) {
		$('.restaurant3 .title').text(days[currentDay-1].restaurants[2]);
	}

	//add a new span to .restaurant .itinerary-item
});




$('.restaurant1 .btn').on('click', function(){
	$('.restaurant1 .title').text("");
});

$('.restaurant2 .btn').on('click', function(){
	$('.restaurant2 .title').text("");
});

$('.restaurant3 .btn').on('click', function(){
	$('.restaurant3 .title').text("");
});




