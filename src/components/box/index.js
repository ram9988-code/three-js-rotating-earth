import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import {Box,OrbitControls} from '@react-three/drei';
import Logo from "../../assets/textures/icon.png";
import NormalMap from "../../assets/textures/8k_earth_normal_map.jpg";

export default function Test() {
    const [logo,normalMap] = useLoader(
        TextureLoader,
        [Logo,NormalMap]
      );
  return (
    <>
    <ambientLight intensity={0.7} />
      <mesh>
        <Box args={[3,2,1]} position={[-2,0,0]}>
          <meshPhongMaterial attach="material" color={"#01040c"} />
          <meshStandardMaterial />
        </Box>
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}
