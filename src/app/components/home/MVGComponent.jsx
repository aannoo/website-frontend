import React from "react";
import "./HomeStyles.css"
import Mission from "./img/missionImg2.0.png"
import Vision from "./img/visionImg2.0.png"
import Goal from "./img/goalImg2.0.png"

export default function MVGBanner() {
  return (
    <div className="mvg-container">
      <div className="mvg-item">
        <div className="mvg-img">
          <img src={Mission} alt="Company Mission" className="mvg-logos"/>
        </div>
        <div className="mvg-content">
          <h3 className="mvg-title" style={{ color: "#692E47", textTransform: "uppercase" }}>Mission</h3>
          <p className="mvg-paragraph" style={{ color: "#000000" }}>Redback Operations aims to harness the power of IoT, AI and 3D game worlds to push your exercise routine into the future.</p>
        </div>
      </div>
      <div className="mvg-item reverse">
        <div className="mvg-img">
          <img src={Vision} alt="Company Vision" className="mvg-logos"/>
        </div>
        <div className="mvg-content">
          <h3 className="mvg-title" style={{ color: "#692E47", textTransform: "uppercase" }}>Vision</h3>
          <p className="mvg-paragraph" style={{ color: "#000000" }}>By developing cutting-edge technologies and advances in the space of IoT sensors, AI and Game development, Redback Operations seeks to provide users with a fully immersive experience where they can engage with other users both casually and competitively.</p>
        </div>
      </div>
      <div className="mvg-item">
        <div className="mvg-img">
          <img src={Goal} alt="Company Goal" className="mvg-logos"/>
        </div>
        <div className="mvg-content">
          <h3 className="mvg-title" style={{ color: "#692E47", textTransform: "uppercase" }}>Goal</h3>
          <ul style={{ color: "#000000" }}>
            <li>Develop an engaged and self-sustaining online community </li>
            <li>Provide real-time performance feedback to users through cutting edge IoT sensors and AI </li>
            <li>Provide fully immersive 3D worlds that users can experience from the comfort of their own homes</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
