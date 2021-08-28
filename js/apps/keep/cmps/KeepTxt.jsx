export function KeepTxt(props) {
    
    const { keep } = props

    return (
        <div className="keep-text keep-preview">{keep.info.txt}</div>
    )
}