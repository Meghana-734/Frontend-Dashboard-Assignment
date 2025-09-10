import { createSlice, nanoid } from '@reduxjs/toolkit'
import initial from '../data/initialData.json'

const initialState = {
  categories: initial.categories
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addCategory: {
      reducer(state, action) {
        state.categories.push(action.payload)
      },
      prepare(name) {
        return { payload: { id: 'cat_' + nanoid(6), name, widgets: [] } }
      }
    },
    removeCategory(state, action) {
      const id = action.payload
      state.categories = state.categories.filter(c => c.id !== id)
    },
    addWidget: {
      reducer(state, action) {
        const { categoryId, id, name, text } = action.payload
        const cat = state.categories.find(c => c.id === categoryId)
        if (cat) {
          cat.widgets.push({ id, name, text })
        }
      },
      prepare({ categoryId, name, text }) {
        return { payload: { categoryId, id: 'w_' + nanoid(6), name, text } }
      }
    },
    removeWidget(state, action) {
      const { categoryId, widgetId } = action.payload
      const cat = state.categories.find(c => c.id === categoryId)
      if (cat) {
        cat.widgets = cat.widgets.filter(w => w.id !== widgetId)
      }
    },
    moveWidget(state, action) {
      const { fromCategoryId, toCategoryId, widgetId } = action.payload
      if (fromCategoryId === toCategoryId) return
      const from = state.categories.find(c => c.id === fromCategoryId)
      const to = state.categories.find(c => c.id === toCategoryId)
      if (!from || !to) return
      const idx = from.widgets.findIndex(w => w.id === widgetId)
      if (idx >= 0) {
        const [w] = from.widgets.splice(idx, 1)
        to.widgets.push(w)
      }
    }
  }
})

export const { addCategory, removeCategory, addWidget, removeWidget, moveWidget } = dashboardSlice.actions
export default dashboardSlice.reducer
