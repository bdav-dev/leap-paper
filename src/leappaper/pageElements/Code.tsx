import config from "../../../leappaper.config";

export type CodeProps = {
    children?: React.ReactNode,
    customProps?: any
}

export default function Code(props: CodeProps) {
    return <config.theme.code customProps={props.customProps}>{props.children}</config.theme.code>;
}