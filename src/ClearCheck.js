class ClearCheck {
	constructor(api_token) {
		// Empty Constructor
		this.api_token = api_token;
	}

	pass() {
		return this.api_token;
	}

	async accountDetails() {
		const request = require('request-promise');
		const options = {
			method: 'GET',
			json: true,
			headers: {},
			uri: 'https://app.clearchecks.com/api/accounts',
			body: {
				api_token: this.api_token,
			},
		};

		const httpResponse = await request(options);

		return httpResponse;
	}
}

module.exports = ClearCheck;
