import re
from playwright.sync_api import sync_playwright, Page, expect

def run_tests(page: Page):
    # 1. Navigate to the app and login
    page.goto("http://localhost:5173/")

    # Click login on splash screen
    page.get_by_role("button", name="Login").first.click()

    # Fill and submit login form
    page.get_by_label("Email").fill("test@example.com")
    page.get_by_label("Password").fill("Password123!")
    page.locator("form").get_by_role("button", name="Login").click()

    # Wait for dashboard to load
    expect(page.get_by_role("heading", name="Dashboard Overview")).to_be_visible()

    # Go to claims page
    page.get_by_role("link", name="Claims").click()
    expect(page.get_by_role("heading", name="Claims Management")).to_be_visible()

    # 2. Verify that clicking a claim and going back does not cause an error
    page.get_by_text("AKU-2025-627").first.click()
    expect(page.get_by_text("AKU-2025-627")).to_be_visible()
    page.get_by_role("button", name="Back").click()
    expect(page.get_by_role("heading", name="Claims Management")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/01_claims_page_after_back.png")


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        run_tests(page)
        browser.close()

if __name__ == "__main__":
    main()