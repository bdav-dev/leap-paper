type H1Props = {
    children?: React.ReactNode
}

export default function H1(props: H1Props) {

    return (
        <div className="mb-2">
            <h1 className="text-2xl mb-[0.05rem]">
                {props.children}
            </h1>

            <hr className="border-none bg-zinc-800 h-[0.1rem] rounded-full"/>
        </div>
    );

}