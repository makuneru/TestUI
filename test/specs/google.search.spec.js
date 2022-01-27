const GooglePage = require('../pageobjects/google.page')
const faker = require('faker')

describe('Google search', () => {
    it('should search random words', async () => {
        await GooglePage.open();
        const toSearch = faker.random.word();
        await GooglePage.txaSearch.setValue(toSearch).then( async () => {
            await browser.keys("\uE007"); //press enter
        });
        await expect(browser).toHaveUrlContaining(toSearch);
    });
});


