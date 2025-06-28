import React from 'react';
import "../components/orbit.css"

const OrbitRing = ({ id, className, dots }) => {
  return (
    <div id={id} className={`orbit-ring ${className}`}>
      {dots.map((style, index) => (
        <div
          key={index}
          className={className + '-circles'}
          style={{ ...style, position: 'absolute' }}
        ></div>
      ))}
    </div>
  );
};

const OrbitSystem = () => {
  return (
    <div className="main-orbit">
    <div id="circle-orbit-container">
      {/* Inner Orbit */}
      <OrbitRing
        id="inner-orbit"
        className="inner-orbit"
        dots={[
          { top: '50%', left: '50%', transform: 'translate(-50%, -200.5px)' },
          { top: '50%', left: '50%', transform: 'translate(-50%, 192.5px)' },
          { top: '50%', left: '50%', transform: 'translate(192.5px, -50%)' },
        ]}
      />

      {/* Middle Orbit */}
      <OrbitRing
        id="middle-orbit"
        className="middle-orbit"
        dots={[
          { top: '50%', left: '50%', transform: 'translate(-50%, -302.5px)' },
          { top: '50%', left: '50%', transform: 'translate(290.5px, -50%)' },
          { top: '50%', left: '50%', transform: 'translate(-50%, 289.5px)' },
          { top: '50%', left: '50%', transform: 'translate(-302.5px, -50%)' },
        ]}
      />

      {/* Outer Orbit */}
      <OrbitRing
        id="outer-orbit"
        className="outer-orbit"
        dots={[
          { top: '50%', left: '50%', transform: 'translate(-50%, -402.5px)' },
          { top: '50%', left: '50%', transform: 'translate(388px, -50%)' },
          { top: '50%', left: '50%', transform: 'translate(-50%, 387.5px)' },
          { top: '50%', left: '50%', transform: 'translate(-402px, -50%)' },
        ]}
      />
    </div>
    </div>
  );
};

export default OrbitSystem;

