import { H3Props } from "../../pageElements/H3";

export default function BdavH3(props: H3Props) {

    return (
        <div className="mb-2">
            <h3 className="text-xl mb-[0.05rem]">
                {props.children}
            </h3>

            <hr className="border-none bg-zinc-600 h-[1px] rounded-full"/>
        </div>
    );
}