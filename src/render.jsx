import puppeteer from "puppeteer-core";
import { renderToString } from "react-dom/server";

import Document from './Document';

(async () => {
    const browser = await puppeteer.launch({
        executablePath: 'chrome/linux-125.0.6422.141/chrome-linux64/chrome'
    });

    const page = await browser.newPage();
    
    const doc = renderToString(<Document/>);

    await page.setContent(doc, {
        waitUntil: "domcontentloaded"
    });

    await page.pdf({
        path: 'pdfs/firstexample.pdf',
        format: 'A4',
        printBackground: true
    });

    await browser.close();
})();