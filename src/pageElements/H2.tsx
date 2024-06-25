import { theme } from "../../leappaper.config";

export type H2Props = {
    children?: React.ReactNode
}

export default function H2(props: H2Props) {
    return <theme.h2>{props.children}</theme.h2>;
}