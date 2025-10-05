import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Inject CSS to disable animations
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

        await page.goto("http://localhost:5173/")

        # Wait for the main card to be visible to ensure the page has loaded
        await page.wait_for_selector(".splash-card")

        # A small extra delay can sometimes help ensure everything is rendered
        await page.wait_for_timeout(500)

        await page.screenshot(path="jules-scratch/verification/verification.png")
        await browser.close()

asyncio.run(main())