class Room {
  constructor({ name, bookings, rate, discounts }) {
    this.name = name
    this.bookings = bookings
    this.rate = rate
    this.discounts = discounts
  }

  isOccupied(currentDate) {
    const date_entry = this.bookings[0].checkIn
    const date_exit = this.bookings[0].checkOut

    if (currentDate >= date_entry && currentDate <= date_exit) {
      return false
    } else {
      return this.bookings[0]
    }
  }

  availableRooms(startDate, endDate) {
    //TENEMOS AS FECHAS DEL INTERVALO QUE E SIGUAL AL TOTAL , A ESTE NUMERO ES NUESTRO DENOMINADOR .El NUMERADOR SERIA LA RESTA ENTRE EL STARTDATE
    //QUE BUSCAMOS Y LA FECHA DE FIN DE LA RESERVA
    if (
      this.bookings[0].checkOut > startDate &&
      this.bookings[0].checkOut <= endDate
    ) {
      const diasFechaIntervaloTotal =
        new Date(endDate).getDate() - new Date(startDate).getDate()
      const diasOcupacionIntervalo =
        new Date(endDate).getDate() -
        new Date(this.bookings[0].checkOut).getDate()
      const percertageInterval =
        parseFloat(diasOcupacionIntervalo / diasFechaIntervaloTotal) * 100
      return percertageInterval
    } else {
      return false
    }
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

const booking = new Booking({ ...copiaBooking })
const room = new Room({ ...copiaRoom, bookings: booking })

//HACEMOS EL FOR POR QUE NOS RRECORREMOS UN ARRAY DE HABITACIONES DEPENDIENDO DE CUANTAS METO
function totalOccupancyPercentage(room, startDate, endDate) {
  room.bookings = [booking]
  const totalBookings = Object.keys(booking)
  for (let i = 0; i < totalBookings.length; i++) {
    if (booking.checkOut > startDate && booking.checkOut <= endDate) {
      const avalaibleRoom = Object.keys(booking)
      const percentage = (avalaibleRoom.length / totalBookings.length) * 100
      return percentage
    } else {
      return false
    }
  }
}

function availableRooms(rooms, startDate, endDate) {
  rooms.bookings = [booking]
  const totalBookings = Object.keys(booking)
  for (let i = 0; i < totalBookings.length; i++) {
    if (
      rooms[i].booking.checkOut > startDate &&
      rooms[i].booking.checkOut <= endDate
    ) {
      return rooms
    } else {
      return false
    }
  }
}

module.exports = {
  Room,
  Booking,
  copiaBooking,
  copiaRoom,
  totalOccupancyPercentage,
  availableRooms,
}
