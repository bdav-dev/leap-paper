import { H3Props } from "../../pageElements/H3";

export default function SpaceH3(props: H3Props) {

    return (
        <h3 className="mb-2 text-lg w-full bg-zinc-100 rounded-full py-0.5 px-4 border-l-2 border-r-2 border-zinc-300">
            {props.children}
        </h3>
    );
}