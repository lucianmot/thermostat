'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
});

  it('starts at 20 degrees', function() {
     expect(thermostat.getCurrentTemperature()).toEqual(20);
  });


  it('increase temp by 1 degrees', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decrease temp by 1 degree', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  })

  it('has minimum of 10 degrees', function() {
    for (var i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });
});
