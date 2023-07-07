/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.quriverse.com'],
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://api.example.com/:path*',
            },
        ]
    },
}

module.exports = nextConfig
