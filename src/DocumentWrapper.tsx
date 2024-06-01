type DocumentWrapperProps = {
    children?: React.ReactNode
}

export default function DocumentWrapper(props: DocumentWrapperProps) {

    return (
        <div className="flex justify-center bg-neutral-300">

            <div style={{
                width: "29.7cm",
                background: "#FFFFFF",
                padding: "2cm"
            }}>
                {props.children}
            </div>

        </div>
    );
}