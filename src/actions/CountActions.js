import * as types from '../constants/CounterTypes'

// function increase() {
//     return dispatch => {
//         dispatch({ type: types.INCREMENT })
//     }
// }

// function deincrease() {
//     return dispatch => {
//         dispatch({ type: types.DECREMENT })
//     }
// }

// function reset() {
//     return dispatch => {
//         dispatch({ type: types.RESET })
//     }
// }

// const increase = () => ({ type: types.INCREMENT })
// const deincrease = () => ({ type: types.DECREMENT })
// const reset = () => ({ type: types.RESET })

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



