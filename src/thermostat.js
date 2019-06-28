'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.temperature = 20;
  this.powerSavingMode = true;

  this.isMinimumTemperature = function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  };

  this.isMaximumTemperature = function() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
      return this.temperature === this.MAX_LIMIT_PSM_ON;
  }

  this.up = function() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature += 1;
  };

  this.down = function() {
    if (this.isMinimumTemperature()) {
      return;
    }
     return this.temperature -= 1;
  };

  this.isPowerSavingModeOn = function() {
    return this.powerSavingMode === true;
  };

  this.switchPowerSavingModeOff = function() {
    this.powerSavingMode = false;
  }

  this.switchPowerSavingModeOn = function() {
    this.powerSavingMode = true;
  }

  this.getCurrentTemperature = function() {
   return this.temperature;
  };

  this.resetTemperature = function() {
    this.temperature = 20;
  }

};
