'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
});

  it('starts at 20 degrees', function() {
     expect(thermostat.getCurrentTemperature()).toEqual(20);
  });


  it('increase temp by 5 degrees', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });
});
