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

        # Wait for the login form and logo to be visible
        expect(page.locator(".login-card")).to_be_visible(timeout=10000)
        expect(page.locator(".logo-section")).to_be_visible()

        # Take a screenshot
        page.screenshot(path="jules-scratch/verification/layout_verification.png")

        print("Screenshot taken successfully.")

    except Exception as e:
        print(f"An error occurred: {e}")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)