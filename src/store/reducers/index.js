import { combineReducers } from '@reduxjs/toolkit';
import dielneReducer from '@/store/reducers/dielineSlice';

const rootReducer = combineReducers({
    dieline: dielneReducer,
});

export default rootReducer;
