import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, removeCategory, moveWidget } from '../store/dashboardSlice'

export default function CategoryManager() {
  const dispatch = useDispatch()
  const categories = useSelector(s => s.dashboard.categories)
  const [newCat, setNewCat] = useState('')
  const [fromCat, setFromCat] = useState(categories[0]?.id ?? '')
  const [toCat, setToCat] = useState(categories[1]?.id ?? '')
  const [widgetId, setWidgetId] = useState('')

  const fromWidgets = categories.find(c => c.id === fromCat)?.widgets ?? []

  return (
    <div className="category-manager">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <div className="chip">⚙️ Manage Categories & Widgets</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div style={{ borderRight: '1px dashed rgba(255,255,255,0.1)', paddingRight: 12 }}>
          <div className="field">
            <label>Create Category</label>
            <input value={newCat} onChange={e => setNewCat(e.target.value)} placeholder="e.g., Posture Summary" />
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-ok" onClick={() => { if (newCat.trim()) { dispatch(addCategory(newCat.trim())); setNewCat('') } }}>+ Add Category</button>
          </div>

          <div className="field" style={{ marginTop: 16 }}>
            <label>Remove a Category</label>
            <select onChange={(e) => dispatch(removeCategory(e.target.value))} defaultValue="">
              <option value="" disabled>Choose category to remove</option>
              {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
        </div>

        <div>
          <div className="field">
            <label>Move a Widget Between Categories</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <select value={fromCat} onChange={e => setFromCat(e.target.value)}>
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
              <select value={toCat} onChange={e => setToCat(e.target.value)}>
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
          </div>
          <div className="field">
            <label>Select Widget in Source Category</label>
            <select value={widgetId} onChange={e => setWidgetId(e.target.value)}>
              <option value="">-- choose widget --</option>
              {fromWidgets.map(w => <option key={w.id} value={w.id}>{w.name}</option>)}
            </select>
          </div>
          <button
            className="btn"
            onClick={() => widgetId && fromCat && toCat && dispatch(moveWidget({ fromCategoryId: fromCat, toCategoryId: toCat, widgetId }))}
          >
            Move Widget ➜
          </button>
        </div>
      </div>
    </div>
  )
}
