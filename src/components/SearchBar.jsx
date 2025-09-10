import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeWidget } from '../store/dashboardSlice'

export default function SearchBar({ query, setQuery }) {
  const categories = useSelector(s => s.dashboard.categories)
  const dispatch = useDispatch()

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    const items = []
    for (const c of categories) {
      for (const w of c.widgets) {
        if (w.name.toLowerCase().includes(q) || w.text.toLowerCase().includes(q)) {
          items.push({ ...w, categoryId: c.id, categoryName: c.name })
        }
      }
    }
    return items
  }, [query, categories])

  return (
    <div style={{ flex: 1 }}>
      <div className="search">
        <span>🔎</span>
        <input
          placeholder="Search all widgets..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      {query && (
        <div className="results">
          <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 6 }}>
            {results.length} result{results.length !== 1 ? 's' : ''}
          </div>
          {results.map(r => (
            <div key={r.id} className="result-item">
              <div>
                <div style={{ fontWeight: 700 }}>{r.name}</div>
                <div style={{ fontSize: 12, opacity: 0.8 }}>{r.text}</div>
                <div className="subtitle">Category: {r.categoryName}</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(removeWidget({ categoryId: r.categoryId, widgetId: r.id }))}
                  title="Remove from category"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
