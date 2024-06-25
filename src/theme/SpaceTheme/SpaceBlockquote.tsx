import { BlockquoteProps } from "../../pageElements/Blockquote";

export default function SpaceBlockquote(props: BlockquoteProps) {

    return (
        <div className="bg-neutral-100 border-neutral-200 p-2.5 border-l-[0.75rem] border-r-[0.75rem] rounded-lg border">
            {props.children}
        </div>
    );
}