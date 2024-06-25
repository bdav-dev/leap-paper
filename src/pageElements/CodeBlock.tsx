import { theme } from "../../leappaper.config";

export type CodeBlockProps = {
    children?: React.ReactNode,
    language: string
}

export default function CodeBlock(props: CodeBlockProps) {
    return <theme.codeBlock language={props.language}>{props.children}</theme.codeBlock>;
}