import { theme } from "../../leappaper.config";

export type BlockquoteProps = {
    children?: React.ReactNode,
    customProps?: any
}

export default function Blockquote(props: BlockquoteProps) {
    return <theme.blockquote customProps={props.customProps}>{props.children}</theme.blockquote>;
}