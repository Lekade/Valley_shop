import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    profileData: {},
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