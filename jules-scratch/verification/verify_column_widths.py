from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Inject CSS to disable animations
    page.add_init_script("""
        const style = document.createElement('style');
        style.innerHTML = `
            *, *::before, *::after {
                animation-duration: 0s !important;
                transition-duration: 0s !important;
            }
        `;
        document.head.appendChild(style);
    """)

    try:
        page.goto("http://localhost:5173", timeout=60000)

        # Explicitly wait for the splash screen container
        page.wait_for_selector(".splash-container", timeout=15000)

        # Click "Login" on the splash screen
        page.locator("button.splash-login-btn").click()

        # Wait for the login section to be visible
        expect(page.locator(".login-section")).to_be_visible(timeout=10000)

        # Take a screenshot
        page.screenshot(path="jules-scratch/verification/column_widths_verification.png")

        print("Screenshot taken successfully.")

    except Exception as e:
        print(f"An error occurred: {e}")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)