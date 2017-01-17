module.exports = types => ({
	singular: 'List',
	fields: {
		name: {
			label: 'Name',
			schemaType: types.String({
				required: true
			})
		},
		user: {
			label: 'User',
			schemaType: types.ObjectId({
				required: true,
				ref: 'User',
				display: 'username'
			})
		},
		status: {
			label: 'Status',
			schemaType: types.ObjectId({
				required: true,
				ref: 'Status',
				display: 'name'
			})
		}
	},
	defaultField: 'name',
	meta: {}
})
