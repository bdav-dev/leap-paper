import { theme } from "../../leappaper.config";

export type BlockquoteProps = {
    children?: React.ReactNode
}

export default function Blockquote(props: BlockquoteProps) {
    return <theme.blockquote>{props.children}</theme.blockquote>;
}