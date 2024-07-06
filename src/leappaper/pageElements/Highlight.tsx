import config from "../../../leappaper.config";

export type HighlightProps = {
    children?: React.ReactNode,
    customProps?: any
}

export default function Highlight(props: HighlightProps) {
    return <config.theme.highlight customProps={props.customProps}>{props.children}</config.theme.highlight>;
}