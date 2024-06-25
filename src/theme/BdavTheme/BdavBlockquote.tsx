import { BlockquoteProps } from "../../pageElements/Blockquote";

export default function BdavBlockquote(props: BlockquoteProps) {

    return (
        <div className="bg-neutral-100 border-neutral-200 p-2.5 border-l-8 rounded-lg">
            {props.children}
        </div>
    );
}