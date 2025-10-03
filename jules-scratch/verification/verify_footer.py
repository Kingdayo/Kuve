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

        # Click "Get Started" to go to the sign-up view
        page.locator("text=Get Started").click()

        # Wait for the sign-up form to be visible
        expect(page.locator("text=Create Account")).to_be_visible(timeout=10000)

        # Verify the footer is visible
        expect(page.locator("footer.footer")).to_be_visible()

        # Take a screenshot
        page.screenshot(path="jules-scratch/verification/footer_verification.png")

        print("Screenshot taken successfully.")

    except Exception as e:
        print(f"An error occurred: {e}")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)