import { MarkedProps, MarkerColors, getMarkerColor, hexToRgba } from "../../pageElements/Marked";



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
            className="relative z-10"
        >
            {props.children}
            <div
                style={{
                    backgroundColor: hexToRgba(bgColor, 0.5)
                }}
                className="absolute left-0 top-0 w-full h-full scale-x-[1.03] rounded-[0.225rem] -z-10"
            />
        </span>
    );

}