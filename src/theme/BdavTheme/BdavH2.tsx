import { H2Props } from "../../pageElements/H2";


export default function BdavH2(props: H2Props) {

    return (
        <div className="mb-2">
            <h2 className="text-xl mb-[0.05rem]">
                {props.children}
            </h2>

            <hr className="border-none bg-zinc-600 h-[1px] rounded-full"/>
        </div>
    );
}