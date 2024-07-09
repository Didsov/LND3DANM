import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const CanvasLoader = () => {
    const {progress} = useProgress();

  return (
    <Html>
        <span className='canvas-loader'></span>
        <p >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default CanvasLoader