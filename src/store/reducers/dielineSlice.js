import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


// STATE
const initialState = {
    orderId: {},
    sizeOptions: {},
    modelSelect: '',
    dieLineImage: {},
}

// REDUCERS
export const dielineSlice = createSlice({
    name: 'dieine',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(setOrderId.fulfilled, (state, action) => {
                state.orderId = action.payload;
            })
            .addCase(setSizeOptions.fulfilled, (state, action) => {
                state.sizeOptions = action.payload;
            })
            .addCase(setSelectModel.fulfilled, (state, action) => {
                state.modelSelect = action.payload;
            })
            .addCase(setDieLineImage.fulfilled, (state, action) => {
                state.dieLineImage = action.payload;
            })
    },
});

// ACTIONS
export const setOrderId = createAsyncThunk(
    'dieline/setOrderId',
    async (id) => {
        try {
            return id;
        } catch (error) {
            console.log('Error', error);
            return error;
        }
    }
);
export const setSizeOptions = createAsyncThunk(
    'dieline/setSizeOptions',
    async (options) => {
        try {
            return options;
        } catch (error) {
            console.log('Error', error);
            return error;
        }
    }
);

export const setSelectModel = createAsyncThunk(
    'dieline/setSelectModel',
    async (model) => {
        try {
            return model;
        } catch (error) {
            console.log('Error', error);
            return error;
        }
    }
);

export const setDieLineImage = createAsyncThunk(
    'dieline/setDieLineImage',
    async (file) => {
        try {
            return file;
        } catch (error) {
            console.log('Error', error);
            return error;
        }
    }
);

export const dielineSelector = (state) => state.dieline;
export default dielineSlice.reducer;
