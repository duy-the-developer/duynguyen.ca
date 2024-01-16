import React from 'react'

const GrainyFilter = () => {
  return (
    <svg className="h-0">
      <filter id="grainy">
        <feTurbulence type="turbulence" baseFrequency="0.81" numOctaves="3" result="noise" />
      </filter>
    </svg>
  )
}

export default GrainyFilter
