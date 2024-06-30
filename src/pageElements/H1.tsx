import { theme } from "../../leappaper.config";

export type H1Props = {
    children?: React.ReactNode,
    customProps?: any
}

export default function H1(props: H1Props) {
    return <theme.h1 customProps={props.customProps}>{props.children}</theme.h1>;
}