// pages/HospitalPage.js
class HospitalPage {
    constructor(page) {
        this.page = page;
        this.searchHospitalsLink = page.getByRole('link', { name: 'Search for hospitals' });
        this.locationInput = page.locator('[data-qa-id="omni-searchbox-locality"]');
        this.hospitalSearchInput = page.locator('[data-qa-id="omni-searchbox-keyword"]');
        this.hospitalCards = page.locator('div.c-estb-card');
        this.bangaloreOption = page.locator('text=Bangalore');
    }

    async navigate() {
        await this.page.goto('https://www.practo.com/', { waitUntil: 'networkidle' });
    }

    async searchByLocation(city) {
    //     await this.searchHospitalsLink.click();
    //     // await this.page.waitForTimeout(3000);
    //     await this.locationInput.click();
    //     await this.locationInput.press('Control+A');
    //     await this.locationInput.press('Backspace');
    //     await this.locationInput.type(city, { delay: 100 });
    //     // await this.page.waitForTimeout(2000);

    //     if (await this.bangaloreOption.first().count() > 0) {
    //         await this.bangaloreOption.first().click();
    //     } else {
    //         await this.page.keyboard.press('ArrowDown');
    //         await this.page.keyboard.press('Enter');
    //     }
    //     await this.page.waitForTimeout(2000);
    // }
    await this.searchHospitalsLink.click();
    await this.locationInput.waitFor({state:'visible'})
    await this.locationInput.click();
    await this.locationInput.press('Control+A');
    await this.locationInput.press('Backspace');
    await this.locationInput.fill(city);
    await this.page.waitForLoadState('networkidle');
    const cityOption = this.page.locator(`text=${city}`).first();
    await cityOption.waitFor({state:'visible',timeout:40000});
    await cityOption.click();

    }

    async searchForHospital(keyword) {
        await this.hospitalSearchInput.fill(keyword);
        await this.hospitalSearchInput.press('Enter');
        await this.page.waitForSelector('div.c-estb-card', { timeout: 60000 });
        await this.page.waitForTimeout(5000);
    }

    async scrollHospitals() {
        for (let i = 0; i < 10; i++) {
            await this.page.mouse.wheel(0, 3000);
            await this.page.waitForTimeout(2000);
        }
    }
}
module.exports = { HospitalPage };