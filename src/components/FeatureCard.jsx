const FeatureCard = ({ title, subtitle }) => {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default FeatureCard;
