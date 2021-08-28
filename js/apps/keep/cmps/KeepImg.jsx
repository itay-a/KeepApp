export function KeepImg(props) {
    const { keep } = props

    return (
        <div className="keep-img keep-preview" style={keep.style}>
            {keep.info.title}
            <img src={keep.info.url} />
        </div>
    )
}