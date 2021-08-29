export function KeepVideo(props) {
    const { keep } = props

    return (
        <div className="keep-video keep-preview" style={keep.style}>
            {keep.info.title}<br/>
            <iframe src={keep.info.url} frameBorder="0"></iframe>
        </div>
    )
}