import * as types from '../constants/CounterTypes'

function increase() {
    return { type: types.INCREMENT }
}

function deincrease() {
    return { type: types.DECREMENT }
}

function reset() {
    return { type: types.RESET }
}

export {
    increase,
    deincrease,
    reset
}



