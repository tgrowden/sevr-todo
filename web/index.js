'use strict'

const express = require('express')
const router = express.Router()
const template = require('./templates/index.html')

/**
 * 
 * 
 * @class WebServer
 */
class WebServer {
	constructor(sevr) {
		const app = express()

		router.use((req, res, next) => {
			if (sevr.authentication.isEnabled) {
				if (sevr.authentication.user) {
					next()
				} else if (~req.originalUrl.indexOf('/login')) {
					next()
				} else {
					res.redirect('/login')
				}
			} else {
				next()
			}
		})

		router.route('/login')
			.get((req, res) => {
				res.send(template({
					site: { title: 'Sevr Todo' }
				}))
			})

		this.router = router
		this.sevr = sevr
		this.app = app
	}

	willRun() {
		this.app.use(this.router)
		this.sevr.server.use(this.app)
	}
}

module.exports = WebServer
