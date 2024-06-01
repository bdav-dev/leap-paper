type H3Props = {
    children?: React.ReactNode
}

export default function H3(props: H3Props) {

    return (
        <div className="mb-2 mt-3">
            <h2 className="text-lg w-fit">
                {props.children}
                <hr className="border-none bg-zinc-400 h-[0.05rem] rounded-full"/>
            </h2>           
        </div>
    );

}