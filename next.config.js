const nextConfig = {
  exportTrailingSlash: true,
  assetPrefix: process.env.BASE_PATH || '',
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
}

module.exports = nextConfig
