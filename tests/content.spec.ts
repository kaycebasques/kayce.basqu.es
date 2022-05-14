import {test, expect} from '@playwright/test';
import {readdirSync, lstatSync} from 'fs';

const getPages = (dir, results = []) => {
  const items = readdirSync(dir);
  for (const item of items) {
    const path = `${dir}/${item}`;
    if (lstatSync(path).isDirectory()) {
      getPages(path, results);
    } else if (item.endsWith('.html')) {
      results.push(path);
    }
  }
  return results;
};

const root = `${__dirname}/../_site`;
let paths = getPages(root);
paths = paths.map(path => path.replace(root, ''));

for (const path of paths) {
  test(`${path} has a descriptive title`, async ({ page }) => {
    await page.goto(path);
    const title = page.locator('head title');
    await expect(title).not.toBeEmpty();
    const expectedContent = await page.locator('main h1').textContent();
    await expect(title).toHaveText(expectedContent);
  });
}