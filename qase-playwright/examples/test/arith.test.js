const { add, mul, sub, div } = require('./arith');
const { qase } = require('playwright-qase-reporter/dist/playwright');
const { test, expect } = require('@playwright/test');

test.describe('help', () => {
    test(qase(7, 'open page and check title'), async ({ page }) => {
        await page.goto('https://playwright.dev/');
        expect(await page.title()).toBe(
            'GitHub: Where the world builds software · GitHub'
        );
    });

    test.skip(qase(1, '2 + 3 = 5'), () => {
        expect(add(2, 3)).toBe(5);
    });

    test(qase([2, 3], '3 * 4 = 12'), async () => {
        await new Promise((r) => setTimeout(r, 2000));
        expect(mul(3, 4)).toBe(12);
    });

    test.describe('me', () => {

        test(qase([5, 6], '5 - 6 = -1'), () => {
            expect(sub(5, 6)).toBe(-2);
        });

        test('5 - 6 = -1', () => {
            expect(sub(5, 6)).toBe(-1);
        });
    });

    test('8 / 4 = 2', () => {
        expect(div(8, 4)).toBe(2);
    });

});
