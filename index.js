// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = (drivers) => {
    console.log(drivers.slice(-2))
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => {
  return (x) => { return int * x }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arrayOfDrivers, func) => {
  return func(arrayOfDrivers)
}
