
export function request(action, data, {
	functionName = 'admin-stsyem'
} = {}) {
	return uniCloud.callFunction({
		name: functionName,
		data: {
			action,
			data
		}
	}).then(({result}) => {
		return Promise.resolve(result)
	}).catch(err => {
		return Promise.reject(err)
	})
}