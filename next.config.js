const withCSS = require('@zeit/next-css')

const nextConfig = {
  exportTrailingSlash: true,
  assetPrefix: process.env.BASE_PATH || '',
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
}

module.exports = withCSS(nextConfig)
