import Button from "./components/Button"
import List from "./components/List"
import { Navbar } from "./components/Navbar/Navbar"
import Widget from "./components/Widget"

export function App() {
  return (
    <main
      className={"mh-10 mv-1"}
      style={{ outline: '2px solid red' }}
    >
      <Navbar />

      <List initialItems={['Diego', 'Rodz', 'Mayk']} />

      <Widget />
    </main>

  )
}
