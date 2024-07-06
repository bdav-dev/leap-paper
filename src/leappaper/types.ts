import { BlockProps } from "./pageElements/Block"
import { BlockquoteProps } from "./pageElements/Blockquote"
import { CodeProps } from "./pageElements/Code"
import { CodeBlockProps } from "./pageElements/CodeBlock"
import { H1Props } from "./pageElements/H1"
import { H2Props } from "./pageElements/H2"
import { H3Props } from "./pageElements/H3"
import { HighlightProps } from "./pageElements/Highlight"
import { MarkedProps } from "./pageElements/Marked"

export type Theme = {
    h1: (props: H1Props) => React.ReactNode,
    h2: (props: H2Props) => React.ReactNode,
    h3: (props: H3Props) => React.ReactNode,
    highlight: (props: HighlightProps) => React.ReactNode,
    codeBlock: (props: CodeBlockProps) => React.ReactNode,
    code: (props: CodeProps) => React.ReactNode,
    blockquote: (props: BlockquoteProps) => React.ReactNode,
    block: (props: BlockProps) => React.ReactNode,
    marked: (props: MarkedProps) => React.ReactNode
}

export type PageFormat = {
    width: string,
    height: string
}

export type LeappaperConfig = {
    theme: Theme,
    document: React.ReactNode,
    format: PageFormat,
    defaultPagePadding: string,
    render: boolean
}