type CodeProps = {
    children?: React.ReactNode
}

export default function Code(props: CodeProps) {

    return (
        <span className={`
            bg-zinc-200
            rounded-lg
            mono
            px-1
            py-[0.05rem]
            my-0.5
            font-mono
        `}>
            {props.children}
        </span>
    );
}