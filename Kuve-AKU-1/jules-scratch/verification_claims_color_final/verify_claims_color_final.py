from playwright.sync_api import sync_playwright, Page, expect
import time

def verify_claims_color_final(page: Page):
    """
    This script verifies the color changes on the Claims Management page.
    """
    # 1. Navigate to the app.
    page.goto("http://localhost:5173")

    # 2. Go through the login process.
    page.get_by_role("button", name="Login").click()
    expect(page.get_by_text("Welcome Back")).to_be_visible(timeout=10000)
    page.get_by_label("Email").fill("test@example.com")
    page.get_by_label("Password").fill("Password123!")
    page.locator('form').get_by_role('button', name='Login').click()

    # 3. Wait for the dashboard and click on the "Claims" navigation item.
    expect(page.locator('h1:has-text("Dashboard Overview")')).to_be_visible(timeout=15000)
    page.get_by_role("link", name="Claims").click()

    # 4. Assert: Wait for the Claims Management header to be visible.
    claims_header = page.locator('h1:has-text("Claims Management")')
    expect(claims_header).to_be_visible(timeout=10000)

    # 5. Wait for content to settle.
    page.wait_for_timeout(1000)

    # 6. Screenshot: Capture the header for visual verification.
    header_element = page.locator("header.header")
    header_element.screenshot(path="jules-scratch/verification_claims_color_final/claims-color-verification-final.png")

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        # Inject CSS to disable animations
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
            verify_claims_color_final(page)
            print("Final verification script for claims color change ran successfully.")
        except Exception as e:
            print(f"An error occurred: {e}")
            page.screenshot(path="jules-scratch/verification_claims_color_final/error-final.png")
        finally:
            browser.close()

if __name__ == "__main__":
    main()