import { theme } from "../../leappaper.config";

export type BlockProps = {
    children?: React.ReactNode,
    customProps?: any
}

export default function Block(props: BlockProps) {
    return <theme.block customProps={props.customProps}>{props.children}</theme.block>;
}