import config from "../../../leappaper.config";

export type BlockquoteProps = {
    children?: React.ReactNode,
    customProps?: any
}

export default function Blockquote(props: BlockquoteProps) {
    return <config.theme.blockquote customProps={props.customProps}>{props.children}</config.theme.blockquote>;
}