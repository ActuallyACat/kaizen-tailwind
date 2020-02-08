import React from "react"
import "./css/tailwind.css"
import { Button } from './components/button'
import { Paragraph } from './components/typography'

function App() {
  return (
    <div className="p-lg text-wisteria-800">
      <div className="p-md">
        <p>Normal button</p>
        <Button>Label</Button>
      </div>

      <div className="p-md">
        <p>Disabled button</p>
        <Button disabled>Label</Button>
      </div>

      <div className="p-md">
        <p>Focused button</p>
        <Button focus>Label</Button>
      </div>

      <div className="p-md">
        <p>paragraph</p>
        <Paragraph p="1/8">Example Paragraph with 1/8 padding</Paragraph>
        <Paragraph m="1/8">Example Paragraph with 1/8 padding</Paragraph>
        <Paragraph mt="1">Example Paragraph with 1 unit padding at top</Paragraph>
      </div>
    </div>
  )
}

export default App  
