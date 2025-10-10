from playwright.sync_api import sync_playwright, Page, expect

def run_verification(page: Page):
    """
    Verifies the top-left alignment of the Claims Management view.
    """
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

    # 1. Navigate to the app and handle splash screen
    page.goto("http://localhost:5173/")

    # Wait for the splash screen card to be visible and stable
    expect(page.locator(".splash-card")).to_be_visible()

    # Click the login button on the splash screen
    page.get_by_role("button", name="Login").click()

    # 2. Log in
    # Wait for the login view to appear by checking for the "Welcome Back" heading
    expect(page.get_by_role("heading", name="Welcome Back")).to_be_visible()

    # Now that the view is visible, fill in the form
    page.get_by_placeholder("name@example.com").fill("test@user.com")
    page.get_by_placeholder("••••••••••").fill("Str0ngP@ssw0rd!")

    # Use a more specific locator for the login button inside the form
    page.locator("form").get_by_role("button", name="Login").click()

    # 3. Navigate to Claims view
    # Wait for the main dashboard content to be visible
    expect(page.locator(".main-content-dashboard")).to_be_visible()

    # Click the "Claims" link in the sidebar
    page.get_by_role("link", name="Claims").click()

    # 4. Verify alignment and take screenshot
    # Wait for the claims management view to be loaded
    claims_view = page.locator(".claims-management")
    expect(claims_view).to_be_visible()

    # A small timeout to ensure everything has rendered after the view switch
    page.wait_for_timeout(500)

    page.screenshot(path="jules-scratch/verification/claims_view_alignment.png", full_page=True)
    print("Screenshot taken. Verification complete.")

if __name__ == "__main__":
    with sync_playwright() as p:
        # Launch browser headlessly
        browser = p.chromium.launch(headless=True)
        # Set a consistent viewport for predictable results
        page = browser.new_page(viewport={"width": 1280, "height": 720})
        try:
            run_verification(page)
        except Exception as e:
            print(f"Verification script failed: {e}")
            # Take a screenshot on error to help with debugging
            page.screenshot(path="jules-scratch/verification/error.png")
        finally:
            browser.close()