import React from 'react';
import './SideBy.css';
import projectVideo from '../../assets/project-video.mp4';
import { useNavigate } from "react-router-dom";


function SideBy() {
  const navigate = useNavigate();
  return (
    <section className="sideby flex">
      {/* Left side: background video */}
      <div className="sideby-video-wrap">
        <video
          className="sideby-video"
          src={projectVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Right side: text content */}
      <div className="sideby-content flex flex-col items-center justify-center">
        <h1 className="sideby-title">Summer Casuals</h1>
        <p className="sideby-subtitle">Discover what's new</p>
        <button
          className="theme-btn"
          onClick={() => navigate("/collection/casual")}
        >
          Shop Now
        </button>
    </div>
    </section>
  );
}

export default SideBy;