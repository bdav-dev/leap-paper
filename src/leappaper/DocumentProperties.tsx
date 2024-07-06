import config from "../../leappaper.config";

type DocumentPropertiesProps = {
    children?: React.ReactNode
}

export default function DocumentProperties(props: DocumentPropertiesProps) {

    return (
        <div
            style={{
                // width: config.format.width,
                background: "#FFFFFF",
                // padding: config.defaultPagePadding
            }}
        >
            {props.children}
        </div>
    );

}