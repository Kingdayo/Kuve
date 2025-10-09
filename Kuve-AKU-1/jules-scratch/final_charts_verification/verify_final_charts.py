from playwright.sync_api import sync_playwright, Page, expect
import time

def verify_final_charts(page: Page):
    """
    This script verifies the final design of the interactive charts on the Dashboard Overview page.
    """
    # 1. Navigate to the app.
    page.goto("http://localhost:5173", timeout=60000)

    # 2. Go through the login process.
    page.get_by_role("button", name="Login").click()
    expect(page.get_by_text("Welcome Back")).to_be_visible(timeout=10000)
    page.get_by_label("Email").fill("test@example.com")
    page.get_by_label("Password").fill("Password123!")
    page.locator('form').get_by_role('button', name='Login').click()

    # 3. Wait for the dashboard to load.
    dashboard_header = page.locator('h1:has-text("Dashboard Overview")')
    expect(dashboard_header).to_be_visible(timeout=15000)
    page.wait_for_timeout(2000) # Wait for chart animations to complete

    # 4. Take a screenshot of the entire page.
    page.screenshot(path="jules-scratch/final_charts_verification/final-charts-verification.png", full_page=True)

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 1080})
        try:
            verify_final_charts(page)
            print("Final charts verification script ran successfully.")
        except Exception as e:
            print(f"An error occurred: {e}")
            page.screenshot(path="jules-scratch/final_charts_verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    main()