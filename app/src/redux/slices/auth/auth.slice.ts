import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface AuthState {
    name: string | undefined;
    email: string | undefined;
    access_token: string | undefined;
}

const initialState: AuthState = {
    name: undefined, 
    email: undefined,
    access_token: undefined,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticatedPerson: (state: AuthState, { payload }: PayloadAction<AuthState>) => {
            return {
                name: payload.name,
                email: payload.email,
                access_token: payload.name,
            }
        },
        resetState: (state: AuthState) => {
            return {
                name: undefined,
                email: undefined,
                access_token: undefined,
            }
        },
    },
})

export const {
    setAuthenticatedPerson,
    resetState,
} = authSlice.actions

export const authReducer = authSlice.reducer;