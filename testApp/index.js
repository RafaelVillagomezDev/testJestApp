class Room {
  constructor({ name, bookings, rate, discounts }) {
    this.name = name
    this.bookings = bookings
    this.rate = rate
    this.discounts = discounts
  }
}

class Booking {
  constructor({ name, email, checkIn, checkout, discount, room }) {
    this.name = name
    this.email = email
    this.checkIn = checkIn
    this.checkout = checkout
    this.discount = discount
    this.room = room
  }
}

const copiaRoom = {
  name: 'Rafa',
  bookings: [],
  rate: 122,
  discounts: 12,
}

const copiaBooking = {
  name: 'Rafa',
  email: 'yandry75@gmail.com',
  checkIn: new Date.toString().UTC,
  checkout: new Date.toString().UTC,
  discount: 22,
  room: 122,
}
