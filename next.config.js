/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // reactStrictMode: true,
    images: {
      loader: "imgix",
      path: "https://www.testapp.rayyserve.com/",
      // path: "http://localhost:3000/",
  },
  output: 'export',
}

module.exports = nextConfig