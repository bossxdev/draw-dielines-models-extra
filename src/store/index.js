import {configureStore, MiddlewareArray} from '@reduxjs/toolkit';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import {useDispatch, useSelector} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

const masterReducer = (state, action) => {
    if (action.type === HYDRATE) {
        return {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
    }
    return rootReducer(state, action);
};

const makeStore = () => {
    return configureStore({
        reducer: masterReducer,
        middleware: new MiddlewareArray().concat(thunkMiddleware),
    });
};

// type Store = ReturnType<typeof makeStore>;
// export type AppDispatch = Store['dispatch'];
// export type RootState = ReturnType<Store['getState']>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     RootState,
//     unknown,
// Action<string>
// >;
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export const wrapper = createWrapper(makeStore, { debug: false });
