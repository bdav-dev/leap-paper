import config from "../../../leappaper.config";

export type CodeBlockProps = {
    language: string,
    children?: React.ReactNode,
    customProps?: any
}

export default function CodeBlock(props: CodeBlockProps) {
    return (
        <config.theme.codeBlock
            customProps={props.customProps}
            language={props.language}
        >
            {props.children}
        </config.theme.codeBlock>
    );
}