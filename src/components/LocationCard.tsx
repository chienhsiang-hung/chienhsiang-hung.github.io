import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { MapPin } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const LocationCard = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Taipei'
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let phi = 4.5;
    let width = 0;

    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.6, 0.2, 1],
      glowColor: [0.2, 0.2, 0.2],
      opacity: 1,
      markers: [
        { location: [24.774, 121.047], size: 0.1 } // (Hsinchu)
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.005;
        }
        state.phi = phi + r;
        state.width = width * 2;
        state.height = width * 2;
      }
    });

    setTimeout(() => canvasRef.current!.style.opacity = '1');
    return () => { 
        globe.destroy();
        window.removeEventListener('resize', onResize);
    };
  }, [r]);

  return (
    <SpotlightCard className={`p-0 relative overflow-hidden h-full min-h-[200px] flex flex-col justify-between ${className}`}>
      {/* 3D Globe Canvas */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-80 mt-10">
         <canvas
            ref={canvasRef}
            style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: '1' }}
            onPointerDown={(e) => {
              pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
              canvasRef.current!.style.cursor = 'grabbing';
            }}
            onPointerUp={() => {
              pointerInteracting.current = null;
              canvasRef.current!.style.cursor = 'grab';
            }}
            onPointerOut={() => {
              pointerInteracting.current = null;
              canvasRef.current!.style.cursor = 'grab';
            }}
            onMouseMove={(e) => {
              if (pointerInteracting.current !== null) {
                const delta = e.clientX - pointerInteracting.current;
                pointerInteractionMovement.current = delta;
                setR(delta / 200);
              }
            }}
            onTouchMove={(e) => {
              if (pointerInteracting.current !== null && e.touches[0]) {
                const delta = e.touches[0].clientX - pointerInteracting.current;
                pointerInteractionMovement.current = delta;
                setR(delta / 200);
              }
            }}
         />
      </div>
      
      <div className="relative z-10 p-5 h-full flex flex-col justify-between pointer-events-none">
        <div className="flex justify-between items-start">
          <div className="p-2 bg-neutral-900/80 rounded-lg border border-white/10 backdrop-blur-md shadow-xl">
            <MapPin size={20} className="text-purple-400" />
          </div>
          <div className="px-2 py-1 bg-neutral-900/80 border border-green-500/30 rounded-full text-[10px] text-green-400 font-mono flex items-center gap-2 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            {time}
          </div>
        </div>

        <div className="p-2 -mx-2 -mb-2 rounded-b-xl">
          <h3 className="text-xl font-bold text-white">Taiwan</h3>
          <p className="text-xs text-neutral-400 mt-1">Hsinchu Science Park</p>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default LocationCard;