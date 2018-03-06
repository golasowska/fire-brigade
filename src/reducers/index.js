import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import FetchFireReducer from './fetchFire';



const rootReducer = combineReducers({
    form: FormReducer,
    fetchFire: FetchFireReducer,
});

export default rootReducer;
