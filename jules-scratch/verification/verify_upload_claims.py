from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Give the server a moment to start
    time.sleep(10)

    page.goto("http://localhost:5173/")

    # Wait for the splash screen to be visible
    page.wait_for_selector('.splash-card', state='visible')

    # Click the "Get Started" button
    page.click('text=Get Started')

    # Wait for the login form to be visible
    page.wait_for_selector('form', state='visible')

    # Fill in the email and password
    page.fill('input[type="email"]', 'testuser@akuvera.com')
    page.fill('input[type="password"]', 'password123')

    # Click the login button
    page.click('button[type="submit"]')

    # Wait for the dashboard to load
    page.wait_for_selector('.dashboard-view', state='visible')

    # Click the "Claims" link in the sidebar
    page.click('text=Claims')

    # Wait for the "Upload Claims" button to be visible
    page.wait_for_selector('.upload-button', state='visible')

    # Click the "Upload Claims" button
    page.click('.upload-button')

    # Wait for the modal to be visible
    page.wait_for_selector('.modal-overlay', state='visible')

    # Take a screenshot of the modal
    page.screenshot(path="jules-scratch/verification/verification.png", full_page=True)

    browser.close()

with sync_playwright() as playwright:
    run(playwright)