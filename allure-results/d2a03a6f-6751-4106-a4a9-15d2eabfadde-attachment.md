# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cases.spec.js >> test
- Location: tests\cases.spec.js:26:5

# Error details

```
Error: expect(locator).toBeDisabled() failed

Locator: locator('button[type="submit"]')
Expected: disabled
Error: strict mode violation: locator('button[type="submit"]') resolved to 2 elements:
    1) <button disabled type="submit" class="u-text--bold u-border-radius--8 text-white text-center u-m-t--5 u-p-v--12 width-per--100 u-cur--ptr bg-grey-3">Schedule a demo</button> aka getByRole('button', { name: 'Schedule a demo' })
    2) <button disabled type="submit" class="u-text--bold u-border-radius--8 text-white text-center u-m-t--5 u-p-v--12 width-per--100 u-cur--ptr bg-grey-3">Schedule a demo</button> aka getByText('Schedule a demo').nth(3)

Call log:
  - Expect "toBeDisabled" with timeout 5000ms
  - waiting for locator('button[type="submit"]')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - img "Hero Banner" [ref=e6]
      - generic:
        - navigation [ref=e7]:
          - img "Practo Logo" [ref=e8]
          - list [ref=e9]:
            - text: Our Services Practo Ecosystem Product Capabilities Testimonials FAQs
            - link "Group Insurance" [ref=e11] [cursor=pointer]:
              - /url: https://www.partnership.practo.com/total-protect?utm_source=practo-plus-nav&utm_medium=organic&utm_campaign=organic
        - generic [ref=e14]:
          - heading "Your Workplace Health and Wellness Partner" [level=1] [ref=e15]
          - generic [ref=e16]: Over 30cr users benefited by our holistic, customizable and accessible healthcare solutions
      - generic [ref=e18]:
        - heading "Schedule a Demo" [level=2] [ref=e19]
        - generic [ref=e20]:
          - textbox "Name" [ref=e22]: maxc
          - textbox "Organization Name" [ref=e24]: ts
          - textbox "Contact Number" [ref=e26]: "98989898989898"
          - textbox "Official Email ID" [active] [ref=e28]: rhfjbe@gmail.com
          - combobox [ref=e30]:
            - option "Organization Size" [disabled]
            - option "<500"
            - option "501-1000"
            - option "1001-5000"
            - option "5001-10000"
            - option "10001+" [selected]
          - combobox [ref=e32]:
            - option "Interested In" [disabled]
            - option "Taking a demo"
            - option "Referring someone" [selected]
            - option "Enquiring about an existing plan"
            - option "A career opportunity"
          - button "Schedule a demo" [disabled] [ref=e33] [cursor=pointer]
          - iframe [ref=e36]:
            - generic [ref=f6e5]:
              - generic [ref=f6e6]:
                - text: protected by
                - strong [ref=f6e7]: reCAPTCHA
              - generic [ref=f6e9]:
                - text: reCAPTCHA is changing its terms of service.
                - link "Take action." [ref=f6e10] [cursor=pointer]:
                  - /url: https://google.com/recaptcha/admin/migrate
    - generic [ref=e37]:
      - link "Total Protect Banner" [ref=e39] [cursor=pointer]:
        - /url: https://www.partnership.practo.com/total-protect?utm_source=practo-plus-dweb&utm_medium=organic&utm_campaign=organic
        - img "Total Protect Banner" [ref=e40]
      - generic [ref=e41]:
        - heading "Our Clients" [level=2] [ref=e42]
        - list [ref=e44]:
          - listitem [ref=e45]:
            - img "Client Logo" [ref=e46]
          - listitem [ref=e47]:
            - img "Client Logo" [ref=e48]
          - listitem [ref=e49]:
            - img "Client Logo" [ref=e50]
          - listitem [ref=e51]:
            - img "Client Logo" [ref=e52]
          - listitem [ref=e53]:
            - img "Client Logo" [ref=e54]
          - listitem [ref=e55]:
            - img "Client Logo" [ref=e56]
          - listitem [ref=e57]:
            - img "Client Logo" [ref=e58]
      - generic [ref=e59]:
        - heading "Our Services" [level=2] [ref=e60]
        - generic [ref=e61]:
          - generic [ref=e62]:
            - img "service" [ref=e63]
            - generic [ref=e64]:
              - generic [ref=e65]: Easy Online consultations
              - generic [ref=e66]: Over 25 specialities guided by best in class doctors for effective care around the clock.
          - generic [ref=e67]:
            - img "service" [ref=e68]
            - generic [ref=e69]:
              - generic [ref=e70]: Online Pharmacy
              - generic [ref=e71]: COVID-19 essentials and self-test kits provided, along with access to a large inventory for medicines.
          - generic [ref=e72]:
            - img "service" [ref=e73]
            - generic [ref=e74]:
              - generic [ref=e75]: Lab Tests at Home
              - generic [ref=e76]: Discounts upto 20% on NABL-accredited lab tests and at-home tests in multiple cities.
          - generic [ref=e77]:
            - img "service" [ref=e78]
            - generic [ref=e79]:
              - generic [ref=e80]: Group Health Insurance
              - generic [ref=e81]: Over 500+ day care procedures covered with a variety of payment options, for employees and family members.
          - generic [ref=e82]:
            - img "service" [ref=e83]
            - generic [ref=e84]:
              - generic [ref=e85]: SOS Ambulance Service
              - generic [ref=e86]: 24/7 round the clock Ambulatory services along with equipped medical staff.
          - generic [ref=e87]:
            - img "service" [ref=e88]
            - generic [ref=e89]:
              - generic [ref=e90]: Mental Wellbeing Solutions
              - generic [ref=e91]: Specially focused Mental Wellness plans available with regular informative webinars and constant support.
          - generic [ref=e92]:
            - img "service" [ref=e93]
            - generic [ref=e94]:
              - generic [ref=e95]: Covid Care Packages
              - generic [ref=e96]: Covid-19 specific online consultations, lab tests, medical equipment, SOS assistance, and home care services
          - generic [ref=e97]:
            - img "service" [ref=e98]
            - generic [ref=e99]:
              - generic [ref=e100]: Engagement Activities & Gamification
              - generic [ref=e101]: Webinars and other knowledge-building sessions, peer-group challenges, and other employee engagement activities
    - generic [ref=e103]:
      - heading "Why Choose Us?" [level=2] [ref=e104]
      - generic [ref=e105]:
        - generic [ref=e106]:
          - img "why choose us" [ref=e107]
          - generic [ref=e108]:
            - generic [ref=e109]: For Organizations
            - generic [ref=e110]: Manage benefits, Improve Communication and Engage Employees
        - generic [ref=e111]:
          - img "why choose us" [ref=e112]
          - generic [ref=e113]:
            - generic [ref=e114]: For Employees
            - generic [ref=e115]: Better Health, Easy Management and more vitality
        - generic [ref=e116]:
          - img "why choose us" [ref=e117]
          - generic [ref=e118]:
            - generic [ref=e119]: For Leaders
            - generic [ref=e120]: Culture of Health and Wellness, Peer Interactions
    - generic [ref=e122]:
      - heading "Practo Ecosystem" [level=2] [ref=e123]
      - paragraph [ref=e124]: With a rating of 4.5+ we ensure our healthcare solutions are top quality and uniquely personalised to every employee.
      - generic [ref=e125]:
        - list [ref=e128]:
          - generic [ref=e129]:
            - img [ref=e131]
            - generic [ref=e132]:
              - generic [ref=e133]: 15k+
              - generic [ref=e134]: Instant consultations per day
          - generic [ref=e135]:
            - img [ref=e137]
            - generic [ref=e138]:
              - generic [ref=e139]: 30cr+
              - generic [ref=e140]: Patients per year
          - generic [ref=e141]:
            - img [ref=e143]
            - generic [ref=e144]:
              - generic [ref=e145]: 1.2 lakh+
              - generic [ref=e146]: Doctor partners
        - img "World Map" [ref=e148]
    - generic [ref=e150]:
      - heading "Demo Video" [level=2] [ref=e151]
      - iframe [ref=e153]:
        - generic [active] [ref=f4e1]:
          - generic "YouTube Video Player" [ref=f4e3]
          - generic [ref=f4e5]:
            - generic:
              - generic:
                - button "Play video" [ref=f4e10] [cursor=pointer]
                - button "Hide player controls" [ref=f4e12] [cursor=pointer]
                - generic [ref=f4e14]:
                  - generic [ref=f4e19]:
                    - generic [ref=f4e20]:
                      - link "Practo - Employee Health Benefits | Designed for Corporates" [ref=f4e21] [cursor=pointer]:
                        - /url: https://www.youtube.com/watch?v=jwAWoiGIBJE
                      - link "Practo" [ref=f4e22] [cursor=pointer]:
                        - /url: /channel/UCGlsl2YPuCvklhbUWu1vuqQ
                        - generic [ref=f4e23]: Practo
                    - generic [ref=f4e24]:
                      - button [ref=f4e25] [cursor=pointer]
                      - generic [ref=f4e27]:
                        - generic: Practo
                        - generic: 134K subscribers
                  - generic [ref=f4e28]:
                    - button "Share" [ref=f4e31] [cursor=pointer]:
                      - generic [ref=f4e35]:
                        - img
                    - link "Watch on YouTube" [ref=f4e42] [cursor=pointer]:
                      - /url: https://www.youtube.com/watch?v=jwAWoiGIBJE
                      - generic [ref=f4e45]:
                        - text: Watch on
                        - img [ref=f4e47]:
                          - generic [ref=f4e49]:
                            - img
    - generic [ref=e156]:
      - heading "Product Capabilities" [level=2] [ref=e157]
      - generic [ref=e158]:
        - generic [ref=e161]:
          - generic [ref=e165]:
            - heading [level=3] [ref=e167]: Access to a large repository of health articles written by medical experts
            - img [ref=e169]
          - generic [ref=e173]:
            - heading "Easy-to-use interface" [level=3] [ref=e175]
            - img "Item" [ref=e177]
          - generic [ref=e181]:
            - heading [level=3] [ref=e183]: Dedicated dashboard for HRs for easy access and management
            - img [ref=e185]
          - generic [ref=e189]:
            - heading [level=3] [ref=e191]: All records stored on secure servers
            - img [ref=e193]
          - generic [ref=e197]:
            - heading [level=3] [ref=e199]: ISO 27001 certified
            - img [ref=e201]
          - generic [ref=e205]:
            - heading [level=3] [ref=e207]: Access to a large repository of health articles written by medical experts
            - img [ref=e209]
          - generic [ref=e213]:
            - heading [level=3] [ref=e215]: Easy-to-use interface
            - img [ref=e217]
          - generic [ref=e221]:
            - heading [level=3] [ref=e223]: Dedicated dashboard for HRs for easy access and management
            - img [ref=e225]
          - generic [ref=e229]:
            - heading [level=3] [ref=e231]: All records stored on secure servers
            - img [ref=e233]
          - generic [ref=e237]:
            - heading [level=3] [ref=e239]: ISO 27001 certified
            - img [ref=e241]
          - generic [ref=e245]:
            - heading [level=3] [ref=e247]: Access to a large repository of health articles written by medical experts
            - img [ref=e249]
        - generic [ref=e251]:
          - listitem [ref=e252] [cursor=pointer]:
            - button "• 1" [ref=e253]
          - listitem [ref=e254] [cursor=pointer]:
            - button "• 2" [ref=e255]
          - listitem [ref=e256] [cursor=pointer]:
            - button "• 3" [ref=e257]
          - listitem [ref=e258] [cursor=pointer]:
            - button "• 4" [ref=e259]
          - listitem [ref=e260] [cursor=pointer]:
            - button "• 5" [ref=e261]
    - text: • • • • •
    - generic [ref=e262]:
      - generic [ref=e263]:
        - heading "Testimonials" [level=2] [ref=e264]
        - generic [ref=e266]:
          - generic [ref=e269]:
            - generic [ref=e272]:
              - img [ref=e273]
              - generic [ref=e274]:
                - generic [ref=e275]: Mr. Dilip Chenoy Secretary-General
                - img [ref=e277]
                - generic [ref=e278]:
                  - img [ref=e279]
                  - img [ref=e280]
                  - img [ref=e281]
                  - img [ref=e282]
                  - img [ref=e283]
                - generic [ref=e284]: “We believe in Practo’s commitment to providing high-quality healthcare services to society, and in supporting the country’s working professional community. Practo and FICCI management will be working closely on every step"
            - generic [ref=e287]:
              - img "Mr. Varun Sheth" [ref=e288]
              - generic [ref=e289]:
                - generic [ref=e290]:
                  - text: Mr. Varun Sheth
                  - text: Co-founder & CEO
                - img "logo" [ref=e292]
                - generic [ref=e293]:
                  - img "star" [ref=e294]
                  - img "star" [ref=e295]
                  - img "star" [ref=e296]
                  - img "star" [ref=e297]
                  - img "star" [ref=e298]
                - generic [ref=e299]: "\"Inspired with the idea of ‘giving that gives back’ the social impact plan is focused on creating a community that believes in building a healthy India. It is our paramount responsibility to look after our donors whose relentless efforts are saving so many lives. We are very delighted to partner with Practo which echoes the same emotion, compassion, and passion towards building a healthy India.\""
            - generic [ref=e302]:
              - img [ref=e303]
              - generic [ref=e304]:
                - generic [ref=e305]: Mr. Naveen Tahilyani MD & CEO
                - img [ref=e307]
                - generic [ref=e308]:
                  - img [ref=e309]
                  - img [ref=e310]
                  - img [ref=e311]
                  - img [ref=e312]
                  - img [ref=e313]
                - generic [ref=e314]: "\"Through this partnership, beyond synergies at both sides, the consumers of Practo can access best-in-class solutions for safeguarding themselves and building a healthier life\"."
            - generic [ref=e317]:
              - img [ref=e318]
              - generic [ref=e319]:
                - generic [ref=e320]: Mr. Dilip Chenoy Secretary-General
                - img [ref=e322]
                - generic [ref=e323]:
                  - img [ref=e324]
                  - img [ref=e325]
                  - img [ref=e326]
                  - img [ref=e327]
                  - img [ref=e328]
                - generic [ref=e329]: “We believe in Practo’s commitment to providing high-quality healthcare services to society, and in supporting the country’s working professional community. Practo and FICCI management will be working closely on every step"
            - generic [ref=e332]:
              - img [ref=e333]
              - generic [ref=e334]:
                - generic [ref=e335]: Mr. Varun Sheth Co-founder & CEO
                - img [ref=e337]
                - generic [ref=e338]:
                  - img [ref=e339]
                  - img [ref=e340]
                  - img [ref=e341]
                  - img [ref=e342]
                  - img [ref=e343]
                - generic [ref=e344]: "\"Inspired with the idea of ‘giving that gives back’ the social impact plan is focused on creating a community that believes in building a healthy India. It is our paramount responsibility to look after our donors whose relentless efforts are saving so many lives. We are very delighted to partner with Practo which echoes the same emotion, compassion, and passion towards building a healthy India.\""
            - generic [ref=e347]:
              - img [ref=e348]
              - generic [ref=e349]:
                - generic [ref=e350]: Mr. Naveen Tahilyani MD & CEO
                - img [ref=e352]
                - generic [ref=e353]:
                  - img [ref=e354]
                  - img [ref=e355]
                  - img [ref=e356]
                  - img [ref=e357]
                  - img [ref=e358]
                - generic [ref=e359]: "\"Through this partnership, beyond synergies at both sides, the consumers of Practo can access best-in-class solutions for safeguarding themselves and building a healthier life\"."
            - generic [ref=e362]:
              - img [ref=e363]
              - generic [ref=e364]:
                - generic [ref=e365]: Mr. Dilip Chenoy Secretary-General
                - img [ref=e367]
                - generic [ref=e368]:
                  - img [ref=e369]
                  - img [ref=e370]
                  - img [ref=e371]
                  - img [ref=e372]
                  - img [ref=e373]
                - generic [ref=e374]: “We believe in Practo’s commitment to providing high-quality healthcare services to society, and in supporting the country’s working professional community. Practo and FICCI management will be working closely on every step"
          - generic [ref=e376]:
            - listitem [ref=e377] [cursor=pointer]:
              - button "• 1" [ref=e378]
            - listitem [ref=e379] [cursor=pointer]:
              - button "• 2" [ref=e380]
            - listitem [ref=e381] [cursor=pointer]:
              - button "• 3" [ref=e382]
      - generic [ref=e383]:
        - img "trust" [ref=e385]
        - img "trust" [ref=e387]
      - generic [ref=e388]:
        - heading "FAQs" [level=2] [ref=e389]
        - generic [ref=e390]:
          - button "Are the corporate benefits plans applicable to employees’ families?" [ref=e391]:
            - generic [ref=e393]: Are the corporate benefits plans applicable to employees’ families?
          - region "Are the corporate benefits plans applicable to employees’ families?":
            - generic [ref=e395]: Yes, Corporate health benefits plans are available for employees as well as their family members - self + 4 adult family members + 2 kids. The employee needs to add his/her dependents on the health plan after activation. The same can be enabled via the family member section on the app’s Plus Membership page. Each adult family member will get a separate login with his/her own phone number.
        - generic [ref=e396]:
          - button "Are Practo doctors who conduct online consultations qualified to consult patients online?" [ref=e397]:
            - generic [ref=e399]: Are Practo doctors who conduct online consultations qualified to consult patients online?
          - region "Are the corporate benefits plans applicable to employees’ families?":
            - generic [ref=e400]:
              - generic [ref=e401]: Practo follows a strict verification process for every doctor providing online service. They are well-qualified doctors and their necessary documents and medical council registration certificates are thoroughly verified. All qualifications are as per the Medical Council of India guidelines. Practo has a soft copy of all degrees of doctors and medical council registration certification in its repository.
              - generic [ref=e402]: "For more details please refer to: https://www.practo.com/bluebook/india"
        - generic [ref=e403]:
          - button "Can I consult a doctor of my choice?" [ref=e404]:
            - generic [ref=e406]: Can I consult a doctor of my choice?
          - region "Are the corporate benefits plans applicable to employees’ families?":
            - generic [ref=e408]: Currently, we auto-allocate the doctor for you. We do show the list of doctors rostered for that day before the consultation. We also offer consultations in 15 vernacular languages to fit everyone's convenience.
        - text: Know more
    - contentinfo [ref=e409]:
      - generic [ref=e410]:
        - generic [ref=e411]:
          - generic [ref=e412]:
            - img "Practo Logo" [ref=e414]
            - paragraph [ref=e415]: Practo is on a mission to make quality healthcare affordable and accessible for over a billion+ Indians.
          - generic [ref=e416]:
            - paragraph [ref=e417]: Quick Links
            - text: Our Services Practo Ecosystem Product Capabilities
          - generic [ref=e418]: Testimonials FAQs
        - generic [ref=e419]:
          - link "Linkedin" [ref=e420] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/practo-technologies-pvt-ltd?utm_source=corporate_LP&utm_medium=website&utm_campaign=organic
            - img "Linkedin" [ref=e421]
          - link "Instagram" [ref=e422] [cursor=pointer]:
            - /url: https://www.instagram.com/practo/?utm_source=corporate_LP&utm_medium=website&utm_campaign=organic
            - img "Instagram" [ref=e423]
          - link "Twitter" [ref=e424] [cursor=pointer]:
            - /url: https://twitter.com/Practo?utm_source=corporate_LP&utm_medium=website&utm_campaign=organic
            - img "Twitter" [ref=e425]
          - link "Facebook" [ref=e426] [cursor=pointer]:
            - /url: https://www.facebook.com/practo/?utm_source=corporate_LP&utm_medium=website&utm_campaign=organic
            - img "Facebook" [ref=e427]
  - img
```

