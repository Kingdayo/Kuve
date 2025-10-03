from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:5173/")

    # Wait for a fixed time to allow animations to complete
    page.wait_for_timeout(2000)

    page.screenshot(path="jules-scratch/verification/splash_screen.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)