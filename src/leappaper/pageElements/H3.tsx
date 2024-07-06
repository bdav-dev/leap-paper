import config from "../../../leappaper.config";

export type H3Props = {
    children?: React.ReactNode,
    customProps?: any
}

export default function H3(props: H3Props) {
    return <config.theme.h3 customProps={props.customProps}>{props.children}</config.theme.h3>;
}