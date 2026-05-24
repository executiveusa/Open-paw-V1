import { test, expect } from '@playwright/test';

test.describe('public site', () => {
  test('landing page renders hero', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'Open-source software for animal welfare teams'
    );
  });

  test('landing page has Download Free CTA', async ({ page }) => {
    await page.goto('/');
    const cta = page.getByRole('link', { name: /Download Free/i }).first();
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute('href', '/download');
  });

  test('landing page has View GitHub CTA', async ({ page }) => {
    await page.goto('/');
    const gh = page.getByRole('link', { name: /View GitHub/i }).first();
    await expect(gh).toBeVisible();
  });

  test('blog index renders posts', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.getByRole('heading', { name: /Field Notes/i })).toBeVisible();
    const articles = page.getByRole('article');
    await expect(articles).toHaveCount(10);
  });

  test('blog post renders', async ({ page }) => {
    await page.goto('/blog/why-animal-welfare-software-should-be-local-first');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Local-First');
  });

  test('funding radar page renders', async ({ page }) => {
    await page.goto('/funding');
    await expect(page.getByRole('heading', { name: /Funding Radar/i })).toBeVisible();
  });

  test('security page renders', async ({ page }) => {
    await page.goto('/security');
    await expect(page.getByRole('heading', { name: /Security/i })).toBeVisible();
  });

  test('download page renders', async ({ page }) => {
    await page.goto('/download');
    await expect(page.getByRole('heading', { name: /Download/i })).toBeVisible();
  });
});

test.describe('auth flow', () => {
  test('login page renders', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByRole('heading', { name: /Welcome back/i })).toBeVisible();
    await expect(page.getByText(/Demo mode/i)).toBeVisible();
  });

  test('login routes to /app dashboard', async ({ page }) => {
    await page.goto('/login');
    await page.getByRole('button', { name: /Continue to Dashboard/i }).click();
    await page.waitForURL('/app');
    await expect(page.getByRole('heading', { name: /Overview/i })).toBeVisible();
  });
});

test.describe('dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/app');
  });

  test('dashboard renders nav', async ({ page }) => {
    await expect(page.getByRole('navigation', { name: /Dashboard navigation/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Animals/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Funding Radar/i })).toBeVisible();
  });

  test('dashboard shows stat cards', async ({ page }) => {
    await expect(page.getByText(/Animals in Care/i)).toBeVisible();
    await expect(page.getByText(/Adoptable/i)).toBeVisible();
  });

  test('animals page renders', async ({ page }) => {
    await page.goto('/app/animals');
    await expect(page.getByRole('heading', { name: /Animals/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Luna/i })).toBeVisible();
  });

  test('lost-found page renders', async ({ page }) => {
    await page.goto('/app/lost-found');
    await expect(page.getByRole('heading', { name: /Lost & Found/i })).toBeVisible();
  });
});