# Test source

```ts
  1  | // const {test,expect} = require('@playwright/test');
  2  | // test('TC_022',async({page})=>{
  3  | //     await page.goto("https://www.practo.com/")
  4  | 
  5  | //     await page.locator('span.nav-interact',{
  6  | //         hasText : 'For Corporates'}).click();
  7  |   
  8  | //     await page.locator('text=Health & Wellness Plans').click();
  9  | //     await page.locator('#name').fill('max')
  10 | //     await page.locator('#organizationName').fill('CTS');
  11 | //     await page.locator('#contactNumber').fill('7878787987878');
  12 | //     await page.locator('#officialEmailId').fill('test@gmail.com');
  13 | //     await page.locator('#organizationSize').click();
  14 | //     await page.locator('select').selectOption({index: 4})
  15 | //     await page.locator("#interestedIn").click();
  16 | //     await page.locator('select').selectOption('Referring someone').click();
  17 | //     const button = page.locator('button[type="submit"]');
  18 | //     await expect(button).toBeDisabled();
  19 | // });
  20 | 
  21 | 
  22 | 
  23 | 
  24 | import { test, expect } from '@playwright/test';
  25 | 
  26 | test('test', async ({ page }) => {
  27 |   await page.goto('https://www.practo.com/');
  28 |   await page.getByText('For Corporates').first().click();
  29 |   await page.getByRole('link', { name: 'Health & Wellness Plans' }).click();
  30 |   await page.goto('https://www.practo.com/plus/corporate');
  31 |   await page.getByRole('textbox', { name: 'Name', exact: true }).click();
  32 |   await page.getByRole('textbox', { name: 'Name', exact: true }).fill('max');
  33 |   await page.getByRole('textbox', { name: 'Organization Name' }).click();
  34 |   await page.getByRole('textbox', { name: 'Name', exact: true }).fill('maxc');
  35 |   await page.getByRole('textbox', { name: 'Organization Name' }).fill('ts');
  36 |   await page.getByRole('textbox', { name: 'Contact Number' }).click();
  37 |   await page.getByRole('textbox', { name: 'Contact Number' }).fill('98989898989898');
  38 |   await page.getByRole('textbox', { name: 'Official Email ID' }).click();
  39 |   await page.getByRole('textbox', { name: 'Official Email ID' }).fill('rhfjbe@gmail.com');
  40 |   await page.locator('#header #organizationSize').selectOption('10001+');
  41 |   await page.locator('#header #interestedIn').selectOption('Referring someone');
  42 |   const button = page.locator('button[type="submit"]');
> 43 |   await expect(button).toBeDisabled();
     |                        ^ Error: expect(locator).toBeDisabled() failed
  44 | });
  45 | 
  46 | 
```