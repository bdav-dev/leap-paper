type ImageProps = {
    image: string,
    className?: string
}

export default function Image(props: ImageProps) {

    return (
        <img src={`/${props.image}`} className={"rounded-lg " + props.className}/>
    );
}