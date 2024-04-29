import { JSDOM } from 'jsdom';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';


export async function GET()  {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.365scores.com/es-mx/football/costa-rica/liga-fpd/league/5056/standings', { waitUntil: 'networkidle2' });

    const tableData = await page.evaluate(() => {
        const tableRows = Array.from(document.querySelectorAll('.table tr'));
        return tableRows.map(row => {
            const iconElement = row.querySelector('img');
            const iconUrl = iconElement ? iconElement.getAttribute('data-src') : null;
            const columns = Array.from(row.querySelectorAll('td, th')).map(column => column.textContent!.trim());
            return { iconUrl, columns };
        });
    });

    await browser.close();

    if (tableData) {
        return NextResponse.json({ tableData });
    } else {
        return new Response('Información no encontrada', { status: 500 });
    }
}