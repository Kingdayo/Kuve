from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Inject CSS to make transitions instant for stable screenshots
    page.add_init_script("""
        const style = document.createElement('style');
        style.innerHTML = `
            *, *::before, *::after {
                transition-duration: 0s !important;
            }
        `;
        document.head.appendChild(style);
    """)

    try:
        page.goto("http://localhost:5173", timeout=60000)

        # Wait for the splash card to get the 'animate-in' class
        splash_card = page.locator(".splash-card")
        expect(splash_card).to_have_class("splash-card animate-in", timeout=10000)

        # Take a screenshot
        page.screenshot(path="jules-scratch/verification/splash_animation_verification.png")

        print("Screenshot taken successfully.")

    except Exception as e:
        print(f"An error occurred: {e}")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)