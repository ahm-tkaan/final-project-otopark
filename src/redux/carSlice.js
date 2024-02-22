import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {message} from "antd";

const initialState = {
    loading: false,
    plaka: [],
    inCarObj: {},
    outCarObj: {},
    cars: []
}


export const addNewCar = createAsyncThunk("addNewCar", async (formData) => {
    try {
        const res = await fetch(`http://localhost:3000/car`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(formData)
        });

        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}); 


export const getAllCars = createAsyncThunk("getAllCars", async () => {
    try {
        const res = await fetch(`http://localhost:3000/car`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}); 


export const removeCarItem = createAsyncThunk("removeCarItem", async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/car/${id}`, {
            method: "DELETE"
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}); 


const carSlice = createSlice({
    name: "car", 
    initialState,
    reducers: {
        inCarAction: (state, actions) => {
            state.inCarObj = actions.payload;
        },
        addCar: (state, actions) => {
            state.plaka.push(actions.payload);
        },
        removeCar: (state, actions) => {
            const plakaToCheck = actions.payload.plaka;
            const indexToCheck = state.plaka.findIndex((item) => (
                item.plaka === plakaToCheck
            ));
            if (indexToCheck === -1) {
                message.error(`${plakaToCheck} plakalı araç otoparkta kayıtlı değil`);
                return;
            }

            state.outCarObj = actions.payload;
            state.plaka.splice(indexToCheck, 1);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addNewCar.pending, (state, actions) => {
            state.loading = true;
        });
        builder.addCase(addNewCar.fulfilled, (state, actions) => {
            state.loading = false;
            // state.cars = actions.payload;
            message.success("Ekleme işlemi başarılı");
        });
        builder.addCase(getAllCars.pending, (state, actions) => {
            state.loading = true;
        });
        builder.addCase(getAllCars.fulfilled, (state, actions) => {
            state.loading = false;
            state.cars = actions.payload;
        });
        builder.addCase(removeCarItem.pending, (state, actions) => {
            state.loading = true;
        });
        builder.addCase(removeCarItem.fulfilled, (state, actions) => {
            state.loading = false;
            state.cars.splice(actions.payload, 1);
            message.success("Silme işlemi başarılı");
        });
    }
});



export const {outCarAction, inCarAction, addCar,removeCar} = carSlice.actions;

export const carReducer = carSlice.reducer;