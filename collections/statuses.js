module.exports = type => ({
	singular: 'Status',
	fields: {
		name: {
			label: 'Name',
			schemaType: type.String({
				required: true
			})
		}
	},
	meta: {}
})
