import { H1Props } from "../../pageElements/H1";


export default function SpaceH1(props: H1Props) {

    return (
        <h1 className="mb-2 text-2xl w-full bg-zinc-100 rounded-full py-0.5 px-4 border-l-8 border-r-8 border-zinc-300">
            {props.children}
        </h1>
    );

}