const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

//returns first 2 drivers from the drivers array:
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

//returns last 2 drivers from the drivers array:
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
  return function(fare){
    return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};
