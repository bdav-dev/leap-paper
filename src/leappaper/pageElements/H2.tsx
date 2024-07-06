import config from "../../../leappaper.config";

export type H2Props = {
    children?: React.ReactNode,
    customProps?: any
}

export default function H2(props: H2Props) {
    return <config.theme.h2 customProps={props.customProps}>{props.children}</config.theme.h2>;
}