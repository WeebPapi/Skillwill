import { useState } from "react"
import "./App.css"
import { ButtonAppBar } from "./ButtonAppBar"

function App() {
  const [isVertical, setIsVertical] = useState(false)
  return (
    <>
      <div>
        <ButtonAppBar orientation={isVertical ? "vertical" : "horizontal"} />
        <button
          type="button"
          className="centered"
          onClick={() => {
            setIsVertical((prev) => !prev)
          }}
        >
          Make it {isVertical ? "Horizontal" : "Vertical"}
        </button>
      </div>
    </>
  )
}

export default App
