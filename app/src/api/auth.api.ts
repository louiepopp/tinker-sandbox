import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILoginRequest, ISignUpRequest } from '../interfaces/auth.interface';
import { Settings } from '../consts/settings';

export const authAPI = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: `${Settings.endpoint}/auth`,
  }),
  endpoints: (builder) => ({
    signin: builder.mutation<any, ILoginRequest>({
      query: ({ email, password }) => ({
        url: 'signin',
        method: 'POST',
        body: { email, password }
      })
    }),
    signup: builder.mutation<any, ISignUpRequest>({
      query: ({ name, email, password }) => ({
        url: 'signup',
        method: 'POST',
        body: { name, email, password }
      })
    })
  })
});

export const {
  useSigninMutation,
  useSignupMutation,
} = authAPI;
