import { CodeProps } from "../../pageElements/Code";

export default function BdavCode(props: CodeProps) {

    return (
        <span className="bg-zinc-200 font-mono rounded-md py-0.5 px-1">{props.children}</span>
    );
}