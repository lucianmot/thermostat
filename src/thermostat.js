'use strict';

function Thermostat() {
  // if you would like to target without using this just make it a variable
  // var temp = this.temperature
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.up = function() {
     return this.temperature += 1;
  };
  this.down = function() {
     return this.temperature -= 1;
  };
  this.getCurrentTemperature = function() {
   return this.temperature;
  };
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMinimumTemperature = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
}
