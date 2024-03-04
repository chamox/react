import { useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
  { id: 1, title: 'Buy milk', completed: false },
  { id: 2, title: 'Buy bread', completed: true },
  { id: 3, title: 'Buy cheese', completed: false },
]

const App = (): JSX.Element => {
  const [todos] = useState(mockTodos)
  return (
    <>
      <h1>Todos</h1>
      <Todos todos={todos} />
    </>
  )
}

export default App
