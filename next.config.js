const nextConfig = {
    experimental: {
        appDir: true,
        serverActions: true,
        // serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs'],
    },
    compiler: {
        styledComponents: true
    }
}

module.exports = nextConfig