import LeappaperPoc from "./src/documents/leappaperPoc/LeappaperPoc";
import PageFormats from "./src/leappaper/pageFormats";
import { LeappaperConfig } from "./src/leappaper/types";
import { bdavTheme } from "./src/themes/themes";


/*
>>> Guides

>> How to render
1. Make sure you have a puppeteer browser installed. If not, follow the instructions on the GitHub Wiki on the leappaper repo
2. If necesarry, change the browser executable path in the render.js file
3. Start the developement server with `npm run dev`
4. If the address is not `http://localhost:5173/`, change the setting in the render.js file
5. Set `render: true` in the leappapger.config.tsx file
6. Open another terminal (and let the developement server running)
7. Run `npm run render`
8. Done. You can find the rendered pdf in the `pdfs` directory

*/

const config: LeappaperConfig = {
    theme: bdavTheme,
    document: <LeappaperPoc/>,
    format: PageFormats.A4,
    defaultPagePadding: "2cm",
    render: false
}
export default config;


