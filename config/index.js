'use strict'

let Private

try {
	Private = require('./private')
} catch(e) {
	if (e instanceof Error && e.code === 'MODULE_NOT_FOUND') {
		Private = {}
	} else {
		throw e
	}
}

const Config = {
	permissions: {
		roles: {
			admin: {
				'_': '*'
			},
			user: {
				users: 'r',
				statuses: '*',
				lists: '*'
			},
			'_': {
				'_': 'r'
			}
		}
	}
}

module.exports = Object.assign(Config, Private)
