import { AuthState } from "./auth.slice";
import type { RootState } from "../../store";

export const getAuthState = (state: RootState): AuthState => state.authReducer;
export const getAuthName = (state: RootState): string | undefined => getAuthState(state).name;
export const getIsLoggedIn = (state: RootState): boolean => !!getAuthState(state).access_token;