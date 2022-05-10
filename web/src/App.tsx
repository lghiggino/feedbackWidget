import { useState } from "react"
import List from "./components/List"
import { Navbar } from "./components/Navbar/Navbar"
import Widget from "./components/Widget/Widget"

type NavigationPages = "Dashboard" | "Team" | "Projects" | "Calendar" | "Login"

export function App() {
  const [navState, setNavState] = useState<NavigationPages>("Team")
  const [user, setUser] = useState<boolean>(true)

  return (
    <>
      <Navbar user={user} setUser={setUser} navState={navState} setNavState={setNavState} />
      <main
        className="mh-10 mv-1 px-8"
      // style={{ outline: '2px solid red'}}
      >
        <div className="mb-8 bg-gray-700"></div>
        {user &&
          <>
            {navState === 'Dashboard' && <div><p>Dashboard</p></div>}
            {navState === 'Team' && <List initialItems={['Diego', 'Rodz', 'Mayk']} />}
            {navState === 'Projects' && <div><p>Projects</p></div>}
            {navState === 'Calendar' && <div><p>Calendar</p></div>}
          </>

        }

        {navState === 'Login' && <div><p>Login</p></div>}

        <Widget />
      </main>
    </>


  )
}
