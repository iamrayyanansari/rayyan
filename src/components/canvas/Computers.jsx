import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import  CanvasLoader  from "../Loader";

const Computers = (isMobile) => {
  const { scene } = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.75} groundColor="white" />
      <pointLight intensity={5} position={[10, 10, 10]} />
      <spotLight
        position={[-40, 70, 30]}
        angle={0.3}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={2048}
      />
       <spotLight
        position={[40, 70, -30]} // Add another spotlight from a different angle
        angle={0.3}
        penumbra={1}
        intensity={2.5}
        castShadow
        shadow-mapSize={2048}
      />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 :0.75}
        position={isMobile ?[-0.5,-3,-2.2]:[0, -3.25, -1.5]}
        rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
   const mediaQuery =window.matchMedia('(max-width: 500px)');
   setIsMobile(mediaQuery.matches);

   const handleMediaQueryChange = (event)=>{
    setIsMobile(event.matches);
   }
   mediaQuery.addEventListener('change',handleMediaQueryChange);
   return ()=>{
    mediaQuery.removeEventListener('change',handleMediaQueryChange);
   }
  }, [])
  
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={ <CanvasLoader /> }>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
