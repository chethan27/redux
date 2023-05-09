import { combineReducers } from 'redux';

const reduceA = (state = { number: 0 }, action) => {

    const { type, data } = action;

    if (type === 'INCREMENT') {
        return { 
            ...state,
            number: data }
    }
    return state;
};

export default combineReducers({ number : reduceA });

