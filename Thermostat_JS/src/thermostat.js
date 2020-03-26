'use strict';

class Thermostat {
	constructor() {
		this.MIN_TEMP = 10;
		this.temperature = 20;
		this.powerSavingMode = true;
		this.MAX_LIMIT_PSM_ON = 25;
		this.MAX_LIMIT_PSM_OFF = 32;
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
};