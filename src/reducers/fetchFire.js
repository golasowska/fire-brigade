import { FETCH_FIRE } from '../actions';

export default function display(state = {}, action) {
    switch (action.type) {
        case FETCH_FIRE:
            console.log('action.payload', action.payload)
            return [action.payload];
        default:
            return state;
    }
}
