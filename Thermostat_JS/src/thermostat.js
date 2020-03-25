'use strict';

class Thermostat {
	constructor() {
		this.MIN_TEMP = 10;
		this.temperature = 20;
		this.powerSavingMode = true;
	};
	getCurrentTemperature() {
		return this.temperature;
	};
	up() {
		this.temperature += 1
	};
	down() {
		if (this.isMinTemp()) {
			return;
		};
		this.temperature -= 1
	}
	isMinTemp() {
		return this.temperature === this.MIN_TEMP;
	};
	isPowerSavingModeOn() {
		return this.powerSavingMode === true;
	};
	switchPowerSavingModeOff() {
		this.powerSavingMode = false;
	};
};