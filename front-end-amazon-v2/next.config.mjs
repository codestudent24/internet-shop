/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: process.env.SERVER_URL,
    APP_URL: process.env.APP_URL,
  },
  images: { domains: [
    'avatars.mds.yandex.net',
    'picsum.photos',
    'loremflickr.com',
    'www.aptronixindia.com',
    'avatars.githubusercontent.com'
  ]}
};

export default nextConfig;
