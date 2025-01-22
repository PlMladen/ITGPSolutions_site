import React from "react";

export default function GlowFilter () {
  return(
    <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feFlood floodColor="cyan" result="color" />
            <feComposite in2="blur" operator="in" />
            <feComposite in2="SourceAlpha" operator="in" />
            <feComposite in2="SourceGraphic" operator="arithmetic" k2="1" k3="1" />
        </filter>
        </defs>
    </svg>
    );
  }