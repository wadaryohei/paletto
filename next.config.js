const { processEnv } = require('next/dist/lib/load-env-config')

require('dotenv').config()

module.exports = {
  env: {
    BASE_URL:
      process.env.NODE_ENV === 'production'
        ? process.env.BASE_URL
        : 'https://localhost:3000',
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
}
