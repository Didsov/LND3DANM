import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../../Loader/CanvasLoader'

const Earth = ()=>{
    const earth = useGLTF('./planet/scene.gltf')
    return (
        <primitive
            object={earth.scene}
            scale={3.5}
            position-y={0}
            rotation-y={0}
        />
    )
}

const EarthCanvas = () => {
  return (
    <Canvas
        shadows
        frameloop='demand'
        gl={{preserveDrawingBuffer: true}}
        camera={{
            
        }}
    > 
        <Suspense fallback={<CanvasLoader/>}>
            <OrbitControls 
                autoRotate={true}
                enableZoom={false}
                maxPolarAngle={Math.PI/2}
                minPolarAngle={Math.PI/2}
            />
            <Earth/>
        </Suspense>

    </Canvas>
  )
}

export default EarthCanvas