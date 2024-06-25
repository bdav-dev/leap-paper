import { CodeBlockProps } from "../../pageElements/CodeBlock";

export default function BdavCodeBlock(props: CodeBlockProps) {

    return (
        <div className="w-full bg-zinc-100 rounded-xl p-2 font-mono">
            {props.children}
        </div>
    );
}