import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import profileImg from '../../public/homeprofile.jpg';

const DecorativeOrb: React.FC<{ hovered: boolean }> = ({ hovered }) => {
  return (
    <Float speed={hovered ? 6 : 3} rotationIntensity={hovered ? 1.5 : 0.6} floatIntensity={hovered ? 3 : 1.5}>
      <mesh scale={hovered ? 2.0 : 1.8} position={[0, 0, -1.5]}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={hovered ? '#818cf8' : '#6366f1'}
          roughness={0.1}
          metalness={0.7}
          distort={hovered ? 0.55 : 0.35}
          speed={hovered ? 4 : 2}
          transparent
          opacity={hovered ? 0.6 : 0.45}
        />
      </mesh>
    </Float>
  );
};

/**
 * Profile3D is sized entirely by its parent (see HomeSection's "stage" div).
 * It fills 100% width/height of whatever container it's placed in, and the
 * photo card scales as a percentage of that container rather than viewport
 * units — so it behaves the same whether it's hosted full-width, in a grid
 * column, or in a smaller card elsewhere in the site.
 */
const Profile3D: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Three.js canvas — fills the entire stage */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 4.5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
          style={{ width: '100%', height: '100%' }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
          <pointLight position={[10, -5, 5]} intensity={0.8} color="#a855f7" />
          <Environment preset="studio" />
          <DecorativeOrb hovered={hovered} />
        </Canvas>
      </div>

      {/* Profile photo — sized as a % of the stage, not viewport units */}
      <div className="relative z-10 flex flex-col items-center w-full h-full justify-center">

        {/* Animated gradient border */}
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          animate={{
            scale: hovered ? 1.04 : 1,
            boxShadow: hovered
              ? '0 0 60px 12px rgba(99,102,241,0.45), 0 0 120px 24px rgba(168,85,247,0.25)'
              : '0 0 30px 4px rgba(99,102,241,0.2)',
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="p-[3px] rounded-[2.5rem] bg-gradient-to-tr from-indigo-500 via-blue-400 to-purple-500 cursor-pointer"
          style={{ width: '78%', maxWidth: '340px' }}
        >
          <div className="p-[3px] rounded-[2.25rem] bg-white dark:bg-slate-950">
            <div className="relative overflow-hidden rounded-[2rem] w-full" style={{ aspectRatio: '3/4' }}>

              {/* Photo */}
              <motion.img
                src={profileImg}
                alt="Chandy Neat"
                className="w-full h-full object-cover object-top"
                animate={{ scale: hovered ? 1.06 : 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />

              {/* Hover shimmer overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-white/10 to-purple-500/0 pointer-events-none"
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Bottom name tag on hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col items-center"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 16 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <span className="text-white font-bold text-lg tracking-tight">Chandy Neat</span>
                <span className="text-indigo-300 text-xs font-medium tracking-wide">Software Engineer</span>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* Glow reflection below */}
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-6 rounded-full bg-indigo-400/30 dark:bg-indigo-500/30 blur-2xl pointer-events-none"
          animate={{ width: hovered ? '60%' : '42%', opacity: hovered ? 0.8 : 0.4 }}
          transition={{ duration: 0.4 }}
        />
      </div>

    </div>
  );
};

export default Profile3D;