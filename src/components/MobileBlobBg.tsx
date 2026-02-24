'use client';

export default function MobileBlobBg() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Large central blob */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-30 animate-blob-float"
        style={{
          background: 'radial-gradient(circle at 40% 40%, rgba(100, 60, 255, 0.6), rgba(0, 200, 200, 0.3), rgba(255, 50, 150, 0.2), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Secondary blob */}
      <div
        className="absolute top-[55%] right-[-10%] w-[400px] h-[400px] rounded-full opacity-25 animate-blob-float-delayed"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(50, 120, 255, 0.5), rgba(160, 40, 200, 0.3), transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      {/* Third blob */}
      <div
        className="absolute top-[80%] left-[-5%] w-[350px] h-[350px] rounded-full opacity-20 animate-blob-float-slow"
        style={{
          background: 'radial-gradient(circle at 40% 60%, rgba(0, 220, 180, 0.5), rgba(100, 60, 255, 0.3), transparent 70%)',
          filter: 'blur(55px)',
        }}
      />
    </div>
  );
}
