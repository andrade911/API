const { scraper: { executeScraper, executeScraperNYTData, excecuteScraperAppleData, excecuteScraperGov }, redis } = require('../routes/instances');
const logger = require('../utils/logger');

// eslint-disable-next-line
before(async () => {
	await redis.flushall();
	logger.info('Finished flushing all data from redis.');

	await executeScraper();
	await executeScraperNYTData();
	await excecuteScraperAppleData();
	await excecuteScraperGov();
	logger.info('Scraping finished.');
});
