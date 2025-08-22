import React, { useEffect } from "react";

const ROBOT_VIEWER_URL = "https://prod.spline.design/1dcxapFMBHoCIfHs/scene.splinecode";
const SPLINE_VIEWER_SCRIPT_SRC = "https://unpkg.com/@splinetool/viewer@1.9.72/build/spline-viewer.js";

const RobotAnimation = () => {
  useEffect(() => {
    // Ensure script loads only once (for SSR/Hot reload edge-cases)
    if (!document.querySelector(`script[src="${SPLINE_VIEWER_SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = SPLINE_VIEWER_SCRIPT_SRC;
      script.type = "module";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div
      className="
        flex items-center justify-center
        rounded-2xl shadow-2xl relative
        md:bg-gradient-to-br from-cyan-950/70 via-transparent to-purple-950/90
        p-1
        overflow-hidden
        w-full
        max-w-xs sm:max-w-md lg:max-w-xl
        min-h-[220px] sm:min-h-[320px] lg:min-h-[410px]
        mx-auto
      "
      style={{
        aspectRatio: "1/1",
      }}
    >
      {/* Glow Aura Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full blur-3xl opacity-30 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-700 rounded-full animate-pulse" />
      </div>
      
      {/* Responsive Viewer - overlays above aura */}
      <spline-viewer
        url={ROBOT_VIEWER_URL}
        style={{
          width: "100vw",
          height: "100vh",
          minHeight: 700,
          maxHeight: 800,
          borderRadius: "1.5rem",
        }}
      ></spline-viewer>
    </div>
  );
};

export default RobotAnimation;
