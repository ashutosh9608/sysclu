import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

const WireframeBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x9dff13,  // Updated color format
          backgroundColor: 0x03070a,  // Updated background color format
          points: 6.00,
          maxDistance: 12.00,
          spacing: 16.00
        })
      );
    }

    // Cleanup
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div 
      ref={vantaRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ height: '100vh', width: '100vw' }}
    />
  );
};

export default WireframeBackground; 