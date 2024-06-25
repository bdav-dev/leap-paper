import { BlockProps } from "../../pageElements/Block";

export default function SpaceBlock(props: BlockProps) {

    return (
        <div className="w-full bg-zinc-100 rounded-xl p-2">
            {props.children}
        </div>
    );
}
