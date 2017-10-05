import { createStore } from 'redux';

// createStore REQUIRES atleast 1 function argument. within that function you can set your state.
const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return{
                count: state.count + incrementBy
            };

        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };

        case 'SET':
            return {
                count: action.count
            }

        case 'RESET':
            return {
                count: 0
            };

        default:
            return state;
    }
});

// registers the console.log for the store, for every change that happens
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});





// Action - an object that gets sent to the store

// increment, decrement, reset

// I'd like to increment the amount
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'SET',
    count: 101
})