import customBaseQuery from '@larabiz/features/BaseQuery';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const onQueryStartedErrorToast = async (args: any, { queryFulfilled }: { queryFulfilled: Promise<any> }) => {
    try {
        await queryFulfilled;
    } catch (e: any) {
        // handle error here, dispatch toast message
        if (e.error.status === 401) {
            // redirect to login
            localStorage.removeItem('lb_auth_token');
        }
    }
};

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: customBaseQuery(),
    endpoints: (builder) => ({
        getUserProfile: builder.query({
            query: () => ({
                url: '/profile',
                method: 'GET',
            }),
            onQueryStarted: onQueryStartedErrorToast,
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
