from playwright.sync_api import sync_playwright, expect

def run_verification(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        # Disable animations for stability
        page.add_init_script("""
            const style = document.createElement('style');
            style.innerHTML = `
                *, *::before, *::after {
                    transition-duration: 0s !important;
                    animation-duration: 0s !important;
                }
            `;
            document.head.appendChild(style);
        """)

        page.goto("http://localhost:5173/")

        # Handle login process to get to the dashboard
        page.get_by_role("button", name="Login").click()

        # Wait for the form to be visible
        form = page.locator('.login-card')
        expect(form).to_be_visible()

        page.locator('input#email').fill('test@example.com')
        page.locator('input#password').fill('Password123!')
        page.locator("form").get_by_role("button", name="Login").click()

        # Wait for dashboard to load
        dashboard = page.locator('.dashboard')
        expect(dashboard).to_be_visible()

        # Set a large viewport to capture the entire dashboard
        page.set_viewport_size({"width": 1920, "height": 1200})

        # Wait for charts to render
        page.wait_for_timeout(1000)

        page.screenshot(path="/app/jules-scratch/verification/verification.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run_verification(playwright)