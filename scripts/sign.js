require('dotenv').config()
const { execSync } = require('child_process')

const run = (command) =>
  execSync(`npx ${command}`, {stdio: 'inherit'})

const parseArgs = (args) =>
  Object.keys(args).reduce(
    (result, arg) => `${result} ${arg} ${args[arg]}`
  , "")

const args = {
  "-s": "dist",
  "--api-key": process.env.WEB_EXT_API_KEY,
  "--api-secret": process.env.WEB_EXT_API_SECRET,
}

const command = `web-ext sign ${parseArgs(args)}`
run(command)
