// add module
import { test, expect } from "@playwright/test";

test("fist test", async ({ page }) => {
  await page.goto("https://www.mazecare.com/");
  await expect(page).toHaveTitle(
    "Digital Healthcare Transformation | Mazecare"
  );
});
