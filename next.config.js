/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // reactStrictMode: true,
    images: {
      loader: "imgix",
      path: "https://www.testapp.rayyserve.com/",
  },
  output: 'export',
}

module.exports = nextConfig