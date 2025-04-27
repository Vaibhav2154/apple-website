import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'

const Loader = () => {
  const smallSphereRef = useRef()
  const angleRef = useRef(0)

  useFrame(() => {
    if (smallSphereRef.current) {
      angleRef.current += 0.05
      smallSphereRef.current.position.x = Math.cos(angleRef.current) * 2
      smallSphereRef.current.position.z = Math.sin(angleRef.current) * 2
    }
  })

  return (
    <group>
      {/* Central core */}
      <mesh>
        <sphereGeometry args={[0.5, 20, 20]} />
        <meshStandardMaterial color="#6366F1" emissive="#6366F1" emissiveIntensity={0.5} />
      </mesh>

      {/* Orbiting small sphere */}
      <mesh ref={smallSphereRef}>
        <sphereGeometry args={[0.2, 20, 20]} />
        <meshStandardMaterial color="#60A5FA" />
      </mesh>

      {/* Loading text */}
      <Html center>
        <div className="mt-10 text-sm text-gray-400">Loading...</div>
      </Html>
    </group>
  )
}

export default Loader
