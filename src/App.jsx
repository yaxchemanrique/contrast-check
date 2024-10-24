import React from 'react'
import NumberOfColorsForm from './components/NumberOfColorsForm/NumberOfColorsForm'
import QuoteCard from './components/QuoteCard/QuoteCard'

function App() {
  return (
    <div>
      <NumberOfColorsForm />
      <QuoteCard id={1} background='#e7bdbd' foreground='#442f2f' />
    </div>
  )
}

export default App