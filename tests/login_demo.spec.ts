import { test, expect, chromium } from "@playwright/test";

test("loginTest", async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://company-comunication-eight.vercel.app/");
  await page.getByLabel("Email address").click();
  await page.getByLabel("Email address").fill("rubairahman1@gmail.com");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("12345");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.goto("https://company-comunication-eight.vercel.app/dashboard");
  await page.pause();
  await page
    .getByRole("navigation")
    .filter({ hasText: "Log In As" })
    .getByRole("button")
  
    .click();
  await page.getByRole("button", { name: "LogOut" }).click();

  // ---------------------
  await context.close();
  await browser.close();
});
