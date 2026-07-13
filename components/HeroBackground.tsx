export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Resplandor superior izquierdo */}
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[130px]" />

      {/* Resplandor central derecho */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-cyan-400/10 blur-[120px]" />

      {/* Resplandor inferior central, detrás de los stats */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-white/10 blur-[110px]" />

      {/* Grilla técnica */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Viñeta para enfocar el centro */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, #050505 90%)",
        }}
      />

      {/* Degradado inferior para fundir con la siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#050505]" />
    </div>
  );
}