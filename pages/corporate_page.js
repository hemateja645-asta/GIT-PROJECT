class CorporatePage {
    constructor(page) {
        this.page = page;
        this.forCorporatesLink = page.getByText('For Corporates').first();
        this.healthWellnessLink = page.getByText('Health & Wellness Plans');
        this.nameInput = page.getByRole('textbox', { name: 'Name', exact: true });
        this.orgNameInput = page.getByRole('textbox', { name: 'Organization Name', exact: true });
        this.contactInput = page.getByRole('textbox', { name: 'Contact Number' });
        this.emailInput = page.getByRole('textbox', { name: 'Official Email ID' });
        this.orgSizeSelect = page.locator('#organizationSize:visible');
        this.interestedInSelect = page.locator('#interestedIn:visible');
        this.demoButton = page.getByRole('button', { name: 'Schedule a demo' });
    }

    async navigate() {
        await this.page.goto("https://www.practo.com/");
        await this.page.waitForLoadState('domcontentloaded');
    }

    async fillCorporateForm(name, orgName, contact, email, orgSize, interestReason) {
        await this.forCorporatesLink.click();
        await this.healthWellnessLink.click();
        await this.nameInput.fill(name);
        await this.orgNameInput.fill(orgName);
        await this.contactInput.fill(contact);
        await this.emailInput.fill(email);
        await this.orgSizeSelect.selectOption(orgSize);
        await this.interestedInSelect.selectOption(interestReason);
    }

    async isDemoButtonDisabled() {
        return await this.demoButton.isDisabled();
    }
}

module.exports = { CorporatePage };