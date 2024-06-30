import { HighlightProps } from "../../pageElements/Highlight";

export default function BdavHighlight(props: HighlightProps) {

    return (
        <span className="bg-zinc-200 rounded-md px-1 py-0.5">{props.children}</span>
    );
}