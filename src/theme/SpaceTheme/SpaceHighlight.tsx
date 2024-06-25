import { HighlightProps } from "../../pageElements/Highlight";

export default function SpaceHighlight(props: HighlightProps) {

    return (
        <span className="bg-zinc-100 rounded-md px-1 py-0.5">{props.children}</span>
    );
}