type H2Props = {
    children?: React.ReactNode,
    marginTop?: string,
    className?: string
}


export default function H2(props: H2Props) {

    return (
        <div className={`
            mb-2
            ${props.marginTop ?? "mt-2"}
            ${props.className}
        `}>
            <h2 className="text-xl">
                {props.children}
            </h2>

            <hr className="border-none bg-zinc-800 h-[0.05rem] rounded-full" />
        </div>
    );

}