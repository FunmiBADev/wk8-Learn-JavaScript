'use strict';

$(document).ready(function(){
	var thermostat = new Thermostat();
	updateTemperature;

	displayWeather('London');
	$('#select-city').submit(function(event){
		event.preventDefault();
		var city = $('#current-city').val();
		displayWeather(city);
	});


	$('#temperature-up').on('click', function(){
		thermostat.up();
		updateTemperature;
	});
	$('#temperature-down').click(function(){
		thermostat.down();
		updateTemperature;
	});
	$('#temperature-reset').click(function(){
		thermostat.resetTemperature();
		updateTemperature;
	});
	$('#powersaving-on').click(function(){
		thermostat.switchPowerSavingModeOn();
		$('#power-saving').text('PSM on');
		updateTemperature;
	});
	$('#powersaving-off').click(function(){
		thermostat.switchPowerSavingModeOff();
		$('#power-saving').text('PSM off')
		updateTemperature;
	});


	function updateTemperature(){
		$('#temperature').text(thermostat.temperature);
		$('#temperature').attr('class', thermostat.energyUsage());
	};

	function displayWeather(city) {
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
		var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
		var units = '&units=metric';
		$.get(url + token + unit, function(){
			$('#current-temperature').text(data.main.temp);
		});
	};
});