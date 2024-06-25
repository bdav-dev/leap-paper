import { CodeProps } from "../../pageElements/Code";

export default function SpaceCode(props: CodeProps) {

    return (
        <span className="bg-zinc-100 font-mono rounded-md py-0.5 px-1 border-y-2 border-zinc-200">{props.children}</span>
    );
}