/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
    output: 'export',

    /**
     * Tell Next.js where the `public` folder is.
     * Replace `nextjs-github-pages` with your Github repo project name.
     */
    assetPrefix: isProd ? "/idarciooliveira.me/" : "",
    images: {
        unoptimized: true,
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};
