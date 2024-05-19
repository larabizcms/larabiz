import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.MIX_APP_URL + '/api',
        prepareHeaders: (headers, { getState }: any) => {
            const token = getState().auth.userToken?.access_token;

            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
                return headers
            }
        },
    }),
    endpoints: (builder) => ({
        getUserProfile: builder.query({
            query: () => ({
                url: '/profile',
                method: 'GET',
            }),
        }),
        // getGeneralData: builder.query({
        //     query: () => ({
        //         url: '/admin/general',
        //         method: 'GET',
        //     }),
        // }),
    }),
});

// export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserProfileQuery } = authApi
