import './App.css';
import { FollowMouse } from './FollowMouse';
import { useState } from 'react';

export function App() {

  const [enabled, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 })

  return (
    <>
      <h3>Mouse Follower</h3>
      <main>
        <FollowMouse enabled={enabled} setEnable={setEnable} position={position} setPosition={setPosition} />
      </main >
      <button onClick={() => setEnable(!enabled)}>
        {enabled ? "Disable" : "Enable"} follow pointer
      </button>
    </>
  )
}

