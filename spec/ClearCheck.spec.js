const ClearCheck = require('../src/ClearCheck.js');

try {
	require('../apiKeys.js')();
} catch (e) {
	// It's ok if we don't load the keys from the apiKeys file
	// In CI we load directly
}

describe('the ClearCheck.js class', () => {
	it('should be able to create an object', () => {
		expect.assertions(2);

		const result = new ClearCheck(process.env.TODO_KEY);

		console.log(JSON.stringify(result, null, 2));

		expect(result).toBeDefined();
		expect(result.pass()).toBe('TODO');
	});

	it('should do a test', async () => {
		expect.assertions(2);

		const check = new ClearCheck(process.env.API_KEY);

		expect(check).toBeDefined();

		const result = await check.accountDetails();

		console.log(JSON.stringify(result, null, 2));

		expect(result).toBeDefined();
	});

	// making changes
});
