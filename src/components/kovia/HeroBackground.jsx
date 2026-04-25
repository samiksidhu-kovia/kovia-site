import { useEffect, useRef } from 'react';

export default function HeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Mist waves - larger, more visible, wave-like motion
    const waves = [
      { y: 0.85, amplitude: 0.08, frequency: 0.0008, speed: 0.015, opacity: 0.35, height: 0.5 },
      { y: 0.75, amplitude: 0.06, frequency: 0.0012, speed: -0.012, opacity: 0.28, height: 0.45 },
      { y: 0.90, amplitude: 0.10, frequency: 0.0006, speed: 0.018, opacity: 0.40, height: 0.55 },
      { y: 0.65, amplitude: 0.05, frequency: 0.0010, speed: -0.008, opacity: 0.20, height: 0.4 },
      { y: 0.95, amplitude: 0.07, frequency: 0.0014, speed: 0.022, opacity: 0.32, height: 0.35 },
    ];

    // Floating mist clouds
    const clouds = [
      { x: 0.2, y: 0.7, size: 0.4, opacity: 0.25, speedX: 0.0003, speedY: 0.0001, phase: 0 },
      { x: 0.7, y: 0.8, size: 0.5, opacity: 0.30, speedX: -0.0002, speedY: 0.00015, phase: 1.5 },
      { x: 0.5, y: 0.6, size: 0.35, opacity: 0.20, speedX: 0.00025, speedY: -0.0001, phase: 3 },
      { x: 0.1, y: 0.85, size: 0.45, opacity: 0.28, speedX: 0.0004, speedY: 0.00008, phase: 4.5 },
      { x: 0.85, y: 0.65, size: 0.38, opacity: 0.22, speedX: -0.00035, speedY: 0.00012, phase: 2 },
      { x: 0.4, y: 0.9, size: 0.5, opacity: 0.35, speedX: 0.0002, speedY: -0.00005, phase: 5.5 },
    ];

    let t = 0;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      
      // Dark base
      ctx.fillStyle = '#0D0D0D';
      ctx.fillRect(0, 0, w, h);

      // Draw wave layers from back to front
      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, h);
        
        // Create wavy top edge
        for (let x = 0; x <= w; x += 5) {
          const waveOffset = Math.sin((x * wave.frequency) + (t * wave.speed)) * (h * wave.amplitude);
          const y = (h * wave.y) + waveOffset;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(w, h);
        ctx.closePath();

        // Gradient fill from gold to transparent
        const grad = ctx.createLinearGradient(0, h * wave.y, 0, h);
        grad.addColorStop(0, `rgba(179, 137, 102, ${wave.opacity * 0.3})`);
        grad.addColorStop(0.3, `rgba(179, 137, 102, ${wave.opacity * 0.6})`);
        grad.addColorStop(0.7, `rgba(179, 137, 102, ${wave.opacity})`);
        grad.addColorStop(1, `rgba(179, 137, 102, ${wave.opacity * 0.5})`);
        
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Draw floating mist clouds
      clouds.forEach((cloud) => {
        // Animate position with smooth sine wave motion
        const px = (cloud.x + Math.sin(t * cloud.speedX * 50 + cloud.phase) * 0.15) * w;
        const py = (cloud.y + Math.cos(t * cloud.speedY * 50 + cloud.phase) * 0.08) * h;
        const size = cloud.size * Math.min(w, h);
        
        // Pulsing opacity
        const pulse = 0.85 + 0.15 * Math.sin(t * 0.008 + cloud.phase);
        
        const grad = ctx.createRadialGradient(px, py, 0, px, py, size);
        grad.addColorStop(0, `rgba(179, 137, 102, ${cloud.opacity * pulse})`);
        grad.addColorStop(0.4, `rgba(179, 137, 102, ${cloud.opacity * 0.5 * pulse})`);
        grad.addColorStop(0.7, `rgba(179, 137, 102, ${cloud.opacity * 0.2 * pulse})`);
        grad.addColorStop(1, 'rgba(179, 137, 102, 0)');
        
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Add subtle top-down vignette to keep focus on content
      const vignette = ctx.createLinearGradient(0, 0, 0, h * 0.6);
      vignette.addColorStop(0, 'rgba(13, 13, 13, 0.9)');
      vignette.addColorStop(0.5, 'rgba(13, 13, 13, 0.3)');
      vignette.addColorStop(1, 'rgba(13, 13, 13, 0)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h * 0.6);

      t++;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: 'blur(40px)', transform: 'scale(1.1)' }}
    />
  );
}