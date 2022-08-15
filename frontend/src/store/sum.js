import { csrfFetch } from './csrf';

const ADD_SUM = 'sum/ADD_SUM';

const addSum = (sum) => ({
    type: ADD_SUM,
    payload: sum
});

export const fetchSum = (valueOne, valueTwo) => async (dispatch) => {
    const data = await csrfFetch('/api/sum', {
        method: 'POST',
        body: JSON.stringify({valueOne, valueTwo})
    });

    if(data.ok) {
        const response = await data.json();
        dispatch(addSum(response));
    }
    else {
        return await data.json();
    }
}

export default function sumReducer(state = {'sum': null}, action) {
    switch(action.type) {
        case ADD_SUM: {
            const newState = { ...state };

            newState['sum'] = action.payload.answer;

            return newState;
        }
        default: {
            const newState = { ...state };

            return newState;
        }
    }
};