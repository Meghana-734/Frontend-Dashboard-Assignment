import { useSelector } from 'react-redux'
import Category from './Category'

export default function Dashboard() {
  const categories = useSelector(s => s.dashboard.categories)

  return (
    <div className="grid">
      {categories.map(cat => (
        <Category key={cat.id} category={cat} />
      ))}
    </div>
  )
}
