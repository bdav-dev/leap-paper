import { theme } from "../../leappaper.config";

export type CodeProps = {
    children?: React.ReactNode
}

export default function Code(props: CodeProps) {
    return <theme.code>{props.children}</theme.code>;
}