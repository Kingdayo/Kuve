from playwright.sync_api import sync_playwright, Page, expect
import time

def verify_interactive_charts(page: Page):
    """
    This script verifies the new interactive charts on the Dashboard Overview page.
    """
    # 1. Navigate to the app.
    page.goto("http://localhost:5173")

    # 2. Go through the login process.
    page.get_by_role("button", name="Login").click()
    expect(page.get_by_text("Welcome Back")).to_be_visible(timeout=10000)
    page.get_by_label("Email").fill("test@example.com")
    page.get_by_label("Password").fill("Password123!")
    page.locator('form').get_by_role('button', name='Login').click()

    # 3. Wait for the dashboard to load.
    dashboard_header = page.locator('h1:has-text("Dashboard Overview")')
    expect(dashboard_header).to_be_visible(timeout=15000)
    page.wait_for_timeout(2000) # Wait for chart animations

    # 4. Verify Line Chart Interactivity
    line_chart_container = page.locator('.recharts-wrapper').first
    # Hover over a data point to trigger the tooltip
    line_chart_container.hover(position={'x': 200, 'y': 100})
    page.wait_for_timeout(500) # Wait for tooltip to appear
    page.screenshot(path="jules-scratch/interactive_charts_verification/line-chart-interactive.png")

    # 5. Verify Pie Chart Interactivity
    pie_chart_container = page.locator('.recharts-wrapper').last
    # Hover over a slice to trigger the active shape
    pie_chart_container.hover(position={'x': 180, 'y': 80})
    page.wait_for_timeout(500)
    page.screenshot(path="jules-scratch/interactive_charts_verification/pie-chart-interactive.png")


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})
        try:
            verify_interactive_charts(page)
            print("Interactive charts verification script ran successfully.")
        except Exception as e:
            print(f"An error occurred: {e}")
            page.screenshot(path="jules-scratch/interactive_charts_verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    main()