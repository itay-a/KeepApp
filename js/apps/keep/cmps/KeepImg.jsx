export function KeepImg(props) {
    const { keep } = props

    return (
        <div className="keep-preview">
            {keep.info.title}
            <img src={keep.info.url} />
            {keep.style.backgroundColor}
        </div>
    )
}