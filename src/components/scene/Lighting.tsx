'use client';

export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.23} color="#c7ccda" />
      <pointLight position={[6, 4, 4]} intensity={0.7} color="#8fa7bf" />
      <pointLight position={[-6, -4, 3]} intensity={0.52} color="#a2a8b8" />
      <directionalLight position={[0, 8, 4]} intensity={0.44} color="#d2d6e2" />
    </>
  );
}
