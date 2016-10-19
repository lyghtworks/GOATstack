export const devEnv = {
  db: {
    uri: 'mongodb://localhost/dreams-dev',
    options: {
      user: '',
      pass: ''
    },
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
  livereload: true,
  seedDB: true,
  seedFile: '../config/lib/seed'
};