import { test, expect } from '@playwright/test'

test('login flow and see dashboard', async ({ page }) => {
  await page.goto('/')
  await page.getByPlaceholder('Username').fill('carlos')
  await page.getByPlaceholder('Password').fill('1234')
  await page.getByRole('button', { name: 'Login' }).click()
  await page.waitForURL('/dashboard')
  await expect(page.getByRole('heading', { name: /Bienvenido/ })).toBeVisible()
})