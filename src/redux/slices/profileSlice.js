import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    profileData: {
        address: "62",
        country: "Belarus",
        email: "mail@gmail.com",
        name: "Denis",
        phone: "+99 999 99 99",
        postcode: "999999",
        surname: "Kasperovich",
    },
    singIn: {},
    register: {}
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData(state, action){
            state.profileData = action.payload;
        },
        setSingIn(state, action){
            state.singIn = action.payload;
        },
        setRegister(state, action){
            state.register = action.payload;
        },
    },
})

export const {setProfileData, setSingIn, setRegister} = profileSlice.actions


export default profileSlice.reducer