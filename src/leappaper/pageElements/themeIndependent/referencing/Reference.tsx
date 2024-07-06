type ReferenceProps = {
    target: string,
    children?: React.ReactNode
}

export default function Reference(props: ReferenceProps) {
    return <a href={`#${props.target}`}>{props.children}</a>;
}