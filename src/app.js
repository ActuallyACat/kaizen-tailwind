import React from "react"
import "./css/tailwind.css"
import { Button } from './components/button'

function App() {
  return (
    <div className="p-8 text-wisteria-800">
      <div className="pb-4">
        <p>Normal button</p>
        <Button>Label</Button>
      </div>

      <div className="pb-4">
        <p>Disabled button</p>
        <Button disabled>Label</Button>
      </div>

      <div className="pb-4">
        <p>Focused button</p>
        <Button focus>Label</Button>
      </div>
    </div>
  )
}

export default App  
