const ConferenceRoom = require("../src/ConferenceRoom");

describe('ConferenceRoom', () => {
    let room;
    beforeEach(() => {
        room = new ConferenceRoom("Aster");
    })
    describe('addAttendees', () => {
        test('should add the provided attendees to the room', () => {
            room.addAttendees(3);
            room.addAttendees(5);
            room.addAttendees(1);
            expect(room.getAttendeesCount()).toBe(9);
        })

        test('should throw error when input is not a valid number', () => {
            expect(() => {
                room.addAttendees("3");
            }).toThrowError(ConferenceRoom.InvalidCount);
        })
        
    })

    describe('removeAttendees', () => {
        test('should remove the provided attendees from the room', () => {
            room.addAttendees(10);
            room.removeAttendees(5);
            expect(room.getAttendeesCount()).toBe(5);
        })

        test('should throw error when input is not a valid number', () => {
            expect(() => {
                room.removeAttendees("3");
            }).toThrowError(ConferenceRoom.InvalidCount);
        })

        test('should throw error when tried to remove more than existing attendees', () => {
            expect(() => {
                room.removeAttendees(3);
            }).toThrowError();
        })
        
    })
    
})
