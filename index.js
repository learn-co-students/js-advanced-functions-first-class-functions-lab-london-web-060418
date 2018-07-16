const returnFirstTwoDrivers = function (collection) {
  const newArray = collection.slice(0, 2);
  return newArray;
}

const returnLastTwoDrivers = function (collection) {
  const newArray = collection.slice(-2);
  return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(collection, fn) {
  return fn(collection);
}
