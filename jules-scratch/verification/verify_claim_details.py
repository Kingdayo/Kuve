from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:5173")
        page.get_by_role("button", name="Login", exact=True).click()
        page.wait_for_load_state("networkidle")
        page.get_by_label("Email").click()
        page.get_by_label("Email").fill("test@example.com")
        page.get_by_label("Password").click()
        page.get_by_label("Password").fill("Password123!")
        page.locator("form").get_by_role("button", name="Login").click()
        page.wait_for_selector(".sidebar")
        page.locator(".sidebar").get_by_role("link", name="Claims").click()
        page.wait_for_selector(".claims-table")
        page.get_by_text("AKU-2025-627").click()
        page.wait_for_selector(".claim-details-page")
        page.screenshot(path="jules-scratch/verification/verification.png")
        browser.close()

run()