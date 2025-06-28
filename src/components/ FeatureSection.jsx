import FeatureCard from "./FeatureCard";
import FeatureLeft from "./FeatureLeft";
import "./Feature.css"

const cards = [
  {
    title: "Streamlined Client Onboarding",
    subtitle: "Onboard new clients in minutes, not days.",
  },
  {
    title: "Bulk Client Management Tools",
    subtitle: "Manage hundreds of clients with ease.",
  },
  {
    title: "Dedicated Support System",
    subtitle: "Get help when you need it, always.",
  },
  {
    title: "Customizable Workflows",
    subtitle: "Get help when you need it, always.",
  },
];

const FeatureSection = () => {
  return (
    <div className="wrapper">
    <div className="feature-section">
      <FeatureLeft />
      <div className="feature-right">
        {cards.map((item, idx) => (
          <FeatureCard
            key={idx}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default FeatureSection;
