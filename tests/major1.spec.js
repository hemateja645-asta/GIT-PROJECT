

// tests/practo.spec.js
const { test, expect } = require('@playwright/test');
const { HospitalPage } = require('../pages/major_hospital.js');
const { LabTestsPage } = require('../pages/labtest_major.js');
const { CorporatePage } = require('../pages/corporate_page.js');
import * as XLSX from "xlsx";

test('  @hHospitals with rating > 3.5, Open 24x7 and Parking @hospital', async ({ page }) => {
    test.setTimeout(180000);
    const hospitalPage = new HospitalPage(page);

    await hospitalPage.navigate();
    await hospitalPage.searchByLocation('Bangalore');
    await hospitalPage.searchForHospital('hospital');
    await hospitalPage.scrollHospitals();

    const hospitals = hospitalPage.hospitalCards;
    const count = await hospitals.count();

    console.log('\n==============================');
    console.log(`Total Hospitals Loaded : ${count}`);
    console.log('==============================');

    const maxHospitals = Math.min(count, 50);
    const printedHospitals = new Set();
    const arr = []
    for (let i = 0; i < maxHospitals; i++) {
        try {
            const hospital = hospitals.nth(i);
            const nameLocator = hospital.locator('a[href*="/hospital/"]').first();

            if (await nameLocator.count() === 0) continue;

            const hospitalName = (await nameLocator.textContent())?.trim();
            if (!hospitalName) continue;

            const hospitalLink = await nameLocator.getAttribute('href');
            if (!hospitalLink) continue;

            let rating = 0;
            const ratingLocator = hospital.locator('div.c-feedback span.u-bold');
            if (await ratingLocator.count() > 0) {
                const ratingText = (await ratingLocator.first().textContent())?.trim();
                if (ratingText) rating = parseFloat(ratingText);
            }

            if (isNaN(rating)) continue;

            const hospitalText = (await hospital.textContent())?.toLowerCase();
            const isOpen24 = hospitalText.includes('open 24x7');

            if (rating > 3.5 && isOpen24) {
                const detailPage = await page.context().newPage();
                let hasParking = false;

                try {
                    await detailPage.goto(`https://www.practo.com${hospitalLink}`, {
                        waitUntil: 'domcontentloaded',
                        timeout: 30000
                    });
                    await detailPage.waitForTimeout(3000);
                    const bodyText = (await detailPage.locator('body').textContent())?.toLowerCase();
                    
                    hasParking = bodyText.includes('parking') || bodyText.includes('car parking') || 
                                 bodyText.includes('bike parking') || bodyText.includes('parking facility') || 
                                 bodyText.includes('valet');
                } catch (error) {
                    console.log(`Unable to open : ${hospitalName}`);
                } finally {
                    await detailPage.close();
                }

                if (!printedHospitals.has(hospitalName)) {
                    printedHospitals.add(hospitalName);
                    console.log('\n------------------------------');
                    console.log(`Hospital Name : ${hospitalName}`);
                    console.log(`Rating        : ${rating}`);
                    console.log(`Status        : Open 24x7`);
                    console.log(`Parking       : ${hasParking ? 'Available' : 'Not Mentioned'}`);

                    // console.log(`Hospital Name = ${hospitalName}`);
                    // console.log(`Rating        = ${rating}`);
                    const open =  "Open 24x7"
                    // console.log(`Parking       : ${hasParking ? 'Available' : 'Not Mentioned'}`);
                    let parking = hasParking ? 'Available' : 'Not Mentioned'
                    const  data = {
                        HospitalName: hospitalName,
                        Rating:rating,
                        Status:open ,
                        Parking:parking
                    }
                    arr.push(data)

                }
            }
        } 
        catch (error) {
            console.log(`Skipping hospital ${i + 1}`);
        }
    }
    let workbook = XLSX.utils.book_new();
    let worksheet = XLSX.utils.json_to_sheet(arr)
    XLSX.utils.book_append_sheet(workbook,worksheet,"HospitalsData");
    XLSX.writeFile(workbook,"hospital.xlsx")
    console.log('\n========= TEST COMPLETED =========');
});

test('Robust Top Cities Scraper  @top cities', async ({ page }) => {
    const labPage = new LabTestsPage(page);
    await labPage.navigateToTests();

    const cities = await labPage.getTopCities();
    console.log(cities);
    for (let i = 0; i < cities.length; i++) {
        console.log(cities[i]);
    }
});

test('find hospital @form', async ({ page }) => {
    const corporatePage = new CorporatePage(page);

    await corporatePage.navigate();
    await corporatePage.fillCorporateForm(
        'Gnana',
        'cognizant',
        '1234567890',
        'Gnana@cognizant.com',
        '10001+',
        'Taking a demo'
    );

    const isDisabled = await corporatePage.isDemoButtonDisabled();
    if (expect(isDisabled)) {
         console.log("Button not invoked");
    }
});