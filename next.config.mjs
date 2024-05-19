/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    env : {
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY : 'pk_test_cHJlY2lvdXMtc3F1aWQtNzUuY2xlcmsuYWNjb3VudHMuZGV2JA',
        CLERK_SECRET_KEY:'sk_test_3lT4nfwHnw7W9fvotbbonKF4rkD26zRQDV7uRYj1tH',

        NEXT_PUBLIC_CLERK_SIGN_IN_URL : '/sign-in',
        NEXT_PUBLIC_CLERK_SIGN_UP_URL : '/sign-up'

    },
};

export default nextConfig;
