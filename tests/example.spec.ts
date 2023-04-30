import { test, expect } from "@playwright/test";

test("has title", async ({}) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

//hook
let context;
let page;
test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  await context.tracing.start({
    snapshots: true,
    screenshots: true,
  });
  page = await context.newPage();
});

test.afterAll(async () => {
  await context.tracing.stop({
    path: "trace.zip",
  });
});

test("get started link", async ({}) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
