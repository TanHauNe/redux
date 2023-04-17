import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        setUser: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const getAllUsers = (id) => (dispatch) => {
    return axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            dispatch(setUser(response.data));
            return response.data;
        })
        .catch((error) => console.log(error));
};

export const getDetailUsers = (id) => (dispatch) => {
    axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            dispatch(setUser(response.data));
        })
        .catch((error) => console.log(error));
};

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
