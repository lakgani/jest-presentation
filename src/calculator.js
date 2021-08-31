const InvalidParametersError = new Error("Invalid parameter(s) provided");
function add(x,y) {
    if(!Number.isFinite(x) || !Number.isFinite(y)) {
        throw InvalidParametersError;
    }
    return x + y;
}

function subtract(x,y) {
    if(!Number.isFinite(x) || !Number.isFinite(y)) {
        throw InvalidParametersError;
    }
    return x - y;
}

module.exports = {
    add,
    subtract,
    InvalidParametersError
}