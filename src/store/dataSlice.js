import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    all: [],
    favorite: []
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setAllData: (state, action) => {
            state.all = action.payload
        },
        setFavorite: (state, action) => {
            state.favorite = action.payload
        },
    }
})

export const { setAllData, setFavorite } = dataSlice.actions
export default dataSlice.reducer