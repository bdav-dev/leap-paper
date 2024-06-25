import { theme } from "../../leappaper.config";

export type BlockProps = {
    children?: React.ReactNode
}

export default function Block(props: BlockProps) {
    return <theme.block>{props.children}</theme.block>;
}