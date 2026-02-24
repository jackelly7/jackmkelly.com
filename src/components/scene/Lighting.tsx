'use client';

export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.45} color="#d8ddff" />
      <pointLight position={[5, 4, 4]} intensity={1.3} color="#8bc5ff" />
      <pointLight position={[-5, -3, 2]} intensity={1.1} color="#ffc2f5" />
      <directionalLight position={[0, 8, 4]} intensity={0.7} color="#c4f1ff" />
    </>
  );
}
