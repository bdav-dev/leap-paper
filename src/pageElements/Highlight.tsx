import { theme } from "../../leappaper.config";

export type HighlightProps = {
    children?: React.ReactNode
}

export default function Highlight(props: HighlightProps) {
    return <theme.highlight>{props.children}</theme.highlight>;
}