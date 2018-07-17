// Code your solution in this file!
const returnFirstTwoDrivers = (function (array){
  newArr = []
  newArr.push(array[0])
  newArr.push(array[1])
  return newArr
});

const returnLastTwoDrivers = (function (array){
  newArr = []
  newArr.push(array[array.length -2])
  newArr.push(array[array.length -1])
  return newArr
});

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  return function (fare) {
    return fare * num
  };
};

const fareDoubler = function (fare) {
  return createFareMultiplier(fare)(2)
};

const fareTripler = function (fare) {
  return createFareMultiplier(fare)(3)
};

function selectDifferentDrivers(array, func) {
  return func(array);
};
