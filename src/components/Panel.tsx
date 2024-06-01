type PanelProps = {
    children?: React.ReactNode,
    className?: string
}

export default function Panel(props: PanelProps) {

    return (
        <div className={"bg-zinc-100 p-3 rounded-lg " + props.className}>
            {props.children}
        </div>
    );


}