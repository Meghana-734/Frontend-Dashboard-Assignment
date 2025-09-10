import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWidget } from '../store/dashboardSlice'

export default function AddWidgetModal({ open, onClose, defaultCategoryId }) {
  const dispatch = useDispatch()
  const categories = useSelector(s => s.dashboard.categories)
  const [categoryId, setCategoryId] = useState(defaultCategoryId || (categories[0]?.id ?? ''))
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  if (!open) return null

  const submit = (e) => {
    e.preventDefault()
    if (!categoryId || !name.trim()) return
    dispatch(addWidget({ categoryId, name: name.trim(), text: text.trim() || 'Random text' }))
    setName(''); setText('')
    onClose()
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>Add Widget</h3>
        <form onSubmit={submit}>
          <div className="field">
            <label>Category</label>
            <select value={categoryId} onChange={e => setCategoryId(e.target.value)}>
              {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div className="field">
            <label>Widget Name</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g., Compliance Score" />
          </div>
          <div className="field">
            <label>Widget Text</label>
            <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Any random text is fine here" rows={4} />
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-ok">Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}
