import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    # Define an absolute path for the output directory
    output_dir = "/app/jules-scratch/verification/"
    os.makedirs(output_dir, exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Inject CSS to disable animations for stable screenshots
        await page.add_init_script("""
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

        # Go to the app
        print("Navigating to the application...")
        await page.goto("http://localhost:5173/")

        # Click the "Login" button on the splash screen
        print("Clicking 'Login' on the splash screen...")
        await page.wait_for_selector("button.splash-login-btn")
        await page.click("button.splash-login-btn")

        # Wait for the login card to be visible
        print("Waiting for the login card to appear...")
        await page.wait_for_selector(".splash-card.animate-in")
        print("Login card is visible. Waiting for styles to apply...")

        # Add a delay to ensure styles are fully rendered before screenshot
        await page.wait_for_timeout(500)

        # Take a screenshot of the login view
        login_screenshot_path = os.path.join(output_dir, "login_view.png")
        print(f"Taking screenshot of login view at: {login_screenshot_path}")
        await page.screenshot(path=login_screenshot_path)

        # Switch to the sign-up view
        print("Switching to the sign-up view...")
        await page.click("button.tab-button:not(.active)")

        # Wait for the view to update
        await page.wait_for_timeout(500)
        print("Sign-up view should be active.")

        # Take a screenshot of the sign-up view
        signup_screenshot_path = os.path.join(output_dir, "signup_view.png")
        print(f"Taking screenshot of sign-up view at: {signup_screenshot_path}")
        await page.screenshot(path=signup_screenshot_path)

        print("Script finished successfully.")
        await browser.close()

asyncio.run(main())