'use strict';

/* *****************************
/* Lecture: Default Parameters */
/***************************** */
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  bookings.push(booking);
  console.log(booking);
};

createBooking('LH123');
createBooking('LH235', 2);
createBooking('BE206', undefined, 199);
*/
/* *************************************************
/* Lecture: PASSING ARGUMENTS: VALUE VS. REFERENCE */
/***************************** *********************/

const flight = 'LH234';
const jakub = {
  name: 'Jakub Nasta',
  passport: 62377856,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 62377856) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jakub);
// console.log(flight);
console.log(jakub);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jakub;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jakub);
checkIn(flight, jakub);
