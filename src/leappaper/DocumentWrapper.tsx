import config from "../../leappaper.config";

type DocumentWrapperProps = {
    children?: React.ReactNode
}

export default function DocumentWrapper(props: DocumentWrapperProps) {

    return (
        <div
            className={
                config.render
                    ? ""
                    : "flex justify-center bg-neutral-200"
            }
        >
            <div className={config.render ? "" : "p-10"}>
                {props.children}
            </div>
        </div>
    );

}