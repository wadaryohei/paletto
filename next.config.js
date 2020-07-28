require('dotenv').config()

module.exports = {
  env: {
    BASE_URL:
      process.env.NODE_ENV === 'production'
        ? process.env.BASE_URL
        : 'https://localhost:3000',
  },
}
