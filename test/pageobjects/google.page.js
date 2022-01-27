const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GooglePage extends Page {
    /**
     * define selectors using getter methods
     */
    get txaSearch() {
        return $('//input[@name="q"]');
    }

    open() {
        return super.open('/');
    }
}

module.exports = new GooglePage();
