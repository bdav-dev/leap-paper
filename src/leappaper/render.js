import puppeteer from "puppeteer-core";

const renderConfig = {
    browserExecutablePath: "chrome/linux-125.0.6422.141/chrome-linux64/chrome",
    pdfFileName: () => `leap-paper-${
        new Date()
            .toLocaleString('de-DE')
            .replaceAll(".", '-')
            .replaceAll(" ", '')
            .replaceAll(",", '-')
            .replaceAll(":", '-') // not clean but it works...
        }`,
    devServerAddress: "http://localhost:5173",
    browserPdfFormat: "A4"
}

export function renderDocument() {
    let pdfFileName = (
        typeof renderConfig.pdfFileName == "function"
            ? renderConfig.pdfFileName()
            : renderConfig.pdfFileName
    );

    if (!pdfFileName.toLowerCase().endsWith(".pdf")) {
        pdfFileName += ".pdf"
    }

    (async () => {
        const browser = await puppeteer.launch({
            executablePath: renderConfig.browserExecutablePath
        });

        const page = await browser.newPage();

        await page.goto(renderConfig.devServerAddress, { waitUntil: "domcontentloaded" });
        await page.pdf({
            path: `pdfs/${pdfFileName}`,
            format: renderConfig.browserPdfFormat,
            printBackground: true
        });

        await browser.close();
    })();
}

renderDocument();