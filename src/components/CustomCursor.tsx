"use client";

import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<{ id: number; x: number; y: number }[]>([]);
  const trailIdCounter = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const id = trailIdCounter.current++;
      setTrails((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      
      setTimeout(() => {
        setTrails((prev) => prev.filter((t) => t.id !== id));
      }, 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      />
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x - 2,
            top: trail.y - 2,
          }}
        />
      ))}
    </>
  );
}
