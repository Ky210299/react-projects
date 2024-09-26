// @ts-check
import { test, expect } from '@playwright/test';
import {CAT_IMAGE_PREFIX} from '../src/customHook'

const LH = 'localhost:5173'

test('has title', async ({ page }) => {
  await page.goto(LH);

  const text =  page.getByRole('paragraph');
  const image =  page.getByRole('img');

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute('src');


  expect(textContent?.length).toBeGreaterThan(0);
  expect(imageSrc?.startsWith(CAT_IMAGE_PREFIX)).toBeTruthy();


});
