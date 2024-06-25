import { H2Props } from "../../pageElements/H2";


export default function SpaceH2(props: H2Props) {

    return (
        <h2 className="mb-2 text-xl w-full bg-zinc-100 rounded-full py-0.5 px-4 border-l-4 border-r-4 border-zinc-300">
            {props.children}
        </h2>
    );
}