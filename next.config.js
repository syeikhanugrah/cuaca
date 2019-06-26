const webpack = require('webpack');
const withSass = require('@zeit/next-sass');

require('dotenv-safe').load();

module.exports = withSass({
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
      })
    );
    return config
  }
});
