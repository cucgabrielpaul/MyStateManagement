const actions = {
    increment(state, payload) {
        state += payload;

        return state;
    },

    decrement(state, payload) {
        state -= payload;

        return state;
    },
};

export default actions;