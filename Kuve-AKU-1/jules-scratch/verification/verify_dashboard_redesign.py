from playwright.sync_api import sync_playwright, Page, expect
import time

def verify_dashboard(page: Page):
    """
    This script verifies the new dashboard design by navigating through the
    splash screen and login form.
    """
    # 1. Navigate to the app. Default Vite port is 5173.
    page.goto("http://localhost:5173")

    # 2. Wait for the splash screen and click the "Login" button.
    splash_login_button = page.get_by_role("button", name="Login")
    expect(splash_login_button).to_be_visible(timeout=10000)
    splash_login_button.click()

    # 3. Wait for the login form to appear.
    expect(page.get_by_text("Welcome Back")).to_be_visible(timeout=10000)

    # 4. Fill in dummy credentials and click the form's login button.
    page.get_by_label("Email").fill("test@example.com")
    page.get_by_label("Password").fill("Password123!")
    form_login_button = page.locator('form').get_by_role('button', name='Login')
    form_login_button.click()

    # 5. Assert: Wait for the dashboard header to be visible.
    # Use a more robust locator for the header.
    dashboard_header = page.locator('h1:has-text("Dashboard Overview")')
    expect(dashboard_header).to_be_visible(timeout=15000)

    # 6. Wait for animations and content to settle.
    page.wait_for_timeout(2000)

    # 7. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/dashboard-redesign-final.png")

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        # Inject CSS to disable animations for stable screenshots
        page.add_init_script("""
            const css = `
                *, *::before, *::after {
                    transition-duration: 0s !important;
                    animation-duration: 0s !important;
                }
            `;
            const style = document.createElement('style');
            style.type = 'text/css';
            style.appendChild(document.createTextNode(css));
            document.head.appendChild(style);
        """)
        try:
            verify_dashboard(page)
            print("Verification script ran successfully.")
        except Exception as e:
            print(f"An error occurred: {e}")
            page.screenshot(path="jules-scratch/verification/error-final.png")
        finally:
            browser.close()

if __name__ == "__main__":
    main()