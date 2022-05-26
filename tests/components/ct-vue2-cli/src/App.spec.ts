import { test, expect } from '@playwright/experimental-ct-vue2'

import App from './App.vue'

test.use({ viewport: { width: 500, height: 500 } })

test('should be visible', async ({ mount, page }) => {
  const component = await mount(App, {})
  const texts = await component.allInnerTexts()
  expect(texts).not.toBeNull()
  await expect(component).toContainText('Test text')
})

test('should test screenshot', async ({ mount, page }) => {
  const component = await mount(App, {})
  await expect(component).toHaveScreenshot()
})

test('should match screenshot', async ({ mount, page }) => {
  const component = await mount(App, {})
  await expect(await component.screenshot()).toMatchSnapshot('app.png')
})
