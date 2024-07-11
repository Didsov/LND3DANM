import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import {React, Suspense, useEffect, useState } from 'react'
import CanvasLoader from '../Loader/CanvasLoader'
const Hero3D = () => {

    const model = useGLTF('./desktop_pc/scene.gltf')


    return (
    <mesh>
        <hemisphereLight intensity={1.5} groundColor='black' />
        <ambientLight intensity={1.9} color={'#A020F0'}/>
        <pointLight intensity={1} />
        <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        />
        <primitive 
        object={model.scene} 
        scale={0.75}
        position={[0,-3.5,-1.5]}
        
        />

    </mesh>
    
  )
}

const HeroCanvas = () =>{


    return (
        <Canvas
        frameloop='demand'
        shadows
        camera={{position: [20,3,5], fov: 25}}
        gl={{preserveDrawingBuffer: true}}
    
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}/>
                <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2}/>
                <Hero3D/>
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default HeroCanvas 