import { H1Props } from "../../pageElements/H1";


export default function BdavH1(props: H1Props) {

    return (
        <div className="mb-2">
            <h1 className="text-3xl mb-[0.05rem]">
                {props.children}
            </h1>

            <hr className="border-none bg-zinc-600 h-[1px] rounded-full"/>
        </div>
    );

}