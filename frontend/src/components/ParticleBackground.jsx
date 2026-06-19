import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);

    const count = 160;
    const particles = Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 1200,
      y: (Math.random() - 0.5) * 1200,
      z: Math.random() * 700 + 200,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      vz: (Math.random() - 0.5) * 0.4,
    }));

    let angle = 0;
    const goldDark = "rgba(212,175,55,";
    const goldLight = "rgba(139,105,20,";

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      angle += 0.0008;
      const { x: mx, y: my } = mouseRef.current;
      const cosY = Math.cos(angle + mx * 0.25);
      const sinY = Math.sin(angle + mx * 0.25);
      const cosX = Math.cos(my * 0.15);
      const sinX = Math.sin(my * 0.15);

      const fov = 420;
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const gold = isDark ? goldDark : goldLight;

      const proj = particles.map((p) => {
        const rx = p.x * cosY - p.z * sinY;
        const rz = p.x * sinY + p.z * cosY;
        const ry = p.y * cosX - rz * sinX;
        const rz2 = p.y * sinX + rz * cosX;
        const z = rz2 + 700;
        if (z <= 0) return null;
        const scale = fov / z;
        return {
          sx: rx * scale + cx,
          sy: ry * scale + cy,
          size: Math.max(scale * 1.8, 0.4),
          op: Math.min(scale * 0.9, 0.85),
        };
      }).filter(Boolean);

      // Lines
      for (let i = 0; i < proj.length; i++) {
        for (let j = i + 1; j < proj.length; j++) {
          const dx = proj[i].sx - proj[j].sx;
          const dy = proj[i].sy - proj[j].sy;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            const a = (1 - d / 90) * (isDark ? 0.18 : 0.12);
            ctx.strokeStyle = gold + a + ")";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(proj[i].sx, proj[i].sy);
            ctx.lineTo(proj[j].sx, proj[j].sy);
            ctx.stroke();
          }
        }
      }

      // Dots
      proj.forEach(({ sx, sy, size, op }) => {
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fillStyle = gold + (isDark ? op : op * 0.55) + ")";
        ctx.fill();
      });

      // Drift
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.z += p.vz;
        if (Math.abs(p.x) > 700) p.vx *= -1;
        if (Math.abs(p.y) > 700) p.vy *= -1;
        if (p.z > 1000 || p.z < 100) p.vz *= -1;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: isDark ? 0.45 : 0.2 }}
    />
  );
};

export default ParticleBackground;
