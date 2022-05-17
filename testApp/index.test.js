const {
  Room,
  copiaRoom,
  copiaBooking,
  Booking,
  isOccupied,
} = require('./index')

describe('Test Rooms and Bookings', () => {
  const room = new Room({ ...copiaRoom, name: 'pepe' })
  test('validando name devuelve name ', () => {
    expect(room.name).toBe('pepe')
  }),
    test('habitacion ocupada devuelve guest (room.bookings)', () => {
      const booking = new Booking({ ...copiaBooking })
      const room = new Room({ ...copiaRoom, bookings: booking })

      expect(
        isOccupied(room, new Date('20 May 2022 14:48 UTC').toISOString()),
      ).toBe(room.bookings)
    })
})
