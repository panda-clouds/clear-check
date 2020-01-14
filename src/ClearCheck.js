const encodeUrl = require('urlencode');

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

	async submitRequest(email) {
		const encoded = '%5B%22' + encodeUrl(email) + '%22%5D';

		console.log(encoded);

		const request = require('request-promise');
		const options = {
			method: 'POST',
			json: true,
			headers: {},
			uri: 'https://app.clearchecks.com/api/orders/new',
			body: {
				api_token: this.api_token,
				applicant_emails: encoded,
				order_quantity: 1,
				report_sku: 'EE6',
				drug_test: 'N',
				include_monitoring: 'Y',
				terms_agree: 'Y',
			},
		};

		const httpResponse = await request(options);

		return httpResponse;
	}

	async getReports() {
		const request = require('request-promise');
		const options = {
			method: 'GET',
			json: true,
			headers: {},
			uri: 'https://app.clearchecks.com/api/reports/all',
			body: {
				api_token: this.api_token,
			},
		};

		const httpResponse = await request(options);

		return httpResponse;
	}

	async getReportStatus(report_key) {
		const request = require('request-promise');
		const options = {
			method: 'GET',
			json: true,
			headers: {},
			uri: 'https://app.clearchecks.com/api/status/' + report_key,
			body: {
				api_token: this.api_token,
			},
			resolveWithFullResponse: true,
		};

		const httpResponse = await request(options);

		return httpResponse;
	}

	async getReportDetails(report_key) {
		const request = require('request-promise');
		const options = {
			method: 'GET',
			json: true,
			headers: {},
			uri: 'https://app.clearchecks.com/api/reports/' + report_key,
			body: {
				api_token: this.api_token,
			},
		};

		const httpResponse = await request(options);

		return httpResponse;
	}
}

module.exports = ClearCheck;
