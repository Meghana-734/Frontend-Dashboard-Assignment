import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeWidget } from '../store/dashboardSlice'
import AddWidgetModal from './AddWidgetModal'

export default function Category({ category }) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  return (
    <div className="category">
      <div className="head">
        <div className="chip">📦 {category.name}</div>
        <div className="toolbar">
          <button className="btn" onClick={() => setOpen(true)}>+ Add Widget</button>
        </div>
      </div>
      <div className="widgets">
        {category.widgets.map(w => (
          <div key={w.id} className="widget">
            <button className="x" title="Remove" onClick={() => dispatch(removeWidget({ categoryId: category.id, widgetId: w.id }))}>✕</button>
            <div className="widget-title">{w.name}</div>
            <div className="widget-text">{w.text}</div>
          </div>
        ))}
        {category.widgets.length === 0 && (
          <div style={{ gridColumn: 'span 12', opacity: 0.7, fontSize: 12 }}>
            No widgets yet. Click <b>+ Add Widget</b> to create one.
          </div>
        )}
      </div>

      <AddWidgetModal open={open} onClose={() => setOpen(false)} defaultCategoryId={category.id} />
    </div>
  )
}
