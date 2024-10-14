import {
    MeshReflectorMaterial,
  Float,
  Text,
  Html,
  PivotControls,
  TransformControls,
  OrbitControls,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from 'three'

export default function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <PivotControls
        anchor={[-1, -1, -1]}
        depthTest={false}
        lineWidth={2}
        axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
        scale={100}
        fixed={true}
      >
        <mesh ref={sphereRef} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html
            position={[1, 1, 0]}
            wrapperClass="label"
            center
            distanceFactor={5}
            occlude={[sphereRef, cubeRef]}
          >
            Hello, pretty sphere!
            <br />
            You are just a round thingy
          </Html>
        </mesh>
      </PivotControls>

      <mesh ref={cubeRef} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />

      </mesh>
      {/* UseRef to associate the gizmo to the mesh, instead of having it in the middle of the scene */}
      <TransformControls object={ cubeRef } mode="translate" />

      <mesh position-y={ -1 } rotation-x={ -Math.PI * 0.5 } scale={ 10 }>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <MeshReflectorMaterial
        resolution={ 1024 }
        blur={[ 1000, 1000 ]}
        mixBlur={ 0.75 }
        mirror={ 0.75 }
        color='skyblue'
        side={ THREE.DoubleSide }/>
      </mesh>

      <Float
      speed={ 3 }
      floatIntensity={ 3 }>
        <Text
          font="./bangers-v20-latin-regular.woff"
          fontSize={ 1.5 }
          color="cyan"
          position-y={ 3 }
          maxWidth={ 7  }
          textAlign="center"
        >
          This is awesome!
          <meshNormalMaterial 
          side={ THREE.DoubleSide }/>
        </Text>
      </Float>
    </>
  );
}
