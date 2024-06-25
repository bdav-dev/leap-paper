import { theme } from "../../leappaper.config";

export type H1Props = {
    children?: React.ReactNode
}

export default function H1(props: H1Props) {
    return <theme.h1>{props.children}</theme.h1>;
}