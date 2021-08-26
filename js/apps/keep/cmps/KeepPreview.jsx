const { Link } = ReactRouterDOM

export function KeepPreview({keep}) {

    return (
        <div className="keep-preview">
            <h4>id - {keep.id}</h4>
            <h4>info - {keep.type}</h4>
        </div>
    )
}