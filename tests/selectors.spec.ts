import { test, expect } from "@playwright/test";

test("selector Demo", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.pause();
  //using object property
  await page.click("id=user-name");
  //await page.locator("id = user-name").fill("Abir");
  await page.locator('[id="user-name"]').fill("Testing");
  //css selector
  await page.locator("#login-button").click();
  await page.pause();
  //using xpath
  //await page.locator('xpath=//input[@name="password').fill("Friday");
  await page.locator('//input[@name="password"]').fill("Friday");
  //using Text
  await page.locator("text=LOGIN").click();
});
