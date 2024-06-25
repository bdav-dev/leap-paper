import { CodeBlockProps } from "../../pageElements/CodeBlock";

export default function SpaceCodeBlock(props: CodeBlockProps) {

    return (
        <div className="relative w-full bg-zinc-100 rounded-xl p-2 font-mono border border-zinc-300">
            <div className="absolute top-0 right-0 px-3 py-1">
                {props.language}
            </div>

            {props.children}
        </div>
    );
}