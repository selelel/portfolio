export default function Hero() {
  return (
    <div
      className="relative flex-center contain-paint z-20 h-[calc(100vh-120px)] md:h-[calc(100vh-72px)]"
      style={{ background: "linear-gradient(0deg, #060522 30%, #061434)" }}
    >
      <canvas style={{ width: "100%", height: "100%", background: "transparent" }} />
    </div>
  );
}


