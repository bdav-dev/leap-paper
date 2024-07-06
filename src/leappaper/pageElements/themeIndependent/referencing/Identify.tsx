type IdentifyProps = {
    id: string,
    children?: React.ReactNode
}

export default function Identify(props: IdentifyProps) {
    return <span id={props.id}>{props.children}</span>;
}