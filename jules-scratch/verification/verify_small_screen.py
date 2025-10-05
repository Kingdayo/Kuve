from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page(viewport={'width': 500, 'height': 700})

    page.goto("http://localhost:5173")

    # Navigate to the Sign Up form
    page.get_by_role("button", name="Get Started").click()

    # Wait for the form to be visible
    expect(page.locator('.login-form')).to_be_visible()

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)