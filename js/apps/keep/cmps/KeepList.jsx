import { KeepPreview } from './KeepPreview.jsx'

export function KeepList({ keeps }) {

  return (
    <div className="keep-list">
      {keeps.map(keep => <KeepPreview key={keep.id} keep={keep}/>)}
    </div>
  )
}