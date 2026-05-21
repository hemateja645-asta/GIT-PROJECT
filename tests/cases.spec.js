// const {test,expect} = require('@playwright/test');
// test('TC_022',async({page})=>{
//     await page.goto("https://www.practo.com/")

//     await page.locator('span.nav-interact',{
//         hasText : 'For Corporates'}).click();
  
//     await page.locator('text=Health & Wellness Plans').click();
//     await page.locator('#name').fill('max')
//     await page.locator('#organizationName').fill('CTS');
//     await page.locator('#contactNumber').fill('7878787987878');
//     await page.locator('#officialEmailId').fill('test@gmail.com');
//     await page.locator('#organizationSize').click();
//     await page.locator('select').selectOption({index: 4})
//     await page.locator("#interestedIn").click();
//     await page.locator('select').selectOption('Referring someone').click();
//     const button = page.locator('button[type="submit"]');
//     await expect(button).toBeDisabled();
// });




import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.practo.com/');
  await page.getByText('For Corporates').first().click();
  await page.getByRole('link', { name: 'Health & Wellness Plans' }).click();
  await page.goto('https://www.practo.com/plus/corporate');
  await page.getByRole('textbox', { name: 'Name', exact: true }).click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).fill('max');
  await page.getByRole('textbox', { name: 'Organization Name' }).click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).fill('maxc');
  await page.getByRole('textbox', { name: 'Organization Name' }).fill('ts');
  await page.getByRole('textbox', { name: 'Contact Number' }).click();
  await page.getByRole('textbox', { name: 'Contact Number' }).fill('98989898989898');
  await page.getByRole('textbox', { name: 'Official Email ID' }).click();
  await page.getByRole('textbox', { name: 'Official Email ID' }).fill('rhfjbe@gmail.com');
  await page.locator('#organizationSize').click();
  await page.locator('text="10001+"').click()

  await page.locator('#interestedIn').click();
  await page.locator('text="Referring someone"').click();
  const button = page.locator('button[type="submit"]');
  await expect(button).toBeDisabled();
});

