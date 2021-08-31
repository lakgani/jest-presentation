class InvalidCount extends Error {
    constructor(count) {
        super(`Invalid count ${count}`);
    }
}

class ConferenceRoom {
    constructor(roomName) {
        this.roomName = roomName;
        this.attendeeCount = 0;
    }

    validateCount(count) {
        if (!Number.isFinite(count)) {
            throw new InvalidCount(count);
        }
    }

    addAttendees(count) {
        this.validateCount(count)
        this.attendeeCount+= count;
    }
    
    removeAttendees(count) {
        this.validateCount(count);

        if(count > this.attendeeCount) {
            throw new InvalidCount(count);
        }
        this.attendeeCount-= count;
    }

    getAttendeesCount() {
        return this.attendeeCount;
    }
}

module.exports = ConferenceRoom;
module.exports.InvalidCount = InvalidCount;