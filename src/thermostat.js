'use strict';

function Thermostat() {
  // if you would like to target without using this just make it a variable
  // var temp = this.temperature
  this.temperature = 20;
  this.up = function() {
     return this.temperature++;
  };
  this.getCurrentTemperature = function() {
   return this.temperature;
  };
};
