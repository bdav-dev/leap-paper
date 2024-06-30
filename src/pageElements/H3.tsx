import { theme } from "../../leappaper.config";

export type H3Props = {
    children?: React.ReactNode,
    customProps?: any
}

export default function H3(props: H3Props) {
    return <theme.h3 customProps={props.customProps}>{props.children}</theme.h3>;
}