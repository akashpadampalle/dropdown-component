import Dropdown from "./components/Dropdown"

const list = [
  "mango",
  "apple",
  "banana",
  "orange",
  "watermalon"
]

function App() {

  return (
    <Dropdown title="fruits" list={list} />
  )
}

export default App
