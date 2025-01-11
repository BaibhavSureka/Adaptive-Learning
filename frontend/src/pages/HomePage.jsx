import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// 3D AI Assistant Model Component
const AIAssistant = () => {
  const { scene } = useGLTF('/ai_assistant.glb');  // Make sure your GLTF file is available
  const meshRef = useRef();

  // Rotate the model based on time
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = Math.sin(time / 2) / 4;
  });

  return <primitive ref={meshRef} object={scene} scale={[0.5, 0.5, 0.5]} />;
};

// Home Page Component
const HomePage = () => {
  const containerRef = useRef(null);

  // useEffect(() => {
  //   // Handle mouse movement for interactive background effect
  //   const handleMouseMove = (e) => {
  //     const { clientX, clientY } = e;
  //     const { width, height } = containerRef.current.getBoundingClientRect();
  //     const x = (clientX / width) * 100;
  //     const y = (clientY / height) * 100;
  //     containerRef.current.style.setProperty('--mouse-x', `${x}%`);
  //     containerRef.current.style.setProperty('--mouse-y', `${y}%`);
  //   };

  //   containerRef.current.addEventListener('mousemove', handleMouseMove);
  //   return () => {
  //     containerRef.current.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
      }}
    >
      {/* Mouse-Interactive Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.1),transparent_50%)]"></div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-6"
        >
          Learn Smarter with AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-indigo-100 mb-8"
        >
          Personalized lessons • AI-powered recommendations • Interactive learning
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-100 transition duration-300"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-indigo-600 transition duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* 3D AI Assistant */}
      <div className="w-full h-96 mt-12">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <AIAssistant />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default HomePage;
