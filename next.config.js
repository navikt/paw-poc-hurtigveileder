const withCSS = require('@zeit/next-css')

const nextConfig = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }
}

module.exports = withCSS(nextConfig)
