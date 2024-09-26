import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import { useState } from 'react'
import './index.css'
const formatUserName = (userName) => `@${userName}`
const element = <button className=''>check</button>
const theo = {
  name: "pinocho",
  initialIsFollowing: false,
  userName: "Theo"
}
const users = [
  {
    name: "zombie",
    initialIsFollowing: false,
    userName: "zombie21"
  },
  {
    name: "caravan",
    initialIsFollowing: false,
    userName: "caravan"
  },
  {
    name: "tertu",
    initialIsFollowing: false,
    userName: "tertu"
  },
]

// Aqui se pueden poner comentarios
// pero dentro del return no

export function App() {
  const [name, setName] = useState("Leonardo");


  return (
    < section className='App' >
      <TwitterFollowCard element={element} formatUserName={formatUserName} name="Leonardo Bazan" userName="ky210299" initialIsFollowing={true} />

      <TwitterFollowCard formatUserName={formatUserName} name="Midu" userName="midudev" initialIsFollowing={false} />

      <TwitterFollowCard formatUserName={formatUserName} name="Robert" userName="robert" initialIsFollowing />

      <TwitterFollowCard formatUserName={formatUserName} userName="alfonso" >
        Alfonso Martines
      </TwitterFollowCard>

      <TwitterFollowCard formatUserName={formatUserName} {...theo} />

      <TwitterFollowCard formatUserName={formatUserName} name={name} userName={name} />

      {
        users.map(user => {
          const { userName, name, initialIsFollowing } = user;
          return (
            <TwitterFollowCard key={userName} initialIsFollowing={initialIsFollowing} formatUserName={formatUserName} name={name} userName={userName} />
          )
        })
      }
      <button onClick={() => setName('pedrito')}>Change Name</button>
    </section >
  )
}
