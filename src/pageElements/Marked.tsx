// @ts-nocheck

import { theme } from "../../leappaper.config";

export type MarkedProps = {
    red?: boolean,
    green?: boolean,
    blue?: boolean,
    yellow?: boolean,
    orange?: boolean,
    color?: string,
    children?: React.ReactNode,
    customProps?: any
}

export type MarkerColors = {
    red: string,
    green: string,
    blue: string,
    yellow: string,
    orange: string
}


export function getMarkerColor(colors: MarkerColors, defaultColor: string, props: MarkedProps) {
    if (props.color)
        return props.color;

    for (const key in colors) {
        if (props[key])
            return colors[key];
    }

    return defaultColor;
}

export function hexToRgba(hex: string, alpha: number) {
    const col = {
        r: parseInt(hex.slice(1, 3), 16),
        g: parseInt(hex.slice(3, 5), 16),
        b: parseInt(hex.slice(5, 7), 16)
    }

    return `rgba(${col.r}, ${col.g}, ${col.b}, ${alpha})`;
}

export default function Marked(props: MarkedProps) {
    return (
        <theme.marked
            customProps={props.customProps}
            red={props.red}
            green={props.green}
            blue={props.blue}
            yellow={props.yellow}
            orange={props.orange}
            color={props.color}
        >
            {props.children}
        </theme.marked>
    );
}