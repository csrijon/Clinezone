import StatCard from "./ StatCard";
import "./stats.css"

const StatsSection = () => {
  return (
    <div className="stats-section">
      {/* ✅ Circles in background */}
      <div className="background-circles">
        <span className="circle" style={{ top: "10%", left: "5%" }}></span>
        <span className="circle" style={{ top: "25%", left: "20%" }}></span>
        <span className="circle" style={{ top: "40%", left: "35%" }}></span>
        <span className="circle" style={{ top: "55%", left: "50%" }}></span>
        <span className="circle" style={{ top: "70%", left: "65%" }}></span>
        <span className="circle" style={{ top: "85%", left: "80%" }}></span>
      </div>

      {/* ✅ Cards over the circles */}
      <div className="cards-wrapper">
        <StatCard number="10+" label="Happy Clients" />
        <StatCard number="8+" label="Project Delivered" />
        <StatCard number="99%" label="Satisfaction" />
      </div>
    </div>
  );
};

export default StatsSection;
