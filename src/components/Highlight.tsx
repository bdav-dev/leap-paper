type HighlightProps = {
    children?: React.ReactNode
}


export default function Highlight(props: HighlightProps) {

    return (
        <span className={`
            bg-zinc-200
            px-1
            py-[0.05rem]
            rounded-lg
            my-0.5
        `}>
            {props.children}
        </span>
    );

}