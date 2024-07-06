import { MarkedProps, MarkerColors, getMarkerColor, hexToRgba } from "./../../leappaper/pageElements/Marked";



export default function BdavMarked(props: MarkedProps) {
    const markerColors: MarkerColors = {
        blue: "#00A7FF",
        green: "#00ff41",
        orange: "#FF9600",
        red: "#FF0000",
        yellow: "#FFFF00"
    }

    const bgColor = getMarkerColor(
        markerColors,
        markerColors.yellow,
        props
    );

    return (
        <span
            style={{
                backgroundColor: hexToRgba(bgColor, 0.5)
            }}
            className="rounded-[0.225rem] px-0.5"
        >
            {props.children}
        </ span>
    );

}