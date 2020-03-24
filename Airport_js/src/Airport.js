'use strict';

class Airport {
	constructor() {
		this._hangar = []
	};
	planes() {
		return this._hangar;
	};
	clearForLanding(plane) {
		this._hangar.push(plane);
	};
	clearForTakeoff(plane) {
		if(this.isStormy()) {
			throw new Error('cannot takeoff during storm');
		}
		this._hangar = [];
	};
	isStormy() {
    return false;
  };
};