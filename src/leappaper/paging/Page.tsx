import config from "../../../leappaper.config";

type PageProps = {
    children?: React.ReactNode,
    padding?: string
}

export default function Page(props: PageProps) {

    return (
        <div
            style={{
                width: config.format.width,
                height: config.format.height,
                minWidth: config.format.width,
                minHeight: config.format.height,
                padding: props.padding ?? config.defaultPagePadding,
                borderBottom: config.render ? "none" : "1px grey solid"
            }}
            className={`
                pagebreak
                ${config.render ? "" : "shadow-lg"}
            `}
        >
            <div className="w-full h-full overflow-hidden">
                {props.children}
            </div>

        </div>
    );
}