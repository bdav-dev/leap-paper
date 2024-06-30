import { theme } from "../../leappaper.config";

export type HighlightProps = {
    children?: React.ReactNode,
    customProps?: any
}

export default function Highlight(props: HighlightProps) {
    return <theme.highlight customProps={props.customProps}>{props.children}</theme.highlight>;
}