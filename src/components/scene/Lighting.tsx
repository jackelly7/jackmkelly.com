'use client';

export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.35} color="#c7ccda" />
      <pointLight position={[6, 4, 4]} intensity={1.0} color="#8fa7bf" />
      <pointLight position={[-6, -4, 3]} intensity={0.75} color="#a2a8b8" />
      <pointLight position={[0, -3, 5]} intensity={0.5} color="#b8a0d4" />
      <directionalLight position={[0, 8, 4]} intensity={0.6} color="#d2d6e2" />
    </>
  );
}
