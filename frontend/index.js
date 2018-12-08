/**
 * An example of how to use the NextAuth module.
 *
 * To invoke next-auth you will need to define a configuration block for your
 * site. You can create a next-auth.config.js file and put all your options
 * in it and pass it to next-auth when calling init().
 * 
 * A number of sample configuration files for various databases and
 * authentication options are provided.
 **/

// Include Next.js, Next Auth and a Next Auth config
const next = require('next')
const nextAuth = require('next-auth')
const nextAuthConfig = require('./next-auth.config')

// Load environment variables from .env
require('dotenv').load()

// Initialize Next.js
const nextApp = next({
  dir: '.',
  dev: (process.env.NODE_ENV === 'development')
})

// Initialize routes
const routes = require("./routes");

// Add next-auth to next app
nextApp.prepare()
.then(() => {
  return nextAuthConfig()
})
.then(nextAuthOptions => {
  // Don't pass a port to NextAuth!
  if (nextAuthOptions.port) delete nextAuthOptions.port

  return nextAuth(nextApp, nextAuthOptions)
})
.then(nextAuthApp => {

  // Get instance of Express from NextAuth instance
  const expressApp = nextAuthApp.expressApp

  // Default catch-all handler to allow Next.js to handle all other routes
  expressApp.all('*', (req, res) => {
    const nextRequestHandler = routes.getRequestHandler(nextApp)
    return nextRequestHandler(req, res)
  })

  expressApp.listen(process.env.PORT, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:' + process.env.PORT)
  })
})
.catch(err => {
  console.log('An error occurred, unable to start the server')
  console.log(err)
})
