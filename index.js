const Sevr    = require('sevr')
const SevrCli = require('sevr-cli')
const SevrPerm  = require('sevr-perm')
const Rest = require('sevr-rest')
const WebServer = require('./web')
const config = require('./config')

/**
 * Application plugin class
 * 
 * All custom application intialization and logic
 * should happen within this class
 * 
 * @class App
 */
class App {
	constructor(sevr) {
		this.sevr = sevr
	}

	willRun() {
		this.sevr.logger.info('Enabling authentication...')
		return this.sevr.authentication.enable(this.sevr.collections.users)
	}

	run() {
		this.sevr.startServer()
		this.sevr.logger.verbose('Application running...')
	}
}

// Create a new Sevr instance
const sevr = new Sevr(config)

// Attach the remote CLI plugin
sevr.attach(SevrCli)

sevr.attach(SevrPerm, config.permissions)

sevr.attach(Rest)

sevr.attach(WebServer)

sevr.attach(App)

module.exports = sevr
