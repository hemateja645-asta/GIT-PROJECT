// pages/LabTestsPage.js
class LabTestsPage {
    constructor(page) {
        this.page = page;
        this.bookDiagnosticLink = page.getByText('Book Diagnostic Tests');
        this.cityLabels = page.locator(".u-margint--standard.o-f-color--primary");
    }

    async navigateToTests() {
        await this.page.goto('https://www.practo.com/', { waitUntil: 'domcontentloaded' });
        await this.bookDiagnosticLink.click({ force: true });
        await this.page.goto('https://www.practo.com/tests', { waitUntil: 'networkidle' });
        await this.page.waitForTimeout(3000);
    }

    async getTopCities() {
        return await this.cityLabels.allTextContents();
    }
}
module.exports = { LabTestsPage };

// pages/corporate_page.js
// pages/corporate_page.js
