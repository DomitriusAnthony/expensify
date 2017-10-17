import { createStore } from 'redux';

// Action generators return Action object

// createStore REQUIRES atleast 1 function argument. within that function you can set your state.
const incrementCount =  ( { incrementBy = 1 } = {} ) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ( { decrementBy = 1 } = {} ) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = ( { reset = 0 } = {} ) => ({
    type: 'RESET',
    reset
});

const setCount = ( { set = 133} = {}) => ({
    type: 'SET',
    set
});


// This function is called a Reducer.
// 1. Reducers are pure functions. The output is determined by the input.
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };

        case 'SET':
            return {
                count: action.set
            }

        case 'RESET':
            return {
                count: action.reset
            };

        default:
            return state;
    }
};

const store = createStore(countReducer);

// registers the console.log for the store, for every change that happens
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})







// Action - an object that gets sent to the store

// increment, decrement, reset

// I'd like to increment the amount

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount( { decrementBy: 10 }));

store.dispatch(setCount());