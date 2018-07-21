import *as types from '../constants/ThemeTypes';

function redAction() {
    return { type: types.RED }
}

function blueAction() {
    return { type: types.BLUE }
}

export {
    redAction,
    blueAction
}