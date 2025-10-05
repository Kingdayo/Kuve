from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Disable animations to prevent rendering issues
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
        # Navigate to the splash screen
        page.goto("http://localhost:5173", wait_until="networkidle")

        # Wait for the main container to be visible
        page.wait_for_selector(".splash-container")

        # Take a screenshot to verify the layout
        page.screenshot(path="Kuve-AKU-1/jules-scratch/verification/verification.png")

        print("Screenshot taken successfully.")
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)