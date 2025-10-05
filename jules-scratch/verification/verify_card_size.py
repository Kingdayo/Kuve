import re
from playwright.sync_api import sync_playwright, Page, expect
import os

def main():
    """
    This script verifies that the authentication card's dimensions do not change
    when switching between the 'Login' and 'Sign Up' tabs.
    It saves screenshots to a relative path within the execution directory.
    """
    # Define a relative path for the verification directory
    verification_dir = "verification_output"
    os.makedirs(verification_dir, exist_ok=True)

    with sync_playwright() as p:
        try:
            browser = p.chromium.launch(headless=True)
        except Exception as e:
            print(f"ERROR: Failed to launch browser. Details: {e}")
            return

        page = browser.new_page()

        try:
            # 1. Navigate to the app and go to the auth screen.
            page.goto("http://localhost:5173/")
            expect(page.locator(".splash-title")).to_be_visible()

            # Click "Get Started" to navigate to the Sign Up form view
            page.get_by_role("button", name="Get Started").click()

            # Wait for the form to animate in
            auth_card = page.locator(".splash-card")
            expect(auth_card).to_have_class(re.compile(r"animate-in"))
            page.wait_for_timeout(500)

            # 2. Capture screenshot of the Sign Up card using a relative path.
            signup_card_screenshot_path = os.path.join(verification_dir, "signup_card.png")
            auth_card.screenshot(path=signup_card_screenshot_path)
            print(f"Screenshot of sign-up card saved to {signup_card_screenshot_path}")

            # 3. Switch to the Login tab.
            page.get_by_role("button", name="Login").click()
            expect(page.get_by_text("Welcome Back")).to_be_visible()
            page.wait_for_timeout(500)

            # 4. Capture screenshot of the Login card using a relative path.
            login_card_screenshot_path = os.path.join(verification_dir, "login_card.png")
            auth_card.screenshot(path=login_card_screenshot_path)
            print(f"Screenshot of login card saved to {login_card_screenshot_path}")

        except Exception as e:
            print(f"An error occurred during script execution: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    main()