from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Navigate to the app
    page.goto("http://localhost:5173/")

    # Click the main "Login" button on the splash screen
    page.get_by_role("button", name="Login").first.click()

    # Wait for the login form to appear
    expect(page.get_by_label("Email")).to_be_visible()

    # Fill in the login form
    page.get_by_label("Email").fill("test@example.com")
    page.get_by_label("Password").fill("password123")

    # Click the login button in the form
    page.get_by_role("button", name="Login").nth(1).click()

    # Wait for the dashboard to load by looking for the header
    expect(page.get_by_role("heading", name="Dashboard Overview")).to_be_visible()

    # Take the screenshot
    page.screenshot(path="/app/jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)