import { BlockProps } from "../pageElements/Block";
import { BlockquoteProps } from "../pageElements/Blockquote";
import { CodeProps } from "../pageElements/Code";
import { CodeBlockProps } from "../pageElements/CodeBlock";
import { H1Props } from "../pageElements/H1"
import { H2Props } from "../pageElements/H2";
import { H3Props } from "../pageElements/H3";
import { HighlightProps } from "../pageElements/Highlight";
import BdavBlock from "./BdavTheme/BdavBlock";
import BdavBlockquote from "./BdavTheme/BdavBlockquote";
import BdavCode from "./BdavTheme/BdavCode";
import BdavCodeBlock from "./BdavTheme/BdavCodeBlock";
import BdavH1 from "./BdavTheme/BdavH1";
import BdavH2 from "./BdavTheme/BdavH2";
import BdavH3 from "./BdavTheme/BdavH3";
import BdavHighlight from "./BdavTheme/BdavHighlight";
import SpaceBlock from "./SpaceTheme/SpaceBlock";
import SpaceBlockquote from "./SpaceTheme/SpaceBlockquote";
import SpaceCode from "./SpaceTheme/SpaceCode";
import SpaceCodeBlock from "./SpaceTheme/SpaceCodeBlock";
import SpaceH1 from "./SpaceTheme/SpaceH1";
import SpaceH2 from "./SpaceTheme/SpaceH2";
import SpaceH3 from "./SpaceTheme/SpaceH3";
import SpaceHighlight from "./SpaceTheme/SpaceHighlight";

export type Theme = {
    h1: (props: H1Props) => React.ReactNode,
    h2: (props: H2Props) => React.ReactNode,
    h3: (props: H3Props) => React.ReactNode,
    highlight: (props: HighlightProps) => React.ReactNode,
    codeBlock: (props: CodeBlockProps) => React.ReactNode,
    code: (props: CodeProps) => React.ReactNode,
    blockquote: (props: BlockquoteProps) => React.ReactNode,
    block: (props: BlockProps) => React.ReactNode
}

export const bdavTheme: Theme = {
    h1: BdavH1,
    h2: BdavH2,
    h3: BdavH3,
    highlight: BdavHighlight,
    codeBlock: BdavCodeBlock,
    code: BdavCode,
    blockquote: BdavBlockquote,
    block: BdavBlock
}

export const spaceTheme: Theme = {
    h1: SpaceH1,
    h2: SpaceH2,
    h3: SpaceH3,
    highlight: SpaceHighlight,
    codeBlock: SpaceCodeBlock,
    code: SpaceCode,
    blockquote: SpaceBlockquote,
    block: SpaceBlock
}
