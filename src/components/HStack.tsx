type HStackProps = {
    children?: React.ReactNode,
    className?: string
}

export default function HStack(props: HStackProps) {

    return (
        <div className={"flex flex-row " + props.className}>
            {props.children}
        </div>
    ); 

}