const {
  Room,
  copiaRoom,
  copiaBooking,
  Booking,
  totalOccupancyPercentage,
} = require('./index')

describe('Test Rooms and Bookings', () => {
  const room = new Room({ ...copiaRoom, name: 'pepe' })
  test('validando name devuelve guest name ', () => {
    expect(room.name).toBe('pepe')
  }),
    test('habitacion si esta ocupada devuelve guest (room.bookings), si no false', () => {
      const booking = new Booking({ ...copiaBooking })
      const room = new Room({ ...copiaRoom, bookings: booking })
      room.bookings = [booking]
      expect(
        room.isOccupied(new Date('22 May 2022 14:48 UTC').toISOString()),
      ).toBe(false)
    }),
    test('retorna todas las habitaciones que no estan ocupadas en una duracion , el valor a esperar es el porcentaje que creemos q nos dara', () => {
      const booking = new Booking({ ...copiaBooking })
      const room = new Room({ ...copiaRoom, bookings: booking })
      room.bookings = [booking]
      expect(
        room.availableRooms(
          new Date('20 May 2022 14:48 UTC').toISOString(),
          new Date('25 May 2022 14:48 UTC').toISOString(),
        ),
      ).toEqual(20)
    }),
    test('retorna todas las habitacion que hay en un intervalo de fechas. Retorna porcentaje y espera porcentaje', () => {
      const booking = new Booking({ ...copiaBooking })
      const room = new Room({ ...copiaRoom, bookings: booking })
      expect(
        totalOccupancyPercentage(
          room,
          new Date('20 May 2022 14:48 UTC').toISOString(),
          new Date('25 May 2022 14:48 UTC').toISOString(),
        ),
      ).toBe(100)
    })
})
