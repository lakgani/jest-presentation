
class InvalidParametersError extends Error {
    constructor() {
        super();
    }
}
class Calculator {
    
    constructor(){
        // console.log("Creating new calculator");
    }

    static InvalidParametersError = new Error("Invalid parameter(s) provided");

    add(x,y) {
        if(!Number.isFinite(x) || !Number.isFinite(y)) {
            throw new InvalidParametersError();
        }
        return x + y;
    }
    
    subtract(x,y) {
        if(!Number.isFinite(x) || !Number.isFinite(y)) {
            throw new InvalidParametersError();
        }
        return x - y;
    }
}

module.exports = Calculator

module.exports.InvalidParametersError = InvalidParametersError