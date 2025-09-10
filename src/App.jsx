import { useState } from 'react'
import './styles.css'
import Dashboard from './components/Dashboard'
import SearchBar from './components/SearchBar'
import CategoryManager from './components/CategoryManager'

export default function App() {
  const [query, setQuery] = useState('')

  return (
    <div className="container">
      <div className="header">
        <div className="title">📊 Executive Dashboard <span className="subtitle">• built with React + Redux Toolkit</span></div>
        <div style={{ display: 'flex', gap: 10 }}>
          <a className="btn" href="https://react.dev" target="_blank" rel="noreferrer">Docs</a>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16, alignItems: 'start', marginBottom: 16 }}>
        <SearchBar query={query} setQuery={setQuery} />
        <CategoryManager />
      </div>

      <Dashboard />
    </div>
  )
}
