import re
from playwright.sync_api import Page, expect
import os

def test_dashboard_renders_charts_after_login(page: Page):
    """
    This test verifies that a user can log in and see the dashboard with its charts.
    It saves the screenshot to a predictable absolute path to avoid file system issues.
    """
    # 1. Arrange: Go to the application's root URL.
    # The dev server is running on port 5174.
    page.goto("http://localhost:5174/")

    # 2. Act: Navigate through the login process.
    # Use a reliable selector for the splash screen login button and click it.
    page.locator(".splash-login-btn").click()

    # Wait for the login form to be visible.
    login_card = page.locator(".login-card")
    expect(login_card).to_be_visible()

    # Fill in the email and password fields.
    page.get_by_label("Email").fill("test@example.com")
    page.get_by_label("Password").fill("Password123!")

    # Click the final 'Login' button on the form.
    page.locator('form').get_by_role('button', name='Login').click()

    # 3. Assert: Check for the main dashboard container.
    dashboard_container = page.locator(".dashboard")
    expect(dashboard_container).to_be_visible(timeout=5000)

    # 4. Assert: Check for the presence of the charts.
    line_chart_title = page.get_by_role("heading", name="AI Success Rate Over Time")
    pie_chart_title = page.get_by_role("heading", name="Denial Types Distribution")

    expect(line_chart_title).to_be_visible()
    expect(pie_chart_title).to_be_visible()

    # 5. Wait for charts to animate and render.
    page.wait_for_timeout(1000)

    # 6. Screenshot: Save the screenshot to a reliable absolute path.
    screenshot_path = "/app/Kuve-AKU-1/jules-scratch/verification/verification.png"
    page.screenshot(path=screenshot_path)