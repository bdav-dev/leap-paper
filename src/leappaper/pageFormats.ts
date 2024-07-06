import { PageFormat } from "./types";


type PageFormatsType = {
    [key: string]: PageFormat
}

const PageFormats: PageFormatsType = {
    A4: {
        width: "21.0cm",
        height: "29.7cm"
    }
}

export default PageFormats;