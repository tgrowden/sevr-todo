module.exports = types => ({
	singular: 'User',
	fields: {
		name: {
			label: 'Name',
			schemaType: {
				first: types.String({
					required: true,
					label: 'First'
				}),
				last: types.String({
					required: true,
					label: 'Last'
				})
			}
		},
		username: {
			label: 'Username',
			schemaType: types.String({
				required: true
			})
		},
		email: {
			label: 'Email',
			schemaType: types.Email()
		},
		password: {
			label: 'Password',
			schemaType: types.String({
				required: true,
				hidden: true
			})
		},
	},
	defaultField: 'username',
	virtuals: {
		'name.full': {
			get: function() {
				return this.name.first + ' ' + this.name.last
			}
		}
	},
	statics: {
		findByUsername: (name, cb) => {
			return this.find({
				username: new RegExp(name, 'i')
			}, cb)
		}
	},
	meta: {}
})
