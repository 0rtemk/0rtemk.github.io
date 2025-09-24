import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>dev by Киселёв Артём</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count +
        </button>
        <button onClick={() => count > 0 && setCount((count) => count + 1)}>
          count -
        </button>
      </div>
    </>
  )
}

export default App
