from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Log in to the application
    page.goto("http://localhost:5173")
    page.wait_for_load_state("networkidle")
    page.get_by_role("button", name="Login").first.click()
    page.get_by_label("Email").fill("test@example.com")
    page.get_by_label("Password").fill("password")
    page.locator("form").get_by_role("button", name="Login").click()

    # Navigate to the claims management page
    page.get_by_role("link", name="Claims").click()
    page.wait_for_selector(".claims-table-container")

    # Click the "Needs Review" tab to ensure the button is visible
    page.get_by_role("button", name="Needs Review").click()

    # Click the first "Review" button
    page.get_by_role("button", name="Review").first.click()

    # Wait for the modal to appear
    page.wait_for_selector(".modal-overlay")

    # Take a screenshot of the modal
    page.locator(".modal-content").screenshot(path="jules-scratch/verification/review_modal.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)