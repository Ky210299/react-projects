import { useState, useEffect } from "react";

export function FollowMouse({ enabled, setEnabled, position, setPosition }) {

  useEffect(() => {
    console.log('effect')
    const handleMove = event => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY })

    }
    if (enabled) window.addEventListener('pointermove', handleMove);

    // return the way to cleane effects
    return () => {
      window.removeEventListener('pointermove', handleMove);
    }
  }, [enabled])

  return (
    <div style={{
      position: 'absolute',
      backgroundColor: '#09f',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
      transform: `translate(${position.x}px, ${position.y}px )`
    }} />
  )
}
