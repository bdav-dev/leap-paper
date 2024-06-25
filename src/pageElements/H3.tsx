import { theme } from "../../leappaper.config";

export type H3Props = {
    children?: React.ReactNode
}

export default function H3(props: H3Props) {
    return <theme.h3>{props.children}</theme.h3>;
}