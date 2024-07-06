import config from "../../../leappaper.config";

export type BlockProps = {
    children?: React.ReactNode,
    customProps?: any
}

export default function Block(props: BlockProps) {
    return <config.theme.block customProps={props.customProps}>{props.children}</config.theme.block>;
}