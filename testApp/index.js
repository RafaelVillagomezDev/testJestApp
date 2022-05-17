class Room {
  constructor({ name, bookings, rate, discounts }) {
    this.name = name
    this.bookings = bookings
    this.rate = rate
    this.discounts = discounts
  }
}

class Booking {
  constructor({ name, email, checkIn, checkOut, discount, room }) {
    this.name = name
    this.email = email
    this.checkIn = checkIn
    this.checkOut = checkOut
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
//Una semana despues de la fecha actual//
const weekMore = new Date('24 May 2022 14:48 UTC')

const copiaBooking = {
  name: 'Rafa',
  email: 'yandry75@gmail.com',
  checkIn: new Date().toISOString(),
  checkOut: weekMore.toISOString(),
  discount: 22,
  room: 122,
}

function isOccupied(room, currentDate) {
  const date_entry = room.bookings.checkIn
  const date_exit = room.bookings.checkOut

  if (currentDate >= date_entry && currentDate <= date_exit) {
    return room.bookings
  } else {
    return null
  }
}

//   isOccupied(room,new Date('28 May 2022 14:48 UTC').toISOString())

module.exports = { Room, Booking, copiaBooking, copiaRoom, isOccupied }
