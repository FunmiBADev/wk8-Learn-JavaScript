'use strict';

describe('Thermostat', function(){
	var thermostat;

	beforeEach(function() {
		thermostat = new Thermostat();	
	});
	// set default temprature to 20 degrees
	it('starts at 20 degrees', function(){
		expect(thermostat.getCurrentTemperature()).toEqual(20);
	});

	// ability to increase temperature
	it('increases in temperature with up()', function(){
		thermostat.up();
		expect(thermostat.getCurrentTemperature()).toEqual(21);
	})
	// ability to decrease temperature
	it('decreases in temperature with down()', function(){
		thermostat.down();
		expect(thermostat.getCurrentTemperature()).toEqual(19);
	});
});