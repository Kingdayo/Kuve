import re
from playwright.sync_api import sync_playwright, Page, expect
import os

def main():
    """
    This script verifies that the custom scrollbar is styled correctly on the
    sign-up form by setting a smaller viewport to ensure overflow.
    """
    verification_dir = "verification_output"
    os.makedirs(verification_dir, exist_ok=True)

    with sync_playwright() as p:
        try:
            browser = p.chromium.launch(headless=True)
        except Exception as e:
            print(f"ERROR: Failed to launch browser. Details: {e}")
            return

        page = browser.new_page()
        # Set a smaller viewport to ensure the content overflows and scrollbar appears
        page.set_viewport_size({"width": 1280, "height": 700})

        try:
            # 1. Navigate to the app and go to the auth screen.
            page.goto("http://localhost:5173/")
            expect(page.locator(".splash-title")).to_be_visible()

            # Click "Get Started" to navigate to the Sign Up form view
            page.get_by_role("button", name="Get Started").click()

            # Wait for the form to animate in
            auth_card = page.locator(".splash-card")
            expect(auth_card).to_have_class(re.compile(r"animate-in"))
            page.wait_for_timeout(1000) # Wait for animations to settle

            # 2. Capture a screenshot of the Sign Up card to verify the scrollbar.
            signup_card_screenshot_path = os.path.join(verification_dir, "styled_scrollbar.png")
            # Take a screenshot of the entire card to ensure the scrollbar is visible
            auth_card.screenshot(path=signup_card_screenshot_path)
            print(f"Screenshot of sign-up form with scrollbar saved to {signup_card_screenshot_path}")

        except Exception as e:
            print(f"An error occurred during script execution: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    main()