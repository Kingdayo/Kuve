import re
from playwright.sync_api import sync_playwright, Page, expect

def verify_dashboard_layout(page: Page):
    """
    This script verifies the overall layout of the dashboard.
    """
    # 1. Navigate to the app.
    page.goto("http://localhost:5173/")

    # 2. Login to the application.
    page.get_by_role("button", name="Login").click()
    expect(page.get_by_placeholder("name@example.com")).to_be_visible()
    page.get_by_placeholder("name@example.com").fill("testuser@example.com")
    page.get_by_label("Password").fill("password123")
    page.locator('form').get_by_role('button', name='Login').click()

    # 3. Wait for the main dashboard content to be visible.
    dashboard_locator = page.locator(".main-content-dashboard")
    expect(dashboard_locator).to_be_visible(timeout=10000)

    # Wait for charts to render to avoid blank areas
    page.wait_for_timeout(2000)

    # 4. Take a screenshot of the entire page.
    page.screenshot(path="jules-scratch/verification/dashboard_layout.png", full_page=True)

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Set a larger viewport height to capture the full page content
        page = browser.new_page(viewport={'width': 1920, 'height': 4000})
        # Disable animations for stable screenshots
        page.add_init_script("""
            const style = document.createElement('style');
            style.innerHTML = `
                *, *::before, *::after {
                    transition-duration: 0s !important;
                    animation-duration: 0s !importan;
                }
            `;
            document.head.appendChild(style);
        """)
        try:
            verify_dashboard_layout(page)
            print("Verification script ran successfully.")
        except Exception as e:
            print(f"An error occurred: {e}")
            page.screenshot(path="jules-scratch/verification/error_screenshot.png")
        finally:
            browser.close()

if __name__ == "__main__":
    main()