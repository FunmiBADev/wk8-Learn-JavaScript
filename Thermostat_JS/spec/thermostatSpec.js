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
	// set minimun temperature to 10
	it('has a minimun temperature of 10 degrees', function(){
		for(var i = 0; i <11; i++) {
			thermostat.down();
		};
		expect(thermostat.getCurrentTemperature()).toEqual(10);
	})

	it ('has power saving mode on by default', function(){
		expect(thermostat.isPowerSavingModeOn()).toBe(true);
	});
	it ('can switch PSM off', function(){
		thermostat.switchPowerSavingModeOff();
		expect(thermostat.isPowerSavingModeOn()).toBe(false);
	});
});