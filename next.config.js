/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.quriverse.com'],
    },
    async headers() {
        return [
            {
                source: "/csr",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "false" },
                    { key: "Access-Control-Allow-Origin", value: "https://api.quriverse.com" },
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date" },
                ]
            }
        ]
    }
}

module.exports = nextConfig
