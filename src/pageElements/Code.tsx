import { theme } from "../../leappaper.config";

export type CodeProps = {
    children?: React.ReactNode,
    customProps?: any
}

export default function Code(props: CodeProps) {
    return <theme.code customProps={props.customProps}>{props.children}</theme.code>;
}