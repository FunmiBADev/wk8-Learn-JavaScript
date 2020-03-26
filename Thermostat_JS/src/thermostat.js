'use strict';

class Thermostat {
	constructor() {
		this.MIN_TEMP = 10;
		this.DEFAULT_TEMP = 20;
		this.temperature = this.DEFAULT_TEMP;
		this.powerSavingMode = true;
		this.MAX_LIMIT_PSM_ON = 25;
		this.MAX_LIMIT_PSM_OFF = 32;
		this.MID_ENERGY_USAGE_LIMIT = 18;
	};

	getCurrentTemperature() {
		return this.temperature;
	};
	up() {
		if (this.isMaxTemp()){
			return;
		};
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
	switchPowerSavingModeOn() {
		this.powerSavingMode = true;
	}
	isMaxTemp() {
		if (this.isPowerSavingModeOn() === false) {
			return this.temperature === this.MAX_LIMIT_PSM_OFF;
		};
		return this.temperature === this.MAX_LIMIT_PSM_ON;
	};
	resetTemperature() {
		 this.temperature = this.DEFAULT_TEMP
	}
	energyUsage() {
		if (this.temperature < this.MID_ENERGY_USAGE_LIMIT) {
			return 'low-usage';
		};
		if (this.temperature >= this.MID_ENERGY_USAGE_LIMIT && this. temperature <=this.MAX_LIMIT_PSM_ON) {
			return 'mid-usage';
		};
		return 'high-usage';
	};

};