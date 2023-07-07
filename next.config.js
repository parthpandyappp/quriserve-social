/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.quriverse.com'],
    },
    async headers() {
        return [
            {
                source: "https://api.quriverse.com/api/public-base/posts/eb2f99e2-3940-4d4a-998c-55d1a6c3e0bc",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "false" },
                    { key: "Access-Control-Allow-Origin", value: "https://example.com" },
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date" },
                ]
            }
        ]
    }
}

module.exports = nextConfig
